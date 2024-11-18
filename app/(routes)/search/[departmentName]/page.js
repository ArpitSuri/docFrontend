"use client"

import DoctorList from '@/app/_components/DoctorList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Search = ({params}) => {

  const [departmentDoctorList , setdepartmentDoctorList] = useState([])

  useEffect(()=>{
    // console.log(params.departmentName);
    getDoctors();
  },[])


  const getDoctors=()=>{
    GlobalApi.getDoctorbyCategory(params.departmentName).then(resp=>{
        // console.log(resp.data.data);
        setdepartmentDoctorList(resp.data.data);
    }
    )
  }


    return (
      <div className='mb-10 '>
  
        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-4'>
          {departmentDoctorList.map((item,index)=>(
            <div key={index} className='border-[1px] rounded-lg p-4'>
              <Image src={item.Image?.url} alt='doctorImg' width={500} height={200}
              className='h-[200px] w-full object-cover rounded'
              />
              <div className='mt-3 items-baseline flex flex-col'>
                <h2 className='text-[10px] bg-blue-100 rounded px-2'>{item.department_category?.departmentName}</h2>
                <h1>{item.Name}</h1>
                <h2>Years of Experience {item.Year_of_experience}</h2>
                <Button>Book Now</Button>
              </div>
            </div>
  
          ))}
        </div>
      </div>
    )
}

export default Search