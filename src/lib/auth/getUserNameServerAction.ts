"use server";

import { auth } from "@/src/lib/auth/authConfig";

export const getUserName = async () => {
  const session = await auth();
  if (session && session.user) {
    return session.user.name;
  }
};