'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';


function Ready(){
    return(
        <InView>
        {({ inView, ref }) => (
        <motion.section ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}} className='pt-20 flex items-center pl-44'>
            <div className='w-[99%] flex justify-between'>
                <motion.div ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: inView ? 0.5 : 0  }} className='[w-25%]'>
                    <h3 className='mb-5 text-grey-900 text-left text-4xl font-semibold leading-15 tracking-tighter'>Ready to clear the path to perfect communication?</h3>
                    <ul>
                        <li className='flex mb-3 items-center gap-3'>
                            <Image src='/assets/check.svg' width={26} height={27} alt='check'/>
                            <p className='text-gray-600 text-lg font-normal text-left leading-8 tracking-normal'>30 days free trial</p>
                        </li>
                        <li className='flex mb-3 items-center gap-3'>
                            <Image src='/assets/check.svg' width={26} height={27} alt='check'/>
                            <p className='text-gray-600 text-lg font-normal text-left leading-8 tracking-normal'>30 days free trial</p>
                        </li>
                        <li className='flex mb-3 items-center gap-3'>
                            <Image src='/assets/check.svg' width={26} height={27} alt='check'/>
                            <p className='text-gray-600 text-lg font-normal text-left leading-8 tracking-normal'>30 days free trial</p>
                        </li>
                        <li className='flex mb-3 items-center gap-3'>
                            <Image src='/assets/check.svg' width={26} height={27} alt='check'/>
                            <p className='text-gray-600 text-lg font-normal text-left leading-8 tracking-normal'>30 days free trial</p>
                        </li>
                    </ul>
                    <div className='gap-2 mt-6 flex items-center'>
                        <button type="button" className='px-6 py-2 border border-gray-400 hover:bg-gray-300 rounded-full bg-white text-gray-900 font-semibold text-xl leading-loose shadow-md'>Talk to sales</button>
                        <button type="button" className='px-6 py-2 border border-blue-700 hover:bg-blue-800 rounded-full bg-blue-700 border-t-2 text-white font-semibold text-xl leading-loose shadow-md '>Sign up for free trial</button>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}} 
                transition={{ duration: 0.5, delay: inView ? 0.5 : 0  }}  className=''>
                    <img src="/assets/screen.png" alt="screen" />
                </motion.div>
            </div>
        </motion.section>
        )}
        </InView>
    )

}

export default Ready;