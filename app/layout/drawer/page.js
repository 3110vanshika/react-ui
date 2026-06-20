import { X } from 'lucide-react';
import React from 'react'

export default function Drawer({isOpen, onClose}) {
  if(!isOpen) return null;

  return (
    <div className='fixed top-0 right-0 w-80 h-screen bg-white border-l border-[#E8E8E8] p-4'>
        <div className="flex items-center justify-end">
            <X onClick={onClose} className='cursor-pointer' />
        </div>
    </div>
  )
}
