import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
} from '@/components/glass-panel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Cloud Native Pro',
  description: 'Insights and articles on cloud-native, Kubernetes, and DevOps by Matthew McLeod.',
};

const blogPosts = [
  {
    slug: 'demystifying-kubernetes-networking',
    title: 'Demystifying Kubernetes Networking',
    date: new Date(2023, 10, 15),
    excerpt: 'A deep dive into Services, Ingress, and CNIs. Understand how pods communicate with each other and the outside world.',
    imageId: 'blog-1',
  },
  {
    slug: 'the-power-of-infrastructure-as-code',
    title: 'The Power of Infrastructure as Code',
    date: new Date(2023, 9, 28),
    excerpt: 'How Terraform can help you manage your cloud resources with confidence and predictability.',
    imageId: 'blog-2',
  },
  {
    slug: 'building-a-resilient-ci-cd-pipeline',
    title: 'Building a Resilient CI/CD Pipeline',
    date: new Date(2023, 9, 5),
    excerpt: 'Best practices for creating automated pipelines that are fast, reliable, and secure.',
    imageId: 'blog-3',
  },
   {
    slug: 'introduction-to-service-meshes',
    title: 'Introduction to Service Meshes with Istio',
    date: new Date(2023, 8, 20),
    excerpt: 'Explore how a service mesh can solve complex observability, security, and reliability challenges in a microservices architecture.',
    imageId: 'blog-1',
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl font-headline">
            From the Blog
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 md:text-xl">
            Insights on cloud-native, Kubernetes, and modern software
            development.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-1 lg:grid-cols-2">
          {blogPosts.map((post) => {
            const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
            return (
              <Link href="#" key={post.slug}>
                <GlassPanel className="h-full transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  {postImage && (
                     <Image
                      src={postImage.imageUrl}
                      alt={post.title}
                      data-ai-hint={postImage.imageHint}
                      width={800}
                      height={400}
                      className="rounded-t-lg object-cover w-full h-48"
                    />
                  )}
                  <GlassPanelHeader>
                    <GlassPanelTitle className="text-2xl text-white">
                      {post.title}
                    </GlassPanelTitle>
                    <p className="text-sm text-gray-400">
                      {format(post.date, 'MMMM d, yyyy')}
                    </p>
                  </GlassPanelHeader>
                  <GlassPanelContent>
                    <p className="text-gray-300">{post.excerpt}</p>
                  </GlassPanelContent>
                   <GlassPanelContent>
                      <div className="flex items-center text-primary font-semibold">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2"/>
                      </div>
                  </GlassPanelContent>
                </GlassPanel>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
