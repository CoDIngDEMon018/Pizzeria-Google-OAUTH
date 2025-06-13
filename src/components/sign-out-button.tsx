"use client";

import { handleSignOut } from "@/src/lib/auth/signOutServerAction";

export const SignOutButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={props.className}
      onClick={() => handleSignOut()}
    >
      {props.children || "Sign Out"}
    </button>
  );
};