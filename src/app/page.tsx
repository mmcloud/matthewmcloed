import {
  GlassPanel,
  GlassPanelContent,
  GlassPanelHeader,
  GlassPanelTitle,
} from '@/components/glass-panel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Cloud, Cpu, GitMerge } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'matthew-mcleod'
  );
  const blogImage1 = PlaceHolderImages.find((img) => img.id === 'blog-1');
  const blogImage2 = PlaceHolderImages.find((img) => img.id === 'blog-2');

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none font-headline">
                  Matthew McLeod
                </h1>
                <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                  Cloud Native & Kubernetes Expert
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Transforming businesses with scalable, resilient, and
                  cost-effective cloud solutions. Let's build the future of
                  your infrastructure, together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button size="lg">
                    Explore Services <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <GlassPanel className="p-4">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    width={400}
                    height={400}
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  />
                )}
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 bg-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <GlassPanel>
            <GlassPanelHeader>
              <GlassPanelTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-headline">
                About Me
              </GlassPanelTitle>
            </GlassPanelHeader>
            <GlassPanelContent>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4 text-gray-300">
                  <p>
                    With over a decade of experience in software engineering and
                    cloud architecture, I specialize in helping organizations
                    leverage the full potential of cloud-native technologies. My
                    expertise lies in designing and implementing robust
                    Kubernetes platforms, streamlining DevOps pipelines, and
                    building secure, high-performance systems on major cloud
                    providers like AWS, GCP, and Azure.
                  </p>
                  <p>
                    I'm passionate about open-source and contributing to the
                    community. I believe in a collaborative approach, working
                    closely with teams to foster a culture of innovation and
                    continuous improvement.
                  </p>
                </div>
                <div className="flex flex-wrap items-start gap-4">
                  <Badge variant="secondary" className="text-lg py-1 px-4">Kubernetes</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">AWS</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">GCP</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">Azure</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">DevOps</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">CI/CD</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">Terraform</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">Go</Badge>
                  <Badge variant="secondary" className="text-lg py-1 px-4">Python</Badge>
                </div>
              </div>
            </GlassPanelContent>
          </GlassPanel>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl font-headline">
              My Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Providing a range of services to elevate your cloud strategy.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <GlassPanel>
              <GlassPanelHeader>
                <Cloud className="w-12 h-12 text-primary" />
                <GlassPanelTitle className="text-white mt-4">Cloud Solutions</GlassPanelTitle>
              </GlassPanelHeader>
              <GlassPanelContent>
                <p className="text-gray-300">
                  Architecting and implementing scalable and resilient cloud
                  infrastructures on AWS, GCP, and Azure.
                </p>
              </GlassPanelContent>
            </GlassPanel>
            <GlassPanel>
              <GlassPanelHeader>
                <Cpu className="w-12 h-12 text-primary" />
                <GlassPanelTitle className="text-white mt-4">Kubernetes Expertise</GlassPanelTitle>
              </GlassPanelHeader>
              <GlassPanelContent>
                <p className="text-gray-300">
                  Container orchestration, cluster management, and optimization
                  for high-performance, cost-effective workloads.
                </p>
              </GlassPanelContent>
            </GlassPanel>
            <GlassPanel>
              <GlassPanelHeader>
                <GitMerge className="w-12 h-12 text-primary" />
                <GlassPanelTitle className="text-white mt-4">DevOps Automation</GlassPanelTitle>
              </GlassPanelHeader>
              <GlassPanelContent>
                <p className="text-gray-300">
                  Building robust CI/CD pipelines, automating infrastructure with
                  IaC, and fostering a culture of continuous delivery.
                </p>
              </GlassPanelContent>
            </GlassPanel>
          </div>
          <div className="mt-8">
            <Link href="/services">
              <Button>
                Learn More About Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="w-full py-12 md:py-24 bg-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center text-white sm:text-4xl md:text-5xl font-headline">
            From the Blog
          </h2>
          <p className="mx-auto max-w-[700px] text-center text-gray-300 md:text-xl/relaxed mt-4">
            Insights on cloud-native, Kubernetes, and modern software
            development.
          </p>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
            <Link href="/blog">
              <GlassPanel className="flex flex-col md:flex-row items-center gap-6 p-4 h-full">
                {blogImage1 && (
                  <Image
                    src={blogImage1.imageUrl}
                    alt={blogImage1.description}
                    data-ai-hint={blogImage1.imageHint}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full md:w-1/3"
                  />
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    Demystifying Kubernetes Networking
                  </h3>
                  <p className="text-gray-300">
                    A deep dive into Services, Ingress, and CNIs. Understand how
                    pods communicate with each other and the outside world.
                  </p>
                  <p className="text-sm text-primary">Read More</p>
                </div>
              </GlassPanel>
            </Link>
            <Link href="/blog">
              <GlassPanel className="flex flex-col md:flex-row items-center gap-6 p-4 h-full">
                {blogImage2 && (
                  <Image
                    src={blogImage2.imageUrl}
                    alt={blogImage2.description}
                    data-ai-hint={blogImage2.imageHint}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full md:w-1/3"
                  />
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    The Power of Infrastructure as Code
                  </h3>
                  <p className="text-gray-300">
                    How Terraform can help you manage your cloud resources with
                    confidence and predictability.
                  </p>
                  <p className="text-sm text-primary">Read More</p>
                </div>
              </GlassPanel>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg">
                Visit Blog <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
