import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-white font-semibold mb-3">Matthew McLeod</h3>
          <p className="text-sm text-muted-foreground">
            Cloud-native Kubernetes expert helping businesses scale and optimize
            their infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-white">
                Contact
              </Link>
            </li>
             <li>
              <Link href="/login" className="text-muted-foreground hover:text-white">
                Client Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Expertise</h4>
          <ul className="space-y-1 text-sm">
            <li className="text-muted-foreground">Kubernetes</li>
            <li className="text-muted-foreground">Cloud Migration</li>
            <li className="text-muted-foreground">DevOps</li>
            <li className="text-muted-foreground">Infrastructure</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Matthew McLeod. All rights reserved.
      </p>
    </footer>
  );
}
