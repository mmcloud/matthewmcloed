import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col text-white">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="inline-flex items-center gap-2 bg-card/50 border border-border px-3 py-1 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4 text-primary" />
              Kubernetes Certified Expert
            </div>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Transform Your Infrastructure with <span className="text-sky-300">Kubernetes Excellence</span>
          </h1>

          <p className="text-sky-100/90 mb-8 max-w-xl mx-auto">
            Enterprise-grade cloud solutions, DevOps automation, and Kubernetes expertise to scale your business with confidence.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white/10 px-8 py-3 rounded-lg border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
              Schedule Consultation
            </Link>
            <Link href="/services" className="border border-white/30 bg-transparent px-8 py-3 rounded-lg hover:bg-white/10 transition">
              View Services
            </Link>
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
