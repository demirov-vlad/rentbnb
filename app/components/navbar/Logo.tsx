"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row items-center gap-2"
    >
      <Image
        src="/images/logo.png"
        alt="Logo"
        height="45"
        width="45"
        className="block cursor-pointer"
      />
      <p className="hidden md:block font-semibold text-rose-500 text-2xl cursor-pointer">
        rentbnb
      </p>
    </div>
  );
};

export default Logo;
