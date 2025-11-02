import { GlassPanel, GlassPanelContent } from '@/components/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Cloud Native Pro',
  description: 'View your invoices.',
};

const invoices = [
    { id: 'INV001', project: 'Platform Migration', amount: '$5,000.00', status: 'Paid', date: '2023-11-01' },
    { id: 'INV002', project: 'CI/CD Pipeline Setup', amount: '$3,500.00', status: 'Pending', date: '2023-11-15' },
    { id: 'INV003', project: 'Kubernetes Consulting', amount: '$2,000.00', status: 'Paid', date: '2023-10-20' },
    { id: 'INV004', project: 'Security Audit', amount: '$4,200.00', status: 'Overdue', date: '2023-10-10' },
    { id: 'INV005', project: 'Monthly Retainer', amount: '$6,000.00', status: 'Paid', date: '2023-10-01' },
    { id: 'INV006', project: 'Infrastructure Cost Optimization', amount: '$2,500.00', status: 'Pending', date: '2023-12-01' },
];

export default function InvoicesPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl font-headline">
                    Invoices
                </h1>
                <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Export All
                </Button>
            </div>
            <GlassPanel>
                <GlassPanelContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice ID</TableHead>
                                <TableHead>Project</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium text-white">{invoice.id}</TableCell>
                                    <TableCell className="text-gray-300">{invoice.project}</TableCell>
                                    <TableCell className="text-gray-300">{invoice.date}</TableCell>
                                    <TableCell>
                                        <Badge 
                                            variant={invoice.status === 'Paid' ? 'secondary' : invoice.status === 'Pending' ? 'outline' : 'destructive'}
                                            className={
                                                invoice.status === 'Paid' ? 'text-green-400 border-green-400/50' 
                                                : invoice.status === 'Pending' ? 'text-amber-400 border-amber-400/50' 
                                                : ''
                                            }
                                        >
                                            {invoice.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right font-medium text-white">{invoice.amount}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </GlassPanelContent>
            </GlassPanel>
        </div>
    );
}
