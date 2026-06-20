import { SunMedium } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <div className='border-b border-[#E8E8E8] h-20 flex items-center justify-end px-4'>
            <button className='h-10 w-10 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center'>
                <SunMedium size={25} color='#6c757d' />
            </button>
        </div>
    )
}
