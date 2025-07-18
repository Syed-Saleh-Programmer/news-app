"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import SearchBox from './SearchBox'
import { Menu } from 'lucide-react'


function Header({categories}) {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
      <section className='sticky z-50 top-0 left-0 w-full flex flex-col lg:flex-row justify-between gap-4 py-4 items-center bg-black text-white px-6 md:px-12 lg:px-20'>
            <div className="flex w-full lg:w-auto justify-between items-center">
                <Link href={"/"} className='text-xl font-semibold'>
                    Khabar<span className='text-red-500'>Gaam</span>
                </Link>
                <button 
                    className="lg:hidden cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu />
                </button>
            </div>
            
            <div className={`flex flex-col lg:justify-center lg:items-center lg:flex-row gap-6 ${isMobileMenuOpen ? 'flex' : 'hidden lg:flex'} w-full lg:w-auto`}>
                <SearchBox />
                {categories && categories.map((category, index) => (
                    <Link href={`/news/${category.toLowerCase()}`} key={category}
                    className={`capitalize ${pathname === `/news/${category.toLowerCase()}` ? 'text-red-500 font-semibold' : 'text-white'} hover:underline underline-offset-3`}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </section>
  )
}

export default Header