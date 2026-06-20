"use client";
import React, { useState } from 'react'
import Sidebar from './layout/sidebar/sidebar'
import Header from './layout/header/page';

export default function MainLayout({children}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='flex items-center h-screen'>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className={`flex-1 h-screen bg-[#f8f9fa] transition-all duration-300 ease-in-out ${collapsed ? 'ml-20' : 'ml-64'}`}>
        <Header />
        <div className='p-4'>
          {children}
        </div>
      </div>
    </div>
  )
}
