import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-48 pb-20 lg:pt-48 lg:pb-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div>
            <div className="inline-block mb-6">
              <div className="inline-flex items-center rounded-md border text-xs font-semibold glass-strong text-cyan-400 border-cyan-400/30 px-4 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="m15.5 13 1.5 8.5a.5.5 0 0 1-.8.5l-3.6-2.7a1 1 0 0 0-1.2 0l-3.6 2.7a.5.5 0 0 1-.8-.5l1.5-8.5" />
                </svg>
                Kubernetes Certified Expert
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Infrastructure with
              <span className="block text-gradient">
                Kubernetes Excellence
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Enterprise-grade cloud solutions, DevOps automation, and
              Kubernetes expertise to scale your business with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/30">
                  Schedule Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>

              <a href="/services">
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-8 glass-strong text-white hover:bg-white/20 border-white/20">
                  View Services
                </button>
              </a>
            </div>
          </div>

          {/* Right side visual cards */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20"></div>
            <div className="relative glass-strong rounded-2xl p-8 space-y-4 border border-cyan-500/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg glass-strong border border-cyan-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.8 10A10 10 0 1 1 17 3.3"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-3 glass-strong rounded w-3/4 mb-2"></div>
                  <div className="h-2 glass rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg glass-strong border border-cyan-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.8 10A10 10 0 1 1 17 3.3"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-3 glass-strong rounded w-3/4 mb-2"></div>
                  <div className="h-2 glass rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg glass-strong border border-cyan-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.8 10A10 10- 0 1 1 17 3.3"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-3 glass-strong rounded w-3/4 mb-2"></div>
                  <div className="h-2 glass rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg glass-strong border border-cyan-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.8 10A10 10 0 1 1 17 3.3"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-3 glass-strong rounded w-3/4 mb-2"></div>
                  <div className="h-2 glass rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌐 CERTIFIED KUBERNETES EXPERT + STATS SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Certified Kubernetes Expert</h2>
            <p className="text-white/70">Holding all three official CNCF Kubernetes certifications</p>
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* CKA */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                    <circle cx="12" cy="8" r="6"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">CKA</div>
                <div className="text-white/70 text-sm">Certified Kubernetes Administrator</div>
              </div>
            </div>

            {/* CKAD */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                    <circle cx="12" cy="8" r="6"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">CKAD</div>
                <div className="text-white/70 text-sm">Certified Kubernetes Application Developer</div>
              </div>
            </div>

            {/* CKS */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                    <circle cx="12" cy="8" r="6"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">CKS</div>
                <div className="text-white/70 text-sm">Certified Kubernetes Security Specialist</div>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center glass-strong rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/40 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-white/70 font-medium">Uptime SLA</div>
            </div>

            <div className="text-center glass-strong rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/40 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-white/70 font-medium">Years Experience</div>
            </div>

            <div className="text-center glass-strong rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/40 border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-white/70 font-medium">Support Available</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comprehensive Cloud Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              End-to-end solutions for modern cloud infrastructure
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Kubernetes Consulting */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Kubernetes Consulting</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Expert guidance on container orchestration, architecture design, and best practices.
                </p>
              </div>
            </div>

            {/* Cloud Migration */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
                    <line x1="6" x2="6.01" y1="6" y2="6"/>
                    <line x1="6" x2="6.01" y1="18" y2="18"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Migration</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Seamless transition to cloud-native infrastructure with zero downtime strategies.
                </p>
              </div>
            </div>

            {/* DevOps Automation */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="6" x2="6" y1="3" y2="15"/>
                    <circle cx="18" cy="6" r="3"/>
                    <circle cx="6" cy="18" r="3"/>
                    <path d="M18 9a9 9 0 0 1-9 9"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">DevOps Automation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  CI/CD pipelines, GitOps workflows, and infrastructure as code implementation.
                </p>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-xl border glass-strong border-white/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Security & Compliance</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Kubernetes security hardening, policy enforcement, and compliance audits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-white/70 mb-8">
              Battle-tested expertise delivering enterprise-grade solutions that scale.
            </p>
            <ul className="space-y-4">
              {[
                'Production-grade Kubernetes deployments',
                'Cost optimization strategies',
                'High availability architecture',
                'Automated scaling solutions',
                'Disaster recovery planning',
                'Performance monitoring & optimization'
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-30"></div>
            <div className="relative glass-strong rounded-2xl p-8 text-center border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-3 text-gradient">Ready to Scale?</h3>
              <p className="text-white/70 mb-6">
                Let's discuss how we can transform your infrastructure and accelerate your growth.
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/30">
                  Get Started Today
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
