"use client"
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Carticon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

 

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])
  return (
    <Link href={"/cart"}>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image
            src="/cart.png"
            alt=""
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <span>cart({totalItems})</span>
      </div>
    </Link>
  );
};

export default Carticon;