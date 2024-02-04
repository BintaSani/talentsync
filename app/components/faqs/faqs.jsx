'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';


function Faqs(){
    // const defaultContent = "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.";
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
    //   setActiveIndex(activeIndex === index ? null : index);
      setActiveIndex(index);
    };
  
    const accordionItems = [
      { title: 'How many participants can join a ClearLink video conference?' , content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },
      { title: 'Can I use ClearLink on multiple devices?', content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },
      { title: 'Is ClearLink compatible with other video conferencing platforms?', content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },
      { title: 'How does ClearLink ensure the security of my video conferences?', content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },
      { title: 'Do I need to download any software to use ClearLink?', content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },
      { title: 'What kind of customer support does ClearLink provide?', content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' },

    ];
  
  
    return(
        <InView>
        {({ inView, ref }) => (
        <motion.section ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}  className='py-24 grid place-items-center'>
            <div className='w-[77%] flex justify-between'>
                <motion.div ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} className='w-[32%]'>
                    <p className='text-blue-700 mb-5 text-lg font-semibold leading-7 tracking-normal text-left'>Support</p>
                    <h3 className='text-gray-800 mb-5 text-4xl font-semibold leading-15 tracking-tighter text-left'>FAQs</h3>
                    <p className='text-gray-500 text-base font-normal leading-6 tracking-normal text-left'>Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re looking for? Please <span className='underline'>chat to our friendly team.</span></p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}} 
                transition={{ duration: 0.5, delay: inView ? 0.5 : 0  }}  className='w-[60%] '>
                    {accordionItems.map((item, index) => (
                        <div key={index} className={`${
                            activeIndex === index ? 'bg-gray-50 border border-gray-200 rounded-2xl' : ''
                        }`}
                        >
                        <div
                            className={`flex border-b border-grey-200 items-center justify-between text-lg font-semibold leading-7 tracking-normal text-left text-gray-900 p-6 cursor-pointer ${
                            activeIndex === index ? 'bg-gray-50 border-b-0 rounded-2xl' : 'bg-white border-b border-gray-300'
                            }`}
                            onClick={() => handleAccordionClick(index)}
                        >
                            {item.title}
                            {activeIndex === index ? (
                            <Image
                                src="/assets/close.svg"
                                width={24}
                                height={26}
                                alt="close"
                                className="ml-auto"
                            />
                            ) : (
                            <Image
                                src="/assets/open.svg"
                                width={24}
                                height={26}
                                alt="open"
                                className="ml-auto"
                            />
                            )}
                        </div>
                        {activeIndex === index && (
                            <div className="rounded-2xl px-6 pb-6 bg-gray-50 ">{item.content}</div>
                        )}
                        </div>
                    ))}
  
                </motion.div>
            </div>
        </motion.section>
        )}
        </InView>
    )
}

export default Faqs;