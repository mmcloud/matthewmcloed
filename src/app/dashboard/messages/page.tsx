import { GlassPanel, GlassPanelContent, GlassPanelHeader, GlassPanelTitle } from "@/components/glass-panel";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Messages | Cloud Native Pro',
    description: 'View your messages.',
};

export default function MessagesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl font-headline mb-8">
                Messages
            </h1>
            <GlassPanel>
                <GlassPanelHeader>
                    <GlassPanelTitle className="text-white">Inbox</GlassPanelTitle>
                </GlassPanelHeader>
                <GlassPanelContent className="min-h-[400px] flex items-center justify-center">
                    <p className="text-gray-400">Message functionality coming soon.</p>
                </GlassPanelContent>
            </GlassPanel>
        </div>
    );
}
