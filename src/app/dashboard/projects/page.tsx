import { GlassPanel, GlassPanelContent, GlassPanelHeader, GlassPanelTitle } from '@/components/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | Cloud Native Pro',
  description: 'View your projects.',
};

const projects = [
    {
        title: 'E-commerce Platform Migration to K8s',
        status: 'In Progress',
        progress: 75,
        description: 'Migrating the legacy e-commerce platform to a scalable Kubernetes architecture on AWS EKS.',
        repo: 'ecommerce-k8s-migration',
        docs: '#',
    },
    {
        title: 'Global CI/CD Pipeline Implementation',
        status: 'In Progress',
        progress: 40,
        description: 'Building a unified CI/CD pipeline using Jenkins X and GitOps principles for all microservices.',
        repo: 'global-cicd-pipeline',
        docs: '#',
    },
    {
        title: 'Fintech App Security Audit',
        status: 'Completed',
        progress: 100,
        description: 'Conducted a full security audit of the cloud infrastructure and application codebase, delivering a comprehensive report.',
        repo: 'fintech-security-audit',
        docs: '#',
    },
    {
        title: 'Internal Developer Platform (IDP) Scoping',
        status: 'Planned',
        progress: 0,
        description: 'Scoping and designing an IDP using Backstage to improve developer experience and velocity.',
        repo: 'idp-scoping',
        docs: '#',
    },
];

export default function ProjectsPage() {
  const filteredProjects = (status: string) => projects.filter(p => p.status === status);

  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl font-headline mb-8">
            Projects
        </h1>
        <Tabs defaultValue="all">
            <TabsList className="bg-black/20 border border-white/10 text-gray-300">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="planned">Planned</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </TabsContent>
            <TabsContent value="in-progress" className="mt-6">
                 <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects('In Progress').map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </TabsContent>
            <TabsContent value="planned" className="mt-6">
                 <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects('Planned').map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
                 <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects('Completed').map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </TabsContent>
        </Tabs>
    </div>
  );
}

function ProjectCard(project: typeof projects[0]) {
    return (
        <GlassPanel className="flex flex-col">
            <GlassPanelHeader>
                <div className="flex items-start justify-between">
                    <GlassPanelTitle className="text-xl text-white">{project.title}</GlassPanelTitle>
                    <Badge variant={project.status === 'Completed' ? 'secondary' : project.status === 'Planned' ? 'outline' : 'default'}
                     className={project.status === 'Completed' ? 'text-green-400 border-green-400/50' : project.status === 'Planned' ? 'text-amber-400 border-amber-400/50' : 'bg-primary/20 text-primary border-primary/50' }
                    >
                        {project.status}
                    </Badge>
                </div>
                <p className="text-gray-400 pt-2">{project.description}</p>
            </GlassPanelHeader>
            <GlassPanelContent className="flex-grow space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">Progress</span>
                        <span className="text-sm font-medium text-gray-300">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                </div>
            </GlassPanelContent>
            <GlassPanelContent className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                    <Link href="#"><Github className="mr-2 h-4 w-4" />{project.repo}</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <Link href="#"><FileText className="mr-2 h-4 w-4" /> Docs</Link>
                </Button>
            </GlassPanelContent>
        </GlassPanel>
    )
}
