'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'; 
import {InView} from 'react-intersection-observer'

function Advantage (){
    return(
        <InView>
        {({ inView, ref }) => (
        <motion.section ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}} className='grid place-items-center py-14'>
            <div className='w-[90%] 3xl:w-[77%]'>
                <div className='lg:w-[70%]'>
                    <p className='text-blue-700 mb-3 text-lg font-semibold text-left leading-7 tracking-normal'>The ClearLink Advantage</p>
                    <h3 className='text-gray-800 mb-3 text-4xl font-semibold leading-15 tracking-tighter text-left'>Why choose ClearLink?</h3>
                    <p className='w-[51%] text-gray-500 text-xs font-normal leading-6 tracking-normal text-left'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
                </div>
                
                <div className='mt-16  flex flex-wrap lg:flex-nowrap items-center justify-between'>
                    <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: inView ? 0.5 : 0  }} className='grid grid-cols-2 grid-rows-2 gap-5 w-full lg:w-[59%] '>
                        <div className=''>
                            <div className='w-14 mb-4 h-14 rounded-full bg-gray-50 grid place-items-center border border-gray-200'>
                                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.43137C21 4.82555 21 4.52265 20.8802 4.38238C20.7763 4.26068 20.6203 4.19609 20.4608 4.20865C20.2769 4.22312 20.0627 4.43731 19.6343 4.86569L16 8.5L19.6343 12.1343C20.0627 12.5627 20.2769 12.7769 20.4608 12.7914C20.6203 12.8039 20.7763 12.7393 20.8802 12.6176C21 12.4774 21 12.1744 21 11.5686V5.43137Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 6.3C1 4.61984 1 3.77976 1.32698 3.13803C1.6146 2.57354 2.07354 2.1146 2.63803 1.82698C3.27976 1.5 4.11984 1.5 5.8 1.5H11.2C12.8802 1.5 13.7202 1.5 14.362 1.82698C14.9265 2.1146 15.3854 2.57354 15.673 3.13803C16 3.77976 16 4.61984 16 6.3V10.7C16 12.3802 16 13.2202 15.673 13.862C15.3854 14.4265 14.9265 14.8854 14.362 15.173C13.7202 15.5 12.8802 15.5 11.2 15.5H5.8C4.11984 15.5 3.27976 15.5 2.63803 15.173C2.07354 14.8854 1.6146 14.4265 1.32698 13.862C1 13.2202 1 12.3802 1 10.7V6.3Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <h2 className='text-gray-900 text-xs font-semibold leading-8 tracking-normal text-left'>Crystal-clear HD video</h2>
                            <p className='text-gray-600 text-lg font-normal leading-7 tracking-normal text-left'>No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings.</p>
                        </div>
                        <div className=''>
                            <div className='w-14 mb-4 h-14 rounded-full bg-gray-50 grid place-items-center border border-gray-200'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10.5L3 14.5M7.5 6.5L7.5 18.5M12 3.5V21.5M16.5 6.5V18.5M21 10.5V14.5" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                            </div>
                            <h2 className='text-gray-900 text-xs font-semibold leading-8 tracking-normal text-left'>Noise-canceling audio</h2>
                            <p className='text-gray-600 text-lg font-normal leading-7 tracking-normal text-left'>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
                        </div>
                        <div className=''>
                            <div className='w-14 mb-4 h-14 rounded-full bg-gray-50 grid place-items-center border border-gray-200'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 22.5H16.2C17.8802 22.5 18.7202 22.5 19.362 22.173C19.9265 21.8854 20.3854 21.4265 20.673 20.862C21 20.2202 21 19.3802 21 17.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V17.7C3 19.3802 3 20.2202 3.32698 20.862C3.6146 21.4265 4.07354 21.8854 4.63803 22.173C5.27976 22.5 6.11984 22.5 7.8 22.5Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                            </div>
                            <h2 className='text-gray-900 text-xs font-semibold leading-8 tracking-normal text-left'>Scheduling made easy</h2>
                            <p className='text-gray-600 text-lg font-normal leading-7 tracking-normal text-left'>Streamline your agenda with ClearLink&apos;s intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
                        </div>
                        <div className=''>
                            <div className='w-14 mb-4 h-14 rounded-full bg-gray-50 grid place-items-center border border-gray-200'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10.5V8.5C7 5.73858 9.23858 3.5 12 3.5C13.6358 3.5 15.0882 4.28555 16.0004 5.5M12 14.5V16.5M19 15.5C19 19.366 15.866 22.5 12 22.5C8.13401 22.5 5 19.366 5 15.5C5 11.634 8.13401 8.5 12 8.5C15.866 8.5 19 11.634 19 15.5Z" stroke="#175CD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                            </div>
                            <h2 className='text-gray-900 text-xs font-semibold leading-8 tracking-normal text-left'>Bank-grade security</h2>
                            <p className='text-gray-600 text-lg font-normal leading-7 tracking-normal text-left'>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}} 
                    transition={{ duration: 0.5, delay: inView ? 0.5 : 0  }} className='w-full mt-48 lg:mt-0 lg:w-[40%] h-full relative'>
                        <Image src='/assets/Rectangle.png' width={544} height={527} alt='collage'/>
                        <div className='absolute -top-56 right-40 animate-pulse'>
                            <svg width="283" height="244" viewBox="0 0 283 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M202.47 235.718C202.025 236.729 202.483 237.909 203.494 238.355C204.505 238.8 205.686 238.341 206.131 237.33L202.47 235.718ZM113.314 118.038L111.623 119.105L111.623 119.106L113.314 118.038ZM197.936 96.9693L195.961 96.6584L195.961 96.6587L197.936 96.9693ZM45.3918 42.1969C44.4387 42.7551 44.1185 43.9803 44.6767 44.9334C45.2348 45.8866 46.46 46.2068 47.4132 45.6486L45.3918 42.1969ZM223.019 231.518C224.019 231.051 224.452 229.861 223.985 228.86C223.518 227.859 222.327 227.426 221.327 227.893L223.019 231.518ZM203.645 238.354L201.956 239.424C202.494 240.274 203.58 240.592 204.491 240.166L203.645 238.354ZM193.87 219.979C193.186 219.112 191.928 218.964 191.061 219.649C190.194 220.333 190.046 221.591 190.731 222.458L193.87 219.979ZM204.301 236.524C206.131 237.33 206.131 237.33 206.132 237.328C206.132 237.328 206.133 237.326 206.134 237.324C206.135 237.321 206.137 237.316 206.14 237.31C206.145 237.298 206.153 237.28 206.163 237.257C206.183 237.212 206.211 237.145 206.249 237.058C206.324 236.884 206.432 236.627 206.572 236.292C206.85 235.623 207.251 234.64 207.742 233.377C208.726 230.852 210.075 227.204 211.546 222.692C214.488 213.675 217.929 201.182 219.912 187.302C223.861 159.663 222.106 125.893 198.23 103.48L195.492 106.396C217.887 127.418 219.852 159.441 215.952 186.736C214.011 200.323 210.637 212.583 207.744 221.452C206.298 225.883 204.975 229.461 204.015 231.926C203.535 233.158 203.146 234.112 202.879 234.755C202.745 235.077 202.642 235.32 202.572 235.482C202.538 235.563 202.511 235.623 202.494 235.663C202.486 235.683 202.479 235.697 202.475 235.706C202.473 235.711 202.472 235.714 202.471 235.716C202.471 235.717 202.47 235.718 202.47 235.718C202.47 235.718 202.47 235.718 204.301 236.524ZM198.23 103.48C174.594 81.2938 149.344 78.6473 131.688 84.7651C122.905 87.8083 115.932 93.0529 112.096 99.2126C108.225 105.429 107.545 112.645 111.623 119.105L115.006 116.97C111.892 112.037 112.276 106.49 115.492 101.327C118.742 96.1076 124.879 91.3574 132.997 88.5447C149.142 82.9506 172.856 85.1477 195.492 106.396L198.23 103.48ZM111.623 119.106C115.548 125.321 122.643 129.967 130.942 132.768C139.272 135.579 149.022 136.606 158.538 135.408C177.597 133.009 196.093 121.574 199.912 97.2799L195.961 96.6587C192.495 118.706 175.872 129.195 158.039 131.44C149.109 132.564 139.968 131.592 132.221 128.978C124.442 126.352 118.273 122.145 115.005 116.97L111.623 119.106ZM199.912 97.2801C201.854 84.9374 196.987 72.8987 187.898 62.5135C178.81 52.1301 165.39 43.2487 149.795 37.0675C118.634 24.7162 78.2582 22.9504 45.3918 42.1969L47.4132 45.6486C78.9615 27.174 117.997 28.7664 148.322 40.786C163.47 46.7904 176.311 55.3476 184.888 65.1478C193.463 74.9462 197.664 85.836 195.961 96.6584L199.912 97.2801ZM221.327 227.893L202.799 236.542L204.491 240.166L223.019 231.518L221.327 227.893ZM203.645 238.354C205.335 237.284 205.335 237.284 205.335 237.284C205.335 237.284 205.335 237.283 205.335 237.283C205.334 237.283 205.334 237.282 205.333 237.281C205.332 237.28 205.331 237.277 205.328 237.273C205.324 237.267 205.318 237.256 205.309 237.243C205.292 237.216 205.267 237.177 205.234 237.125C205.168 237.021 205.072 236.869 204.948 236.674C204.7 236.285 204.344 235.725 203.908 235.044C203.038 233.681 201.851 231.831 200.585 229.881C198.084 226.028 195.188 221.648 193.87 219.979L190.731 222.458C191.905 223.945 194.681 228.133 197.23 232.059C198.489 233.998 199.671 235.84 200.538 237.197C200.971 237.876 201.326 238.433 201.572 238.82C201.695 239.014 201.791 239.165 201.856 239.268C201.889 239.319 201.914 239.358 201.931 239.385C201.939 239.398 201.945 239.408 201.949 239.414C201.952 239.418 201.953 239.42 201.954 239.422C201.955 239.422 201.955 239.423 201.955 239.423C201.955 239.424 201.955 239.424 201.956 239.424C201.956 239.424 201.956 239.424 203.645 238.354Z" fill="#004EEB"/>
                            </svg>

                        </div>
                    </motion.div>
                    
                </div>

            </div>

        </motion.section>
        )}
        </InView>
    )
}

export default Advantage;