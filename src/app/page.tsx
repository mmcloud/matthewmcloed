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
      </section>
    </div>
  );
}
