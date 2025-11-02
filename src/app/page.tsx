import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 bg-gradient-to-b from-sky-50 to-white">
        <p className="uppercase text-sm tracking-widest text-sky-600 font-semibold">
          Kubernetes Certified Expert
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Transform Your Infrastructure with{' '}
          <span className="text-sky-600">Kubernetes Excellence</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-600">
          Enterprise-grade cloud solutions, DevOps automation, and Kubernetes
          expertise to scale your business with confidence.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" passHref>
            <Button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700">
              Schedule Consultation
            </Button>
          </Link>
          <Link href="/services" passHref>
            <Button
              variant="outline"
              className="border-sky-600 text-sky-700 px-6 py-3 rounded-lg hover:bg-sky-50"
            >
              View Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Certified Kubernetes Expert
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-sky-700 font-medium">
          <span className="bg-sky-50 px-5 py-2 rounded-full shadow-sm">
            CKA — Admin
          </span>
          <span className="bg-sky-50 px-5 py-2 rounded-full shadow-sm">
            CKAD — Developer
          </span>
          <span className="bg-sky-50 px-5 py-2 rounded-full shadow-sm">
            CKS — Security
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-sky-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <p className="text-4xl font-bold">99.9%</p>
            <p className="mt-2 text-sm">Uptime SLA</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="mt-2 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="mt-2 text-sm">Support Available</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Comprehensive Cloud Services</h2>
          <p className="mt-3 text-gray-600">
            End-to-end solutions for modern cloud infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
            <div
              key={s.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-sky-700 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Services</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-left px-4">
            {[
              'Production-grade Kubernetes deployments',
              'Cost optimization strategies',
              'High availability architecture',
              'Automated scaling solutions',
              'Disaster recovery planning',
              'Performance monitoring & optimization',
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sky-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Scale?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Let's discuss how we can transform your infrastructure and accelerate
          your growth.
        </p>
        <Link href="/contact" passHref>
          <Button className="bg-white text-sky-700 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50">
            Get Started Today
          </Button>
        </Link>
      </section>
    </div>
  );
}