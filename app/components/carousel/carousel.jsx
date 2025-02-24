'use client'
import React from 'react';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const images = [
  '/assets/Shopify.svg',
  '/assets/Coinbase.svg',
  '/assets/Dropbox.svg',
  '/assets/Intercom.svg',
  '/assets/Marvel.svg',
  '/assets/Automattic.svg',
];

function Carousel(){
    return(
        <InView>
        {({ inView, ref }) => (
        <motion.section ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}} className='w-[90%] 3xl:w-[73%] mx-auto py-10 lg:py-20'>
            <p className='text-gray-600 text-base leading-6 lg:text-xl font-medium mb-11 lg:leading-10 tracking-normal text-center'>Join 1,500+ companies already video conferencing the ClearLink way</p>
           
            <div className='  py-3 3xl:py-6  '>
                <Marquee gradient={true} gradientColor='#ffffff' speed={100}>
                <div className='flex items-center md:gap-20 gap-10 pl-10 '>
                    <Image src={images[0]} alt='y!' width={151.56} height={27} className=' 3xl:h-[43px]' />
                    <Image
                    src={images[1]}
                    alt='business insider'
                    width={177.78}
                    height={27}
                    className=' 3xl:h-[43px]'
                    />
                    <Image src={images[2]} alt='the guardian' width={183.05} height={27} />
                    <Image
                    src={images[3]}
                    alt='business insider'
                    width={174.44}
                    height={27}
                    className=' 3xl:h-[43px]'
                    />
                    <Image src={images[4]} alt='vanguard' width={100} height={27} className=' 3xl:h-[43px]'/>
                    <Image
                    src={images[5]}
                    alt='business insider'
                    width={240}
                    height={27}
                    className=' 3xl:h-[43px]'
                    />
                    
                </div>
                </Marquee>
            </div>
            

        </motion.section>
        )}
        </InView>
    )
}
export default Carousel;