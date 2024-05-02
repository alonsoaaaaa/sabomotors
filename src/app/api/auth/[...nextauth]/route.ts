import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import db from "@/lib/db";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        const userFound = await db.admin.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("Credenciales incorrectas");
        const matchPassword = credentials?.password === userFound.password;
        if (!matchPassword) throw new Error(`Credenciales incorrectas`);
        return {
          id: userFound.id.toString(),
          name: "admin",
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", //This is the page where the user will be redirected if it is not authenticated, this has overwritten the default page NextAuth comes with
  },

  // callbacks: {},
};
const handler = NextAuth(authOptions);
// Create a handler by passing authOptions to NextAuth. This handler will handle both GET and POST requests for authentication.

export { handler as GET, handler as POST };
//The GET handler displays a unbranded login page, the POST handler is the one that handles the login request
//If I remove the GET and go to auth/login I will see the default login page from NextAuth?
