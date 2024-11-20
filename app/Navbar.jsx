// components/Navbar.js

"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import React, { createContext, useEffect } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

const Navbar = () => {

    const {user} = useKindeBrowserClient();

    useEffect(()=>{
        // console.log(user)
    })


    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={120} height={30} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li>
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore" className="hover:text-blue-600">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-600">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        {user ?

                        
                        <Popover>
                                <PopoverTrigger><Image src={user?.picture} alt='userProfile'
                                        width={50} height={50} className='rounded-full'/></PopoverTrigger>
                                <PopoverContent className="w-32 flex flex-col items-center">
                                    <ul>
                                        <li><Button variant="ghost">My Profile</Button></li>
                                        <li><Button variant="ghost">My Bookings</Button></li>
                                        <li><LogoutLink><Button variant="ghost">Logout</Button></LogoutLink></li>
                                    </ul>
                                </PopoverContent>
                        </Popover>

                        // <LogoutLink>
                        //     <Button varient="outline">LogOut !</Button>
                        // </LogoutLink>
                        :
                        <LoginLink>
                            <Button>Login !</Button>
                        </LoginLink>}
                    </li>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;
