"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CalendarIcon, ClockIcon } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  // In a real application, you would fetch this data from an API
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      excerpt:
        "Exploring how artificial intelligence is reshaping our daily routines and what to expect in the coming years.",
      image: "/future.avif",
      author: "Alex Johnson",
      date: "2023-06-15",
      readTime: "8 min read",
      category: "Technology",
      slug: "future-of-ai-in-everyday-life",
    },
    {
      id: 2,
      title: "10 Must-Visit Hidden Gems in Europe",
      excerpt:
        "Discover these off-the-beaten-path destinations that offer unique experiences for the adventurous traveler.",
      image: "/travel.avif",
      author: "Olivia Taylor",
      date: "2023-05-22",
      readTime: "6 min read",
      category: "Travel",
      slug: "must-visit-hidden-gems-europe",
    },
    {
      id: 3,
      title: "The Rise of Plant-Based Cuisine",
      excerpt:
        "How plant-based diets are influencing the culinary world and transforming fine dining experiences.",
      image: "/culinary.avif",
      author: "Marcus Chen",
      date: "2023-04-10",
      readTime: "5 min read",
      category: "Food",
      slug: "rise-of-plant-based-cuisine",
    },
    {
      id: 4,
      title: "Sustainable Fashion: More Than Just a Trend",
      excerpt:
        "Exploring the growing movement towards eco-friendly and ethical clothing choices.",
      image: "/fashion.avif",
      author: "Samantha Lee",
      date: "2023-03-05",
      readTime: "7 min read",
      category: "Lifestyle",
      slug: "sustainable-fashion-trend",
    },
    // Add more blog posts as needed
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (category === "all" || post.category.toLowerCase() === category) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span className="mr-4">{post.date}</span>
                  <ClockIcon className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/posts/${post.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No posts found. Try adjusting your search or category filter.
          </p>
        )}

        {/* Pagination would go here in a real application */}
        <div className="mt-8 flex justify-center">
          <Button disabled>Previous</Button>
          <span className="mx-4 flex items-center">Page 1 of 1</span>
          <Button disabled>Next</Button>
        </div>
      </main>
    </div>
  );
}
