import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'


const Navbar = () => {

    const [mobileopen, setMobileopen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10); 
      };
      window.addEventListener('scroll', handleScroll);
      return () => 
        window.removeEventListener('scroll', handleScroll);

    },[])

  return (
    <>
      <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-sm shadow-md' :'bg-transparent'}`}> 
      <div className='flex items-center justify-between font-medium py-4 mx-auto
      max-w-7xl '>

        <a href="/">
            <img src="/assets/logo.svg" alt="logo" />

        </a>

        { /*desktop navigation link*/}

        <div className ='hidden md:flex items-center gap-10 '> 
            {navLinks.map((link) => (
                <a key = {link.name} href ={link.href} className = 'hover:text-zinc-600'>
                  {link.name}
                </a>
                 
            ))}
        </div>

        <a href="#booking-progress " className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition'>
            Book a table 
        </a>

        <button onClick={() => setMobileopen(true)}
        className = 'md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square'>
            <MenuIcon/>
        </button>

      </div>

      </nav>


      {/* mobile navigation drawer*/}
      
      <div className= {` flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-sm z-50 transition-transform duration-300 ${mobileopen ? 'translate-x-0' : 'translate-x-full'}`}> 
        <div className='flex flex-col items-center space-y-6 font-medium'>
        {navLinks.map((link) => (
            <a key ={link.name} href={link.href} className='text-2xl text-zinc-800 hover:text-orange-500 transition '
             onClick={() => setMobileopen(false)}>
            {link.name}

            </a>
        ))}
        <button onClick={() => setMobileopen(false)}
        className='bg-zinc-800 text-white p-2 rounded-md aspect-square'>
            <XIcon/> 
        </button>


        </div>



      </div>







    </>
  )
}

export default Navbar
