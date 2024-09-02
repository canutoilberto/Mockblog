import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Tech Columnist",
      bio: "Alex has been covering the latest in tech for over a decade, with a focus on AI and machine learning.",
      image: "/alex.avif",
    },
    {
      name: "Samantha Lee",
      role: "Lifestyle Writer",
      bio: "Samantha brings a fresh perspective to modern living, from wellness to sustainable fashion.",
      image: "/samantha.avif",
    },
    {
      name: "Marcus Chen",
      role: "Food Critic",
      bio: "With his culinary background, Marcus offers insightful reviews of restaurants and food trends.",
      image: "/marcus.avif",
    },
    {
      name: "Olivia Taylor",
      role: "Travel Enthusiast",
      bio: "Olivia's wanderlust takes readers on virtual journeys to both popular and off-the-beaten-path destinations.",
      image: "/olivia.avif",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our Blog</h1>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <Card>
                <CardContent className="prose dark:prose-invert max-w-none pt-6">
                  <p>
                    At MyBlog, we&apos;re passionate about bringing you the
                    latest insights and trends across technology, lifestyle,
                    food, and travel. Our mission is to inform, inspire, and
                    entertain our readers with high-quality, engaging content
                    that matters to them.
                  </p>
                  <p>
                    We believe in the power of diverse perspectives and strive
                    to offer a platform where different voices can be heard.
                    Whether you&apos;re a tech enthusiast, a foodie, a travel
                    buff, or someone looking for lifestyle tips, we&apos;ve got
                    something for you.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/meeting.avif"
                alt="Team collaboration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-64 md:h-full">
              <Image
                src="/growth.avif"
                alt="Blog growth illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg object-center"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <Card>
                <CardContent className="prose dark:prose-invert max-w-none pt-6">
                  <p>
                    Founded in 2020, MyBlog started as a small passion project
                    by Alex Johnson, a tech enthusiast with a vision to create a
                    space where complex topics could be discussed in an
                    accessible way. As the blog grew, so did our team and our
                    coverage.
                  </p>
                  <p>
                    Today, we&apos;re proud to have a diverse team of writers
                    bringing their expertise and unique perspectives to our
                    platform. From AI and machine learning to sustainable living
                    and culinary adventures, we&apos;re here to keep you
                    informed and inspired.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Join Our Community
              </h2>
              <Card>
                <CardContent className="prose dark:prose-invert max-w-none pt-6">
                  <p>
                    We&apos;re more than just a blog - we&apos;re a community of
                    curious minds and passionate individuals. Join us on our
                    social media platforms to stay updated, engage in
                    discussions, and be part of our growing family.
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/community.avif"
                alt="Community engagement"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
