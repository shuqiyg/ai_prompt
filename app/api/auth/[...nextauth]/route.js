import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";
// https://console.cloud.google.com/apis/credentials?project=prompthero-387101
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }){

    }
})