import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const PublicLayout = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <main className='relative flex-1'>
            <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PublicLayout
