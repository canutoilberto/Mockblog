// useNewsletterSubscription.ts
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useNewsletterSubscription = () => {
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

  return { email, setEmail, handleSubmit };
};
