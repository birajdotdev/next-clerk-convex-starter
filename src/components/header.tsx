"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 border-b">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-x-4">
          <Image
            src="/convex.svg"
            alt="Convex Logo"
            height={32}
            width={32}
            className="size-8"
          />
          <span className="font-semibold">Next Clerk Convex Starter</span>
        </Link>
        <div className="flex items-center gap-x-4">
          <Unauthenticated>
            <SignInButton>
              <Button variant="ghost">Sign in</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Sign up</Button>
            </SignUpButton>
          </Unauthenticated>
          <AuthLoading>
            <Skeleton className="aspect-square size-8 rounded-full" />
          </AuthLoading>
          <Authenticated>
            <UserButton
              fallback={
                <Skeleton className="aspect-square size-8 rounded-full" />
              }
            />
          </Authenticated>
        </div>
      </nav>
    </header>
  );
}
