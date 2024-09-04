// BlogLayout.tsx
"use client";

import { Carousel } from "@/components/carousel/Carousel";
import { CarouselImage } from "@/components/carousel/types";
import { Post } from "@/components/featuredPostCard/types";
import { CrewMember } from "@/components/crewCard/types";
import { FeaturedPostCard } from "@/components/featuredPostCard/FeaturedPostCard";
import { NewsletterSubscriptionForm } from "@/components/newsletterSubscriptionForm/NewsletterSubscriptionForm";
import { ImageGallery } from "@/components/imageGallery/ImageGallery";
import { CrewCard } from "@/components/crewCard/CrewCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const carouselImages: CarouselImage[] = [
  { src: "/culinary.avif", alt: "Description of image 1" },
  { src: "/community.avif", alt: "Description of image 2" },
  { src: "/small_1.avif", alt: "Description of image 3" },
];

const featuredPosts: Post[] = [
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

const crewMembers: CrewMember[] = [
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

export default function BlogLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Carousel images={carouselImages} autoSlideInterval={5000} />
        <ImageGallery />
        <section className="featured-posts">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button size="lg">All Posts</Button>
            </Link>
          </div>
        </section>
        <NewsletterSubscriptionForm />
        <section className="crew-section">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crewMembers.map((member, index) => (
              <CrewCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
