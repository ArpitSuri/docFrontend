import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const CategorySearch = () => {
  return (
  <div className=' flex flex-col gap-5 items-center mb-10'>
      <h1 className='font-bold text-4xl'>Get Your <span className='text-blue-600'>Doctor</span></h1>
      <h4 className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>

      <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="text" placeholder="Search Doctor" />
      <Button type="submit">Search</Button>
    </div>
  </div> 

  )
}

export default CategorySearch 