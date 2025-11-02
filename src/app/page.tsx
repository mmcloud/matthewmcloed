import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mx-auto glass p-10 rounded-2xl">
          <p className="uppercase tracking-widest text-sky-200">
            Kubernetes Certified Expert
          </p>
          <h1 className="text-5xl font-bold mt-4 mb-4">
            Transform Your Infrastructure
          </h1>
          <p className="text-sky-100/80">
            Enterprise-grade cloud solutions and Kubernetes expertise to scale
            your business with confidence.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button className="glass-button rounded-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button className="glass-button rounded-lg">View Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Certified Kubernetes Expert
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-sky-200 font-medium">
          <span className="bg-sky-900/50 px-5 py-2 rounded-full shadow-sm">
            CKA — Admin
          </span>
          <span className="bg-sky-900/50 px-5 py-2 rounded-full shadow-sm">
            CKAD — Developer
          </span>
          <span className="bg-sky-900/50 px-5 py-2 rounded-full shadow-sm">
            CKS — Security
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-sky-900/40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <p className="text-4xl font-bold">99.9%</p>
            <p className="mt-2 text-sm text-sky-200">Uptime SLA</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="mt-2 text-sm text-sky-200">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-sky-200">Support Available</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Comprehensive Cloud Services</h2>
          <p className="mt-3 text-sky-200">
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
            <div key={s.title} className="glass-card">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">
                {s.title}
              </h3>
              <p className="text-sky-100/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Services</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-sky-100/90 text-left px-4">
            {[
              'Production-grade Kubernetes deployments',
              'Cost optimization strategies',
              'High availability architecture',
              'Automated scaling solutions',
              'Disaster recovery planning',
              'Performance monitoring & optimization',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sky-900/40 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Scale?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-sky-100/80">
          Let's discuss how we can transform your infrastructure and accelerate
          your growth.
        </p>
        <Link href="/contact" passHref>
          <Button className="bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600">
            Get Started Today
          </Button>
        </Link>
      </section>
    </div>
  );
}
