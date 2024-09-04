// CrewCard.tsx
import { CrewMember } from "./types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CrewCardProps {
  member: CrewMember;
}

export const CrewCard: React.FC<CrewCardProps> = ({ member }) => (
  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
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
);
