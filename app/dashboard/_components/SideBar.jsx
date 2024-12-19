"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

const SideBar = () => {

    const MenuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        // {
        //     name: 'Upgrade',
        //     icon: Shield,
        //     path: '/dashboard/upgrade'
        // },
        {
            name: 'Profile',
            icon: UserCircle,
            path: '/dashboard/profile'
        }
    ]

    const path = usePathname();

    return (
        <div className='h-screen shadow-md p-5'>
            <div className='flex gap-2 items-center'>
                <Link href="https://www.preparationai.in/dashboard">
                    <Image src={'/logo.png'} alt='logo' width={200}

                        height={120}

                        className="w-[200px] max-w-full h-auto md:w-[200px] sm:w-[150px] max-[425px]:w-[120px]"

                        style={{

                            filter:

                                "brightness(0) saturate(100%) invert(88%) sepia(40%) saturate(800%) hue-rotate(38deg) brightness(130%) contrast(115%)",

                        }}
                    />
                </Link>


            </div>

            <div className='mt-10'>
                <Link href='/create' className="w-full">
                    <Button className="w-full">+ Create New</Button>
                </Link>


                <div className='mt-5'>
                    {MenuList.map((menu, index) => (
                        <div key={index} className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3
                ${path == menu.path && 'bg-slate-200'}`}>
                            <menu.icon />
                            <h2>{menu.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className='border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[90%]'>
                {/* <h2 className='text-lg mb-2'>Available Credits : 5</h2>
                <Progress value={30} />
                <h2 className='text-sm'>1 Out of 5 Credits used</h2>

                <Link href = {"/dashboard/upgrade"} className='text-primary text-sm mt-3'>Upgrade to create more</Link> */}
            </div>

        </div>
    )
}

export default SideBar
