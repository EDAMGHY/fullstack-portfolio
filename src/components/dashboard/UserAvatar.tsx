import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export const UserAvatar = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <Avatar>
      <AvatarImage
        alt={session?.user?.name as string}
        src={session?.user?.image as string}
      />
      <AvatarFallback>{session?.user?.name?.[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
