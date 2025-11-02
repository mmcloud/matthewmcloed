import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-white font-semibold mb-3">Matthew McLeod</h3>
          <p className="text-sm">
            Cloud-native Kubernetes expert helping businesses scale and optimize
            their infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Expertise</h4>
          <ul className="space-y-1 text-sm">
            <li>Kubernetes</li>
            <li>Cloud Migration</li>
            <li>DevOps</li>
            <li>Infrastructure</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Matthew McLeod. All rights reserved.
      </p>
    </footer>
  );
}