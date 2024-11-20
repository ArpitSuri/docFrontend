"use client"

import GlobalApi from '@/app/_utils/GlobalApi'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Details = ({params}) => {


        const [doctorData , setDoctorData]=useState([]);
      useEffect(()=>{
        getDoctorbyId();

      },[])

        const getDoctorbyId=()=>{
          GlobalApi.getDoctorbyId(params.doctorId).then(res=>{
            console.log(res.data.data);
            setDoctorData(resp.data.data)
          })
        }



  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'> Details</h2>

      <div className='grid grid-cols-1 md:grid-cols-4'>

        {/* doctor details */}
        <div className=' col-span-3 grid grid-cols-1 md:grid-cols-3'>

          {/* doctor image */}
          <div>
            {/* <Image src={""} width={200} height={200} alt='doctorImage' className='rounded-lg h-[270px] object-cover w-full'/> */}
          </div>

          {/* doctor info */}
          <div className='col-span-2 mt-5 flex flex-col gap-3'>
            {/* <h2 className='font-bold text-2xl'>{doctor ka name }</h2> */}

            <h2 className='flex gap-2 text-gray-500 text-md'>
              <GraduationCap/>
              {/* <span>{year of experience}</span> */}
            </h2>

            <h2>
              <MapPin/>
              
            </h2>


          </div>

        </div>


        {/* doctor suggestion */}
        <div>

        </div>

      </div>
    </div>
  )
}

export default Details