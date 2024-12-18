"use client"

import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Header = () => {
    const Menu=[
        {
            id:1,
            name:"Home" ,
            path:"/"
        },
        {
            id:2,
            name:"Explore" ,
            path:"/explore"
        },
        {
            id:3,
            name:"Contact Us" ,
            path:"/contactUs"
        },
    ]
  return (
    <div className='flex justify-between items-center shadow-sm p-4 '>
    <div className=' flex gap-10 items-center ' >
        <Image src="/logo.svg" width={180} height={80}  alt='logo'/>

        
        {/* <ul className='md:flex gap-8 hidden cursor-pointer'>
            {Menu.map((item )=>(
                <li key={item.id}>
                <Link href={item.path} >
                    <span>{item.name}</span>
                </Link>
            </li>
            ))}
        </ul> */}
        
    </div>
    {/* <LoginLink></LoginLink> */}
    <LoginLink><Button>Login</Button></LoginLink>
    

    </div>

  )
}

export default Header