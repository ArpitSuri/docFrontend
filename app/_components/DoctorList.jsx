"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DoctorList = () => {


   const [doctorList, setdoctorList]  =useState([]);

    useEffect(()=>{
        getDoctorList();
      },[])


    const getDoctorList =() =>{
        GlobalApi.getDoctorList().then(res=>{
            console.log(res.data.data)
            setdoctorList(res.data.data);
        })
    }

  return (
    <div className='mb-1010'>
      <h2 className='font-bold text-xl'> Popular Doctors</h2>

      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-4'>
        {doctorList.map((item,index)=>(
          <div key={index} className='border-[1px] rounded-lg p-4'>
            <Image src={item.Image?.url} alt='doctorImg' width={500} height={200}
            className='h-[200px] w-full object-cover rounded'
            />
            <div className='mt-3 items-baseline flex flex-col'>
              <h2 className='text-[10px] bg-blue-100 rounded px-2'>{item.department_category?.departmentName}</h2>
              <h1>{item.Name}</h1>
              <h2>Years of Experience {item.Year_of_experience}</h2>
              <Link href={"/details/"+item.id }><Button>Book Now</Button></Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default DoctorList