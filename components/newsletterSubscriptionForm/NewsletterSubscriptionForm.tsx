// NewsletterSubscriptionForm.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useNewsletterSubscription } from "./hooks/useNewsletterSubscription";

export const NewsletterSubscriptionForm = () => {
  const { email, setEmail, handleSubmit } = useNewsletterSubscription();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Subscribe to Our Newsletter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4 text-muted-foreground">
          Stay updated with our latest blog posts and news. No spam, we promise!
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
  );
};
