"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden lg:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100
            transition cursor-pointer whitespace-nowrap"
        >
          Rentbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full
            cursor-pointer hover:shadow-md transition flex-shrink-0"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      <div
        className={`absolute rounded-xl shadow-md w-[180px] bg-white overflow-hidden ${
          isOpen ? "right-0" : "-right-[400px]"
        } top-14 md:top-12 text-sm transition-all duration-200`}
      >
        <div className="flex flex-col cursor-pointer">
          {currentUser ? (
            <>
              <MenuItem
                onClick={() => router.push("/trips")}
                label="My trips"
              />
              <MenuItem
                onClick={() => router.push("/favourites")}
                label="My favourites"
              />
              <MenuItem
                onClick={() => router.push("/reservations")}
                label="My reservations"
              />
              <MenuItem
                onClick={() => router.push("/properties")}
                label="My properties"
              />
              <MenuItem onClick={rentModal.onOpen} label="Rentbnb my home" />
              <hr />
              <MenuItem onClick={() => signOut()} label="Logout" />
            </>
          ) : (
            <>
              <MenuItem
                onClick={() => {
                  loginModal.onOpen();
                  toggleOpen();
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  registerModal.onOpen();
                  toggleOpen();
                }}
                label="Sign Up"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
