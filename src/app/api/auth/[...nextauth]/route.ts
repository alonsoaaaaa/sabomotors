import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import db from "@/lib/db";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

//This route handles the login page request to api/auth/login
export const authOptions = {
  //This is the configuration object that will be passed to NextAuth
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        //this credentials is the object that is passed from the signIn function in the login page
        console.log(db);
        const userFound = await db.admin.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("No user found"); //This errors are inside the authorize function, so they are only triggered when user press sign in button

        console.log(userFound);

        // const matchPassword = await bcrypt.compare(
        //   credentials?.password || "",
        //   userFound.password
        // );
        const matchPassword = credentials?.password === userFound.password;
        if (!matchPassword)
          throw new Error(
            `${userFound.password} ${credentials?.password} don't match`
          );

        return {
          //if the user exist and the passwords match return an object with the information to create a NextAuth session
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
};

const handler = NextAuth(authOptions);
// Create a handler by passing authOptions to NextAuth. This handler will handle both GET and POST requests for authentication.

export { handler as GET, handler as POST };
//The GET handler displays a unbranded login page, the POST handler is the one that handles the login request
//If I remove the GET and go to auth/login I will see the default login page from NextAuth?
