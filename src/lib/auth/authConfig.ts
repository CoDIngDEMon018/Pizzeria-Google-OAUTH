import PostgresAdapter from "@auth/pg-adapter";
import NextAuth from "next-auth";
import { pool } from "@/src/lib/postgres";
import Google from "next-auth/providers/google";
import { setName } from "@/src/lib/auth/setNameServerAction";
export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    adapter: PostgresAdapter(pool),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    },
    pages: {
        signIn: "/auth/sign-in",
        // signOut: "/auth/sign-out",
        error: "/auth/auth-error",
        verifyRequest: "/auth/auth-success",
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),

    ],
    callbacks: {
        async jwt({ token, user, session, trigger  }) {
            if (trigger === "update" && session?.name !== token.name) {
        token.name = session.name;

        try {
          await setName(session.name);
        } catch (error) {
          console.error("Failed to set user name:", error);
        }
      }
            if (user) { 
                return {
                ...token,
                id: user.id,
        };
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                },
            };
        },
    },
});
// export const authConfig = {