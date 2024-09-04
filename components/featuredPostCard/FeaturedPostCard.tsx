// FeaturedPostCard.tsx
import { Post } from "./types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface FeaturedPostCardProps {
  post: Post;
}

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => (
  <Card className="flex flex-col overflow-hidden">
    <div className="relative h-48">
      <Image src={post.image} alt={post.title} fill className="object-cover" />
    </div>
    <CardHeader>
      <CardTitle className="text-xl">{post.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </CardContent>
    <CardFooter className="pt-6">
      <Link href={`/posts/${post.slug}`} className="w-full">
        <Button variant="outline" className="w-full">
          Read More
        </Button>
      </Link>
    </CardFooter>
  </Card>
);
