import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
  GlassPanelDescription
} from "@/components/glass-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { ArrowUpRight, Package, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Cloud Native Pro',
  description: 'Client dashboard overview.',
};


const chartData = [
  { status: "Completed", count: 12 },
  { status: "In Progress", count: 4 },
  { status: "On Hold", count: 1 },
  { status: "Planned", count: 8 },
];

const chartConfig = {
  count: {
    label: "Projects",
    color: "hsl(var(--primary))",
  },
};

const invoices = [
    { id: 'INV001', project: 'Platform Migration', amount: '$5,000.00', status: 'Paid' },
    { id: 'INV002', project: 'CI/CD Pipeline Setup', amount: '$3,500.00', status: 'Pending' },
    { id: 'INV003', project: 'Kubernetes Consulting', amount: '$2,000.00', status: 'Paid' },
    { id: 'INV004', project: 'Security Audit', amount: '$4,200.00', status: 'Overdue' },
];

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <GlassPanel>
          <GlassPanelHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <GlassPanelTitle className="text-sm font-medium text-gray-300">
              Active Projects
            </GlassPanelTitle>
            <Package className="h-4 w-4 text-gray-400" />
          </GlassPanelHeader>
          <GlassPanelContent>
            <div className="text-2xl font-bold text-white">4</div>
            <p className="text-xs text-gray-400">+1 from last month</p>
          </GlassPanelContent>
        </GlassPanel>
        <GlassPanel>
          <GlassPanelHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <GlassPanelTitle className="text-sm font-medium text-gray-300">
              Pending Invoices
            </GlassPanelTitle>
            <FileText className="h-4 w-4 text-gray-400" />
          </GlassPanelHeader>
          <GlassPanelContent>
            <div className="text-2xl font-bold text-white">2</div>
            <p className="text-xs text-gray-400">Totaling $7,700.00</p>
          </GlassPanelContent>
        </GlassPanel>
        <GlassPanel>
          <GlassPanelHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <GlassPanelTitle className="text-sm font-medium text-gray-300">
              Unread Messages
            </GlassPanelTitle>
            <MessageSquare className="h-4 w-4 text-gray-400" />
          </GlassPanelHeader>
          <GlassPanelContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-400">2 from support</p>
          </GlassPanelContent>
        </GlassPanel>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <GlassPanel className="xl:col-span-2">
          <GlassPanelHeader>
            <GlassPanelTitle className="text-white">Project Status</GlassPanelTitle>
            <GlassPanelDescription className="text-gray-400">
              An overview of all your projects.
            </GlassPanelDescription>
          </GlassPanelHeader>
          <GlassPanelContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="status"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  stroke="hsl(var(--muted-foreground))"
                />
                 <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="count" fill="var(--color-count)" radius={8} />
              </BarChart>
            </ChartContainer>
          </GlassPanelContent>
        </GlassPanel>
        <GlassPanel>
          <GlassPanelHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <GlassPanelTitle className="text-white">Recent Invoices</GlassPanelTitle>
              <GlassPanelDescription className="text-gray-400">
                Recent invoices for your projects.
              </GlassPanelDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/invoices">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </GlassPanelHeader>
          <GlassPanelContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.slice(0,5).map(invoice => (
                    <TableRow key={invoice.id}>
                        <TableCell>
                            <div className="font-medium text-white">{invoice.id}</div>
                            <div className="hidden text-sm text-gray-400 md:inline">
                                {invoice.project}
                            </div>
                        </TableCell>
                        <TableCell>
                             <Badge 
                                variant={invoice.status === 'Paid' ? 'secondary' : invoice.status === 'Pending' ? 'outline' : 'destructive' }
                                className={invoice.status === 'Paid' ? 'text-green-400 border-green-400/50' : invoice.status === 'Pending' ? 'text-amber-400 border-amber-400/50' : ''}
                            >
                                {invoice.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right text-white">{invoice.amount}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanelContent>
        </GlassPanel>
      </div>
    </>
  );
}
