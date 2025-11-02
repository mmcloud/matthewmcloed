import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
  GlassPanelDescription,
} from '@/components/glass-panel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Login | Cloud Native Pro',
  description: 'Access your client dashboard.',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <GlassPanel className="w-full max-w-md">
        <GlassPanelHeader className="text-center">
          <GlassPanelTitle className="text-3xl text-white font-headline">Client Portal</GlassPanelTitle>
          <GlassPanelDescription className="text-gray-300">
            Welcome back. Please log in to access your dashboard.
          </GlassPanelDescription>
        </GlassPanelHeader>
        <GlassPanelContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                placeholder="your@email.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-300">Password</Label>
                    <Link href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>
              <Input id="password" required type="password" />
            </div>
            <Link href="/dashboard">
                <Button className="w-full" type="submit">
                Log In
                </Button>
            </Link>
          </form>
        </GlassPanelContent>
      </GlassPanel>
    </div>
  );
}
