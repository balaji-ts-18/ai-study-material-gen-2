import React from 'react'
import DashboardHeader from './_components/DashboardHeader'
import SideBar from './_components/SideBar'

function DashboardLayout({ children }) {
    return (
        <div className='bg-[#12120d] text-white'>
            <div className='md:w-64 hidden md:block fixed'>
                <SideBar />
            </div>
            <div className='md:ml-64 '>
                <DashboardHeader />
                <div className='p-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
