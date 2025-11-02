'use client';

import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
} from '@/components/glass-panel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Pin } from 'lucide-react';
import type { Metadata } from 'next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection, serverTimestamp } from 'firebase/firestore';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) return;
    try {
      const collectionRef = collection(firestore, 'contact_form_entries');
      await addDocumentNonBlocking(collectionRef, {
        ...values,
        timestamp: serverTimestamp(),
      });

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    }
  }
  
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl font-headline">
            Contact Me
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 md:text-xl">
            Have a project in mind or just want to say hello? I'd love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-12 mt-12 md:grid-cols-2">
          <GlassPanel>
            <GlassPanelHeader>
              <GlassPanelTitle className="text-white">Send a Message</GlassPanelTitle>
            </GlassPanelHeader>
            <GlassPanelContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </GlassPanelContent>
          </GlassPanel>

          <div className="space-y-8">
            <GlassPanel>
              <GlassPanelHeader>
                  <GlassPanelTitle className="text-white">Contact Information</GlassPanelTitle>
              </GlassPanelHeader>
              <GlassPanelContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-gray-300">matthew.mcleod@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Pin className="h-6 w-6 text-primary" />
                  <span className="text-gray-300">Toronto, Canada</span>
                </div>
              </GlassPanelContent>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
