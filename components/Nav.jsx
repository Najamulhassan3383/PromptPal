"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const is_user_loged_in = true;
  return (
    <nav className="w-full flex-between  mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop navigation */}
      <div className=" hidden sm:flex">
        {is_user_loged_in ? <div> logged in</div> : <div> not logged in</div>}
      </div>
    </nav>
  );
}

export default Nav;
