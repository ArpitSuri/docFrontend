"use client"

import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
  

const DepartmentList = () => {
    const [departmentList, setdepartmentList] = useState([]);
    const params=usePathname();
    const department = params.split("/")[2];
    useEffect(()=>{
        getDepartmentList()
        // console.log(department)
    },[] )


    const getDepartmentList = () =>{
        GlobalApi.getCategory().then(resp=>{
            // console.log(resp.data.data);
            setdepartmentList(resp.data.data);
        })

    }


  return (
    <div className='h-screen mt-5 flex flex-col'>
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions" >
        {departmentList.map((item,index)=>(
            <CommandItem key={index}>
                <Link href={'/search/'+item.departmentName}
                className={`p-2 text-[15px] text-blue-600 cursor-pointer w-full ${department==item.departmentName&& 'bg-blue-100'}`}>
                <label >
                    {item.departmentName}
                </label>
                </Link>

            </CommandItem>
        ))}
      
    </CommandGroup>

  </CommandList>
</Command>

    </div>
  )
}

export default DepartmentList