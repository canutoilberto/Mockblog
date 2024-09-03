"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Carousel } from "@/components/carousel/Carousel";
import { CarouselImage } from "@/components/carousel/types"; // Importa a interface para definir o array de imagens

export default function BlogLayout() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  // Definindo as imagens para o Carousel
  const carouselImages: CarouselImage[] = [
    {
      src: "/culinary.avif",
      alt: "Description of image 1",
    },
    {
      src: "/community.avif",
      alt: "Description of image 2",
    },
    {
      src: "/small_1.avif",
      alt: "Description of image 3",
    },
  ];

  const crewMembers = [
    {
      name: "Alex Johnson",
      role: "Tech Columnist",
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

  const featuredPosts = [
    {
      title: "The Future of AI in Everyday Life",
      excerpt:
        "Exploring how artificial intelligence is reshaping our daily routines and what to expect in the coming years.",
      image: "/future.avif",
      author: "Alex Johnson",
      date: "2023-06-15",
      slug: "future-of-ai-in-everyday-life",
    },
    {
      title: "10 Must-Visit Hidden Gems in Europe",
      excerpt:
        "Discover these off-the-beaten-path destinations that offer unique experiences for the adventurous traveler.",
      image: "/travel.avif",
      author: "Olivia Taylor",
      date: "2023-05-22",
      slug: "must-visit-hidden-gems-europe",
    },
    {
      title: "The Rise of Plant-Based Cuisine",
      excerpt:
        "How plant-based diets are influencing the culinary world and transforming fine dining experiences.",
      image: "/culinary.avif",
      author: "Marcus Chen",
      date: "2023-04-10",
      slug: "rise-of-plant-based-cuisine",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Passando as imagens para o Carousel */}
        <Carousel images={carouselImages} autoSlideInterval={5000} />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <Image
              src="/large.avif"
              alt="Large featured image"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-2 grid grid-rows-2 gap-4">
            <Image
              src="/small_1.avif"
              alt="Small image 1"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
            <Image
              src="/small_2.avif"
              alt="Small image 2"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <section className="featured-posts">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button size="lg">All Posts</Button>
            </Link>
          </div>
        </section>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Subscribe to Our Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-4 text-muted-foreground">
              Stay updated with our latest blog posts and news. No spam, we
              promise!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="crew-section">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crewMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
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
      </main>
    </div>
  );
}
