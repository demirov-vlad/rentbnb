"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      alt="Logo"
      height="100"
      width="100"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
