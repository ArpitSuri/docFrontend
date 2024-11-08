import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
    <Button>Login</Button>

    </div>

  )
}

export default Header