"use client";

import Link from "next/link";
import { SignedIn, UserButton, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import ComponentUseUser from "../(auth)/componentUseUser";
import { useState } from "react";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false);

    const handleSignOut = () => {
        setIsLogged(false);
    }

  return (
    <header className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-900 text-white h-16">
      <div>
        <Link href="/">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-500">Next</span>Auth
          </h2>
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/pages/profile">Profile</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>

      <div className="flex gap-4 items-center">
        <ComponentUseUser />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <SignOutButton>
            <button type="button" onClick={handleSignOut} className="bg-red-700 hover:bg-red-800 px-2 py-1 rounded-md transition-colors duration-200">
              Se déconnecter
            </button>
          </SignOutButton>
        </SignedIn>
        <div className="flex gap-4 ml-6 items-center">
        {isLogged ? (
          <Link
            href="/sign-in"
            className="bg-slate-700 hover:bg-slate-800 px-2 py-1 rounded-md transition-colors duration-200"
          >
            Se connecter
          </Link>
        ) : (
          <Link
            href="/sign-up"
            className="bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded-md transition-colors duration-200"
          >
            S&apos;inscrire
          </Link>
        )}
        </div>
      </div>
    </header>
  );
}
