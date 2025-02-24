'use client'
import React, {useState} from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const [isVisible,setIsVisible] = useState(false)
    const [show,setShow] = useState(false)
    const open = () => {
        setIsOpen(!isOpen);
    }
    const visible = () => {
        setIsVisible(!isVisible);
    }
    const active = () => {
        setShow(!show);
    }
  return (
    <nav className='w-[80%] mt-6 border border-gray-300 bg-gray-100 flex justify-between rounded-full items-center py-4 px-8 mx-auto'>
        <div className=''>
            <Image src='/assets/logo.svg'
            width={153}
            height={30}
            alt='logo' className='cursor-pointer w-24 h-6 '/>
        </div>
        <div className='lg:flex gap-10 hidden text-gray-500 font-semibold text-sm 3xl:text-lg leading-loose '>

            <a onClick={open} className='gap-1.5 flex relative items-center hover:text-gray-800' href='#'>
                Products
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {isOpen && <div className='absolute w-[120%] top-[173%] bg-gray-100 border py-3 shadow-md rounded'>
                    <ul className=''>
                        <li className='text-gray-500 text-center font-semibold text-sm leading-6 hover:bg-gray-300 py-2 px-3'>product 1</li>
                        <li className='text-gray-500 text-center font-semibold text-sm leading-6 hover:bg-gray-300 py-2 px-3'>product 2</li>
                        <li className='text-gray-500 text-center font-semibold text-sm leading-6 hover:bg-gray-300 py-2 px-3'>product 3</li>
                    </ul>
                </div>}
            </a>
            
            <a onClick={visible} className='gap-1.5 flex relative items-center hover:text-gray-800' href='#'>
                Solutions
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {isVisible &&<div className='absolute w-[120%] rounded top-[173%] bg-gray-100 border py-3 shadow-md'>
                <ul className=''>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 1</li>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 2</li>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 3</li>
                </ul>
                </div>}
            </a>
            
            <a onClick={active} className='gap-1.5 flex relative items-center hover:text-gray-800' href='#'>
                Resources
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {show && <div className='absolute rounded w-[120%] top-[173%] bg-gray-100 border py-3 shadow-md'>
                <ul className=''>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 1</li>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 2</li>
                    <li className='text-gray-500 font-semibold text-center text-md leading-6 hover:bg-gray-300 py-2 px-3'>solution 3</li>
                </ul>
                </div>}
            </a>
            <a className='gap-1.5 flex items-center hover:text-gray-800' href='#'>Pricing</a>

        </div>
        <div className='gap-2 lg:flex items-center hidden '>
            <motion.button whileTap={{ scale: 0.8 }} type="button" className='3xl:px-6 px-4 py-1.5 3xl:py-2 hover:bg-gray-300 border border-gray-400 rounded-full bg-white text-gray-900 shadow-md font-semibold text-base 3xl:text-xl leading-loose'>Talk to sales</motion.button>
            <motion.button whileTap={{ scale: 0.8 }} type="button" className='3xl:px-6 px-4 hover:bg-blue-800 py-1.5 3xl:py-2 border border-blue-700 rounded-full bg-blue-700 border-t-2 text-white shadow-md font-semibold text-base 3xl:text-xl leading-loose '>Sign up for free</motion.button>
        </div>
      
    </nav>
  )
}
