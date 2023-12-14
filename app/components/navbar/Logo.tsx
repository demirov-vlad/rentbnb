"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row items-center gap-2 font-semibold text-rose-500 text-2xl cursor-pointer"
    >
      <Image
        src="/images/logo.png"
        alt="Logo"
        height="30"
        width="30"
        className="hidden md:block cursor-pointer"
      />
      rentbnb
    </div>
  );
};

export default Logo;
