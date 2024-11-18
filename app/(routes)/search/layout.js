import React from 'react'
import DepartmentList from './_components/DepartmentList'

const layout = ({children}) => {
  return (
 <div className='grid grid-cols-4'>
    <div className='hidden md:block'>
        {/* categoryList */}
        <DepartmentList/>
    </div>

    <div className='col-span-3'>
        {children}
    </div>
    </div>
  )
}

export default layout