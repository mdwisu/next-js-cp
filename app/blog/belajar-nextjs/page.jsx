import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

export default function PostPage() {
  return (
    <div>
      <Heading>Belajar Next js</Heading>
      <p>Belajar Next js</p>
      <Image
        src="https://raw.githubusercontent.com/lunadiotic/learn-nextjs/refs/heads/master/public/images/image-1.jpg"
        width={500}
        height={500}
      />
    </div>
  );
}
