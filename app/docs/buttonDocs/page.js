"use client";
import Button from '@/app/components/button/page'
import { buttonDocs } from '@/app/constant/page'
import Drawer from '@/app/layout/drawer/page';
import { Settings } from 'lucide-react'
import React, { useState } from 'react'

export default function ButtonDocs() {
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false);

  return (
    <>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{buttonDocs.title}</h1>
            <p className=''>{buttonDocs.desc}</p>
        </div>
       <div className="mt-10 bg-white border border-[#E8E8E8] rounded-lg">
         <div className='flex items-center justify-end px-4 py-2'>
            <div className='border border-[#E8E8E8] p-2 rounded-md cursor-pointer' onClick={() => setIsSettingDrawerOpen(true)}>
                <Settings size={15} color='#6c757d' />
            </div>
         </div>
         <div className="flex items-center justify-center py-5">
            <Button />
         </div>
       </div>


       {/* Setting Drawer */}
       <Drawer isOpen={isSettingDrawerOpen} onClose={() => setIsSettingDrawerOpen(false)} />
    </>
  )
}
