import React from 'react'
import DepartmentList from './_components/DepartmentList'

const layout = ({children,params}) => {
  return (
 <div className='grid grid-cols-4'>
    <div className='hidden md:block'>
        {/* categoryList */}
        <DepartmentList/>
    </div>

    <div className='col-span-3 h-full'>
        {children}
    </div>
    </div>
  )
}

export default layout