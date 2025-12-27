import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Welcome to AI Agent builder platform</h2>
      <Button>Click me</Button>
      <UserButton />
    </div>
  );
}
