"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProviders, signIn, signOut, useSeesion } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false)
  useEffect(()=>{
    const setProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    }

    setProviders();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/commentLogo.svg"
            alt="PromptHero Logo"
            width={40}
            height={40}/> 
            <p className="logo_text">PromptHero</p>    
        </Link>

        {/* Desktop Nav */}
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src="/assets/images/profile.svg"
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="profile"
                >
                </Image>
              </Link>
            </div>
          ) : (
            <>
              {providers && 
                Object.values(providers).map((provider) => (
                  <button 
                    type="button"
                    key={provider.name}
                    onClick={()=> signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
          { isUserLoggedIn ? (
            <div className="flex">
              <Image
                  src="/assets/images/profile.svg"
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="profile"
                  onClick={()=> setToggleDropDown((prevState)=> !prevState )}
                />

                {toggleDropDown && (
                  <div className="dropdown">
                    <Link 
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setToggleDropDown(false)}
                    >
                      My Profile
                    </Link>
                    <Link 
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggleDropDown(false)}
                    >
                      Create New Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={()=>{
                        setToggleDropDown(false);
                        signOut()
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
            </div>
          ) : (
            <>
              {providers && 
                Object.values(providers).map((provider) => (
                  <button 
                    type="button"
                    key={provider.name}
                    onClick={()=> signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
              ))}
            </>
          )}

        </div>
    </nav>
  )
}

export default Nav