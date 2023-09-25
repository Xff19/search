import React from 'react'
import Link from "next/link"
import Search from './Search'
export default function Navbar() {
  return (
    <div>
      <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row top-0 drop-shadow-xl'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0z'>
            <Link href="/">wikiRoket!</Link>
            <Search></Search>
        </h1>
      </nav>
    </div>
  )
}
