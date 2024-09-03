import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from "lucide-react";
import { getPostBySlug } from "@/app/mock/posts";
import { notFound } from "next/navigation";

interface PostParams {
  params: {
    slug: string;
  };
}

const SinglePost = ({ params }: PostParams) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        <article>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span className="mr-4">{post.date}</span>
                <ClockIcon className="mr-1 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none pt-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>
        </article>
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button>Read More Articles</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SinglePost;
