import React from 'react'
import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='px-auto relative mt-44 overflow-hidden '>
        <div className='max-w-7xl mx-auto'>
            {/*row*/}
            <div className='flex flex-wrap gap-6 justify-between pb-8'>
                {/* column 1- nrand & socials*/}
                <div className='flex flex--col items-start text-left'>
                    <Animated>
                        <img src="/assets/logo.svg" alt="logo" />
                    </Animated>

                     <Animated delay={0.2}>
                        <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
                            Serving freshly prepared dishes with authentic flavours, premium
                            ingredients and exceptional hospitality every day.
                        </p>
                        
                    </Animated>
                    <div className='flex items-center gap-1.5 mt-6'>
                        {socialLinks.map((item, index)=>(
                            <Animated key={index} delay={index*0.05}>
                             <a href={item.href} className='size-7.5 rounded-full border 
                             border-slate-300 grid place-content-center'>
                                {item.icon}
                             </a>
                            </Animated>
                        ))}
                    </div>

                </div>

                {/* column 2- quick links*/} 
                <div>
                    <p className='font-medium mb-5'> Quick Links</p>
                    <div className='flex flex-col gap-2.5'>
                        {quickLinks.map((link, index)=>(
                        <Animated key={link.name} delay={index*0.05}>
                            <a href={link.href} className='text-zinc-600
                            hover:text-zinc-500'>
                                {link.name}
                            </a>
                            </Animated>
                        ))} 

                    </div>
                </div>



                {/* column 3- get in touch*/}
                <div>
                    <p className='font-mediummb-5'>Get in touch</p>
                    <div className='space-y-2'>
                       <Animated>
                         < a href='mailto:hello@example.com' className='flex items-center gap-1 text-zinc-600
                         hover:text-zinc-500'>
                         <Mail size={16} className='shrink-0'/>
                         hello@example.com</a>
                       </Animated>

                       <Animated delay={0.2}>
                         < a href='tel:987-476-9854' className='flex items-center gap-1 text-zinc-600
                         hover:text-zinc-500'>
                         <Phone size={16} className='shrink-0'/>
                         987-476-9854</a>
                       </Animated>
                    </div>
                </div>






                {/* column 4- sitemap*/}
                <div>
                    <p className='font-medium mb-5'>Sitemap</p>
                    <div className='flex flex-col gap-2.5'>
                        {sitemapLinks.map((link, index)=>(
                            <Animated key={link.name} delay={index*0.05}>
                            <a href={link.href} className='text-zinc-600 hover:text-zinc-500' >
                                {link.name}</a>
                            </Animated>

                        ))}
                    </div>
                </div>

            </div>

            {/*bottom bar*/}
            <div className='border-t text-zinc-500 border-slate-200 py-4.5 flex
            justify-between items-center'>
                <p> 2026. All Right Reserved.</p>
                <p>Designed by MOHIT</p>

            </div>

        </div>
     {/*watermark logo backdrop*/}
     <div className='absolute inset-0 text-center select-none-z-1 pointer-events-none'>
        <span className='text-[300px] tracking-wide font-urbanist font-semibold
        text-zinc-100/70'>Restro</span>
     </div>
    </footer>
  )
}

export default Footer
