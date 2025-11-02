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

export const metadata: Metadata = {
  title: 'Contact | Cloud Native Pro',
  description: 'Get in touch with Matthew McLeod for cloud-native consulting and services.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-24">
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
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" placeholder="Your Name" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
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
    </div>
  );
}
