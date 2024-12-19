import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h3>
        go to /dashboard
      </h3>

      <UserButton/>
    </div>
  );
}
