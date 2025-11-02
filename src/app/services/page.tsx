import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
} from '@/components/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Cloud, Cpu, GitMerge, ShieldCheck, Workflow } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Cloud Native Pro',
  description: 'Explore the expert cloud-native and Kubernetes services offered by Matthew McLeod.',
};

const services = [
    {
        icon: Cloud,
        title: 'Cloud Architecture & Strategy',
        description: 'Designing and implementing scalable, resilient, and cost-effective cloud solutions on AWS, GCP, and Azure. From monolith migration to serverless architecture, get a roadmap tailored to your business goals.',
        tags: ['AWS', 'GCP', 'Azure', 'Serverless', 'Microservices'],
    },
    {
        icon: Cpu,
        title: 'Kubernetes & Containerization',
        description: 'End-to-end Kubernetes solutions, including cluster design, deployment, monitoring, and security. Leverage the power of containers with Docker and Kubernetes for ultimate portability and efficiency.',
        tags: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Service Mesh'],
    },
    {
        icon: GitMerge,
        title: 'DevOps & CI/CD Automation',
        description: 'Streamline your development lifecycle with robust CI/CD pipelines, GitOps workflows, and infrastructure as code. Accelerate delivery, improve quality, and reduce operational overhead.',
        tags: ['CI/CD', 'GitOps', 'Terraform', 'Ansible', 'Jenkins'],
    },
    {
        icon: ShieldCheck,
        title: 'Security & Compliance',
        description: 'Implementing security best practices throughout your cloud infrastructure. From network security to identity and access management, ensure your applications and data are protected.',
        tags: ['DevSecOps', 'IAM', 'Network Security', 'Compliance', 'Vault'],
    },
    {
        icon: Workflow,
        title: 'Platform Engineering',
        description: 'Building internal developer platforms (IDPs) to improve developer experience and productivity. Provide your teams with self-service tools and golden paths for building and deploying applications.',
        tags: ['IDP', 'Backstage', 'Developer Experience', 'Automation'],
    }
];

export default function ServicesPage() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl font-headline">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 md:text-xl">
            Tailored solutions to accelerate your journey to the cloud and beyond.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const iconColor = "w-10 h-10 text-white flex-shrink-0";
              return (
                <GlassPanel key={service.title} className="flex flex-col">
                    <GlassPanelHeader className="flex-row items-center gap-4">
                        <service.icon className={iconColor} />
                        <GlassPanelTitle className="text-xl text-white">{service.title}</GlassPanelTitle>
                    </GlassPanelHeader>
                    <GlassPanelContent className="flex-grow">
                        <p className="text-gray-300">{service.description}</p>
                    </GlassPanelContent>
                    <GlassPanelContent>
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </GlassPanelContent>
                </GlassPanel>
            )})}
        </div>
      </div>
    </section>
  );
}
