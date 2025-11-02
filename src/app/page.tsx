import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col text-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-left pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/50 border border-border px-3 py-1 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4 text-primary" />
              Kubernetes Certified Expert
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter">
              Transform Your Infrastructure with <span className="text-primary">Kubernetes Excellence</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Enterprise-grade cloud solutions, DevOps automation, and Kubernetes expertise to scale your business with confidence.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" passHref>
                <Button size="lg">
                  Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button size="lg" variant="secondary">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="glass p-8 rounded-2xl space-y-4">
              {[
                "Production-grade Kubernetes deployments",
                "High availability architecture",
                "Automated scaling solutions",
                "Cost optimization strategies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="bg-primary/10 border border-primary/20 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-primary"/>
                  </div>
                  <span className="flex-1 text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            Certified Kubernetes Expert
          </h2>
          <p className="text-muted-foreground mb-8">Holding all three official CNCF Kubernetes certifications</p>
          <div className="flex flex-wrap justify-center gap-6 text-sky-200 font-medium">
            <span className="bg-card/70 border border-border px-5 py-2 rounded-full shadow-sm">
              CKA — Admin
            </span>
            <span className="bg-card/70 border border-border px-5 py-2 rounded-full shadow-sm">
              CKAD — Developer
            </span>
            <span className="bg-card/70 border border-border px-5 py-2 rounded-full shadow-sm">
              CKS — Security
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <p className="text-4xl font-bold">99.9%</p>
            <p className="mt-2 text-sm text-muted-foreground">Uptime SLA</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-muted-foreground">Support Available</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl font-bold">Comprehensive Cloud Services</h2>
          <p className="mt-3 text-muted-foreground">
            End-to-end solutions for modern cloud infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              title: 'Kubernetes Consulting',
              desc: 'Expert guidance on orchestration, design, and best practices.',
            },
            {
              title: 'Cloud Migration',
              desc: 'Seamless transition to cloud-native infrastructure with zero downtime.',
            },
            {
              title: 'DevOps Automation',
              desc: 'CI/CD pipelines, GitOps workflows, and infrastructure as code.',
            },
            {
              title: 'Security & Compliance',
              desc: 'Hardening, policy enforcement, and compliance audits.',
            },
          ].map((s) => (
            <div key={s.title} className="glass-card rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/40 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-muted-foreground">
            Let's discuss how we can transform your infrastructure and accelerate
            your growth.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
