"use client";
import React from "react";
import { User } from "@prisma/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavourite from "@/app/hooks/useFavourite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: User | null;
}
const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { hasFavourited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  });
  return (
    <div
      onClick={toggleFavourite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart size={28} className="fill-white absolute" />
      <AiFillHeart
        size={28}
        className={hasFavourited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
