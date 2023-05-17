"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSeesion } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/commentLogo.svg"
            alt="PromptHero Logo"
            width={40}
            height={40}/> 
            <p className="logo_text">PromptHero</p>    
        </Link>
    </nav>
  )
}

export default Nav