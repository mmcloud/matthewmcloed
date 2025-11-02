import { GlassPanel, GlassPanelContent, GlassPanelHeader, GlassPanelTitle } from "@/components/glass-panel";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings | Cloud Native Pro',
    description: 'Manage your account settings.',
};

export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl font-headline mb-8">
                Settings
            </h1>
            <GlassPanel>
                <GlassPanelHeader>
                    <GlassPanelTitle className="text-white">Account Settings</GlassPanelTitle>
                </GlassPanelHeader>
                <GlassPanelContent className="min-h-[400px] flex items-center justify-center">
                    <p className="text-gray-400">Settings page coming soon.</p>
                </GlassPanelContent>
            </GlassPanel>
        </div>
    );
}
