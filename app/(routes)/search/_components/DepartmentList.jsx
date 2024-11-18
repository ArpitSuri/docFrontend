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
  

const DepartmentList = () => {
    const [departmentList, setdepartmentList] = useState([]);
    useEffect(()=>{
        getDepartmentList()

    })


    const getDepartmentList = () =>{
        GlobalApi.getCategory().then(resp=>{
            console.log(resp.data.data);
            setdepartmentList(resp.data.data);
        })

    }


  return (
    <div className='h-screen fixed mt-5 flex flex-col'>
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions" >
        {departmentList&& departmentList.map((item,index)=>(
            <CommandItem key={index}>
                <Link href={' '}
                className="p-2 text-[15px] text-blue-600 cursor-pointer w-full">
                <label >
                    {item.attributes.name}
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