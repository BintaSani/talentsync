'use client'
import React from 'react';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';

function Carousel(){
    return(
        <InView>
        {({ inView, ref }) => (
        <motion.section ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}} className='grid place-items-center overflow-x-hidden  py-20'>
            <p className='text-gray-600 text-xl font-medium mb-11 leading-10 tracking-normal text-center'>Join 1,500+ companies already video conferencing the ClearLink way</p>
            <div className='w-[73%] justify-between flex items-center'>
                
                <svg width="152" height="43" viewBox="0 0 152 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_8856)">
                    <path d="M32.7759 8.1442C32.7466 7.93061 32.56 7.81211 32.4051 7.79921C32.2515 7.78631 29.2405 7.74056 29.2405 7.74056C29.2405 7.74056 26.7223 5.29517 26.4735 5.0464C26.2248 4.79764 25.739 4.87274 25.5501 4.92906C25.5478 4.93024 25.0772 5.07574 24.2852 5.32098C24.1526 4.89152 23.9577 4.36348 23.6797 3.8331C22.7832 2.12227 21.4702 1.21757 19.8837 1.21523C19.8813 1.21523 19.8801 1.21523 19.8778 1.21523C19.7675 1.21523 19.6584 1.22579 19.5481 1.23517C19.5012 1.17885 19.4542 1.1237 19.405 1.06972C18.7138 0.330476 17.8279 -0.0297603 16.766 0.00192169C14.7172 0.0605921 12.6767 1.54026 11.0221 4.16869C9.85811 6.01798 8.97217 8.34137 8.72108 10.1402C6.36838 10.8688 4.72326 11.3781 4.68688 11.3899C3.49939 11.763 3.46185 11.7993 3.30696 12.9188C3.19196 13.7648 0.0847778 37.7916 0.0847778 37.7916L26.1239 42.2951L37.4097 39.4894C37.4097 39.4894 32.8052 8.35779 32.7759 8.1442ZM22.9815 5.72463C22.3819 5.91003 21.7001 6.12125 20.9609 6.35006C20.9456 5.31277 20.8224 3.86948 20.339 2.62214C21.8937 2.91667 22.6588 4.67561 22.9815 5.72463ZM19.5985 6.77249C18.2339 7.19489 16.7448 7.65604 15.2511 8.1184C15.6711 6.50964 16.4679 4.90794 17.4466 3.85774C17.8103 3.467 18.3195 3.03166 18.9227 2.7829C19.4894 3.96569 19.6126 5.64015 19.5985 6.77249ZM16.807 1.36542C17.2881 1.35486 17.6929 1.46047 18.0391 1.68811C17.4853 1.9756 16.9502 2.38864 16.448 2.92723C15.1466 4.32359 14.1492 6.49087 13.7514 8.58188C12.5111 8.96557 11.2978 9.34228 10.1808 9.68727C10.886 6.39583 13.6447 1.45695 16.807 1.36542Z" fill="#95BF47"/>
                    <path d="M32.4063 7.80041C32.2526 7.78751 29.2416 7.74176 29.2416 7.74176C29.2416 7.74176 26.7235 5.29636 26.4747 5.0476C26.382 4.95489 26.2565 4.90678 26.125 4.88684L26.1262 42.294L37.4109 39.4895C37.4109 39.4895 32.8064 8.35899 32.7771 8.1454C32.7477 7.93181 32.56 7.81331 32.4063 7.80041Z" fill="#5E8E3E"/>
                    <path d="M19.8699 13.6029L18.5593 18.5065C18.5593 18.5065 17.0972 17.8412 15.3641 17.9503C12.8224 18.1111 12.7954 19.714 12.8213 20.1165C12.9597 22.3096 18.7294 22.7883 19.0533 27.9255C19.3079 31.9667 16.9094 34.7313 13.4537 34.9495C9.30573 35.2112 7.02228 32.7646 7.02228 32.7646L7.90118 29.0262C7.90118 29.0262 10.1998 30.7605 12.0398 30.6443C13.2414 30.568 13.6708 29.5906 13.6274 28.8994C13.4467 26.0386 8.74835 26.2076 8.45151 21.5069C8.20154 17.5514 10.7995 13.543 16.5316 13.1816C18.7399 13.0397 19.8699 13.6029 19.8699 13.6029Z" fill="white"/>
                    <path d="M52.2714 23.8711C50.9737 23.167 50.3068 22.5735 50.3068 21.7576C50.3068 20.7195 51.2332 20.0525 52.6799 20.0525C54.364 20.0525 55.8676 20.7567 55.8676 20.7567L57.0536 17.1232C57.0536 17.1232 55.9631 16.2701 52.7532 16.2701C48.2864 16.2701 45.1906 18.8282 45.1906 22.4244C45.1906 24.4635 46.6361 26.0207 48.5645 27.1322C50.1218 28.0213 50.6781 28.6522 50.6781 29.5786C50.6781 30.5423 49.8995 31.3209 48.454 31.3209C46.2997 31.3209 44.2653 30.2082 44.2653 30.2082L43.0049 33.8417C43.0049 33.8417 44.8845 35.1022 48.0466 35.1022C52.6438 35.1022 55.9433 32.8408 55.9433 28.7627C55.9421 26.577 54.2744 25.0198 52.2714 23.8711Z" fill="black"/>
                    <path d="M70.5857 16.234C68.3242 16.234 66.5447 17.3094 65.1737 18.9399L65.0992 18.9026L67.0638 8.63409H61.9475L56.9803 34.7693H62.0965L63.8015 25.8356C64.4684 22.4617 66.2107 20.3866 67.8424 20.3866C68.9911 20.3866 69.4369 21.1651 69.4369 22.2778C69.4369 22.9819 69.3624 23.835 69.2145 24.5392L67.2872 34.7705H72.4037L74.405 24.2051C74.6277 23.0925 74.7765 21.7588 74.7765 20.8684C74.7744 17.9762 73.2546 16.234 70.5857 16.234Z" fill="black"/>
                    <path d="M86.3404 16.2339C80.1857 16.2339 76.1092 21.7948 76.1092 27.9852C76.1092 31.9516 78.5553 35.1394 83.1527 35.1394C89.1953 35.1394 93.2732 29.7275 93.2732 23.388C93.2732 19.7184 91.1225 16.2339 86.3404 16.2339ZM83.8196 31.2113C82.077 31.2113 81.3355 29.7286 81.3355 27.8746C81.3355 24.9464 82.856 20.1642 85.6362 20.1642C87.4527 20.1642 88.0449 21.7214 88.0449 23.2414C88.0449 26.3919 86.5265 31.2113 83.8196 31.2113Z" fill="black"/>
                    <path d="M106.36 16.234C102.906 16.234 100.947 19.274 100.947 19.274H100.873L101.17 16.5308H96.6473C96.4252 18.3848 96.0164 21.2013 95.6096 23.3148L92.0505 42.0352H97.1668L98.5745 34.4726H98.6866C98.6866 34.4726 99.7362 35.1395 101.69 35.1395C107.695 35.1395 111.624 28.9863 111.624 22.7574C111.624 19.3113 110.103 16.234 106.36 16.234ZM101.466 31.2848C100.138 31.2848 99.352 30.5434 99.352 30.5434L100.205 25.7613C100.799 22.5735 102.466 20.4599 104.246 20.4599C105.803 20.4599 106.285 21.9054 106.285 23.2776C106.285 26.5771 104.32 31.2848 101.466 31.2848Z" fill="black"/>
                    <path d="M118.927 8.89368C117.296 8.89368 115.999 10.1914 115.999 11.8591C115.999 13.3791 116.962 14.4173 118.408 14.4173H118.482C120.077 14.4173 121.448 13.3419 121.485 11.4518C121.485 9.96903 120.484 8.89368 118.927 8.89368Z" fill="black"/>
                    <path d="M111.772 34.7694H116.887L120.373 16.6426H115.219L111.772 34.7694Z" fill="black"/>
                    <path d="M133.385 16.6051H129.826L130.011 15.752C130.308 14.0098 131.346 12.4525 133.051 12.4525C133.961 12.4525 134.682 12.7121 134.682 12.7121L135.683 8.70851C135.683 8.70851 134.793 8.26392 132.902 8.26392C131.085 8.26392 129.27 8.78295 127.897 9.9689C126.155 11.4517 125.339 13.6013 124.932 15.752L124.784 16.6051H122.411L121.669 20.461H124.043L121.337 34.7704H126.453L129.159 20.461H132.681L133.385 16.6051Z" fill="black"/>
                    <path d="M145.693 16.6426C145.693 16.6426 142.495 24.6998 141.059 29.098H140.984C140.887 27.6816 139.724 16.6426 139.724 16.6426H134.348L137.427 33.2866C137.501 33.6567 137.464 33.8802 137.315 34.1397C136.721 35.2884 135.721 36.4011 134.534 37.2169C133.571 37.921 132.496 38.3656 131.643 38.6624L133.052 43C134.09 42.7777 136.239 41.9247 138.056 40.2196C140.392 38.0327 142.541 34.6588 144.765 30.0616L151.031 16.6414H145.693V16.6426Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_8856">
                    <rect width="151.557" height="43" fill="white" transform="translate(0.0847778)"/>
                    </clipPath>
                    </defs>
                </svg>


                <svg width="179" height="33" viewBox="0 0 179 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5224 9.43379C30.0641 9.43379 25.0179 14.3739 25.0179 20.9872C25.0179 27.6006 29.9367 32.4984 36.5224 32.4984C43.1081 32.4984 48.1124 27.516 48.1124 20.9449C48.1124 14.4162 43.1937 9.43379 36.5224 9.43379ZM36.566 27.7323C32.8882 27.7323 30.1932 24.8541 30.1932 20.9888C30.1932 17.0797 32.8446 14.2031 36.5224 14.2031C40.2437 14.2031 42.9371 17.1236 42.9371 20.9888C42.9371 24.8541 40.2437 27.7323 36.566 27.7323ZM49.5228 14.4601H52.731V32.0707H57.8627V9.86308H49.5228V14.4601ZM12.103 14.2015C14.798 14.2015 16.9362 15.8764 17.748 18.3676H23.1799C22.1955 13.0421 17.8335 9.43379 12.1466 9.43379C5.68836 9.43379 0.642151 14.3739 0.642151 20.9888C0.642151 27.6038 5.56088 32.5 12.1466 32.5C17.706 32.5 22.1535 28.8917 23.1379 23.5223H17.748C16.9782 26.0135 14.84 27.7323 12.145 27.7323C8.42368 27.7323 5.81585 24.8541 5.81585 20.9888C5.81746 17.0797 8.38334 14.2015 12.103 14.2015ZM147.029 18.8408L143.266 18.283C141.47 18.0261 140.187 17.4244 140.187 16.0065C140.187 14.4601 141.855 13.6877 144.121 13.6877C146.601 13.6877 148.185 14.7609 148.527 16.522H153.487C152.931 12.0551 149.509 9.43541 144.25 9.43541C138.818 9.43541 135.226 12.2274 135.226 16.1788C135.226 19.9579 137.579 22.1499 142.325 22.8361L146.088 23.3938C147.928 23.6508 148.954 24.3825 148.954 25.7566C148.954 27.5176 147.158 28.2478 144.678 28.2478C141.641 28.2478 139.93 27.0022 139.674 25.1126H134.627C135.099 29.4511 138.476 32.5 144.634 32.5C150.237 32.5 153.957 29.9226 153.957 25.498C153.957 21.5466 151.264 19.4847 147.029 18.8408ZM55.2968 0.714645C53.4152 0.714645 52.0031 2.0887 52.0031 3.97823C52.0031 5.86775 53.4136 7.24181 55.2968 7.24181C57.1785 7.24181 58.5905 5.86775 58.5905 3.97823C58.5905 2.0887 57.1785 0.714645 55.2968 0.714645ZM130.608 17.4667C130.608 12.6567 127.7 9.43541 121.541 9.43541C115.726 9.43541 112.475 12.3998 111.833 16.9529H116.923C117.18 15.1918 118.548 13.7316 121.456 13.7316C124.065 13.7316 125.348 14.891 125.348 16.3089C125.348 18.1562 122.995 18.6278 120.087 18.9286C116.153 19.3579 111.278 20.7319 111.278 25.8867C111.278 29.882 114.23 32.4577 118.934 32.4577C122.611 32.4577 124.921 30.9113 126.076 28.4624C126.247 30.6528 127.872 32.0707 130.14 32.0707H133.133V27.4754H130.609V17.4667H130.608ZM125.561 23.0507C125.561 26.0151 122.995 28.2055 119.873 28.2055C117.948 28.2055 116.323 27.3892 116.323 25.672C116.323 23.4817 118.932 22.88 121.327 22.6231C123.636 22.4084 124.919 21.893 125.561 20.9043V23.0507ZM98.3195 9.43379C95.4535 9.43379 93.0587 10.6371 91.3481 12.6551V0.5H86.2164V32.0707H91.2626V29.1502C92.9732 31.2544 95.4116 32.5 98.3195 32.5C104.478 32.5 109.14 27.6038 109.14 20.9888C109.14 14.3739 104.392 9.43379 98.3195 9.43379ZM97.5498 27.7323C93.872 27.7323 91.1771 24.8541 91.1771 20.9888C91.1771 17.1236 93.914 14.2031 97.5917 14.2031C101.313 14.2031 103.921 17.0813 103.921 20.9888C103.921 24.8541 101.228 27.7323 97.5498 27.7323ZM73.9422 9.43379C70.6065 9.43379 68.4247 10.8078 67.1418 12.7413V9.86308H62.052V32.0691H67.1837V20.0002C67.1837 16.6065 69.322 14.2015 72.4865 14.2015C75.4381 14.2015 77.2762 16.3057 77.2762 19.3562V32.0707H82.4079V18.9709C82.4095 13.3852 79.5451 9.43379 73.9422 9.43379ZM178.42 20.2587C178.42 13.9023 173.801 9.43541 167.6 9.43541C161.014 9.43541 156.181 14.4178 156.181 20.9888C156.181 27.9046 161.356 32.5 167.685 32.5C173.032 32.5 177.223 29.321 178.291 24.8118H172.944C172.175 26.7875 170.293 27.9046 167.769 27.9046C164.475 27.9046 161.995 25.8428 161.44 22.2344H178.418V20.2587H178.42ZM161.74 18.5399C162.553 15.4471 164.863 13.9446 167.514 13.9446C170.422 13.9446 172.646 15.6195 173.159 18.5399H161.74Z" fill="#0052FF"/>
                </svg>
                

                <svg width="184" height="37" viewBox="0 0 184 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_8870)">
                <path d="M21.6538 7.26486L11.0369 14.0297L21.6538 20.7946L11.0369 27.5594L0.419922 20.758L11.0369 13.9931L0.419922 7.26486L11.0369 0.5L21.6538 7.26486ZM10.982 29.7351L21.5989 22.9703L32.2159 29.7351L21.5989 36.5L10.982 29.7351ZM21.6538 20.758L32.2708 13.9931L21.6538 7.26486L32.2159 0.5L42.8328 7.26486L32.2159 14.0297L42.8328 20.7946L32.2159 27.5594L21.6538 20.758Z" fill="#0061FF"/>
                <path d="M51.1621 7.26492H59.7472C65.2204 7.26492 69.7418 10.4279 69.7418 17.6499V19.1674C69.7418 26.4442 65.5133 29.7169 59.9119 29.7169H51.1621V7.26492ZM55.958 11.3421V25.6214H59.6374C62.7492 25.6214 64.836 23.592 64.836 19.076V17.8876C64.836 13.3716 62.6394 11.3421 59.4726 11.3421H55.958ZM72.2862 11.5615H76.1302L76.7526 15.785C77.4848 12.9145 79.3519 11.3787 82.7384 11.3787H83.9282V16.2238H81.9513C78.0523 16.2238 77.1004 17.5767 77.1004 21.4163V29.7718H72.3594V11.5615H72.2862ZM84.8801 21.0323V20.5204C84.8801 14.432 88.7791 11.1044 94.0875 11.1044C99.5058 11.1044 103.295 14.432 103.295 20.5204V21.0323C103.295 27.011 99.6157 30.2289 94.0875 30.2289C88.2116 30.174 84.8801 27.0293 84.8801 21.0323ZM98.4441 20.9775V20.5204C98.4441 17.1379 96.7418 15.1085 94.0326 15.1085C91.3784 15.1085 89.6211 16.9734 89.6211 20.5204V20.9775C89.6211 24.2502 91.3235 26.1151 94.0326 26.1151C96.7418 26.0602 98.4441 24.2502 98.4441 20.9775ZM105.784 11.5615H109.738L110.196 14.9988C111.148 12.6951 113.18 11.1044 116.182 11.1044C120.813 11.1044 123.87 14.432 123.87 20.5935V21.1054C123.87 27.0841 120.483 30.2471 116.182 30.2471C113.308 30.2471 111.331 28.949 110.361 26.8647V36.0613H105.73L105.784 11.5615ZM119.056 20.9775V20.5752C119.056 16.9551 117.189 15.1633 114.699 15.1633C112.045 15.1633 110.288 17.1928 110.288 20.5752V20.9226C110.288 24.1405 111.99 26.1699 114.644 26.1699C117.372 26.1151 119.056 24.3782 119.056 20.9775ZM130.881 26.4076L130.478 29.7352H126.414V5.47314H131.045V14.7794C132.071 12.4025 134.102 11.1044 136.976 11.1044C141.333 11.1593 144.555 14.1578 144.555 20.1913V20.7581C144.555 26.7916 141.498 30.2471 136.867 30.2471C133.81 30.174 131.833 28.7662 130.881 26.4076ZM139.686 20.7581V20.301C139.686 16.9734 137.873 15.1085 135.329 15.1085C132.73 15.1085 130.917 17.1928 130.917 20.3558V20.7581C130.917 24.1405 132.675 26.1151 135.274 26.1151C138.056 26.1151 139.686 24.3782 139.686 20.7581ZM146.587 21.0323V20.5204C146.587 14.432 150.485 11.1044 155.794 11.1044C161.212 11.1044 165.001 14.432 165.001 20.5204V21.0323C165.001 27.011 161.267 30.2289 155.794 30.2289C149.918 30.174 146.587 27.0293 146.587 21.0323ZM160.187 20.9775V20.5204C160.187 17.1379 158.485 15.1085 155.776 15.1085C153.121 15.1085 151.364 16.9734 151.364 20.5204V20.9775C151.364 24.2502 153.067 26.1151 155.776 26.1151C158.503 26.0602 160.187 24.2502 160.187 20.9775ZM171.207 20.301L164.818 11.5615H170.292L173.971 17.0282L177.705 11.5615H183.123L176.643 20.2461L183.471 29.7352H178.108L173.934 23.7017L169.871 29.7352H164.269L171.207 20.301Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_2_8870">
                <rect width="183.051" height="36" fill="white" transform="translate(0.419922 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                

                <svg width="175" height="41" viewBox="0 0 175 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_8873)">
                <path d="M60.5029 14.3648C60.5029 13.5325 59.8609 12.8497 58.9623 12.8497C58.0637 12.8497 57.4217 13.5325 57.4217 14.3648V26.6563C57.4217 27.4886 58.0637 28.1715 58.9623 28.1715C59.8823 28.1715 60.5029 27.4886 60.5029 26.6563V14.3648Z" fill="black"/>
                <path d="M75.6743 12.8496C74.7756 12.8496 74.155 13.5325 74.155 14.3647V19.6143L74.2406 24.309L72.3791 19.9129L69.9398 14.9195C69.1909 13.3617 68.3352 12.8496 67.1154 12.8496C65.3182 12.8496 64.5264 13.9806 64.5264 15.6024V26.6562C64.5264 27.4886 65.1469 28.1715 66.0457 28.1715C66.9443 28.1715 67.5648 27.4886 67.5648 26.6562L67.5434 21.4709L67.4792 16.1572L69.4691 21.0226L71.9297 26.1014C72.7001 27.7232 73.5132 28.1928 74.7541 28.1928C76.3589 28.1928 77.1933 27.2111 77.1933 25.3973V14.3647C77.1933 13.5325 76.5729 12.8496 75.6743 12.8496Z" fill="black"/>
                <path d="M88.554 15.9866L92.0416 16.072C92.8547 16.0933 93.4967 15.4745 93.4967 14.5782C93.4967 13.6819 92.8547 13.0631 92.0416 13.0631L81.9422 13.0417C81.1507 13.0417 80.4874 13.6606 80.4874 14.5569C80.4874 15.4531 81.1507 16.072 81.9422 16.0506L85.4514 15.9866V26.6563C85.4514 27.4887 86.0932 28.1716 86.992 28.1716C87.912 28.1716 88.554 27.4887 88.554 26.6563V15.9866Z" fill="black"/>
                <path d="M98.8928 27.9793H106.403C107.195 27.9793 107.837 27.3818 107.837 26.5495C107.837 25.696 107.195 25.0984 106.403 25.0984L99.877 25.1198V21.556H105.526C106.296 21.556 106.917 20.9798 106.917 20.1904C106.917 19.3794 106.296 18.8032 105.526 18.8032L99.877 18.8459V15.9011H106.403C107.195 15.9011 107.837 15.3036 107.837 14.45C107.837 13.5964 107.195 13.0203 106.403 13.0203L98.9142 13.0416C97.5447 13.0416 96.7745 13.8098 96.7745 15.1756V25.8454C96.7745 27.211 97.5447 27.9793 98.8928 27.9793Z" fill="black"/>
                <path d="M120.07 21.8976C122.102 21.3642 123.301 19.7851 123.301 17.6937C123.301 15.3677 121.782 13.0417 118.144 13.0417H113.437C112.067 13.0417 111.297 13.8099 111.297 15.1756V26.6563C111.297 27.4886 111.939 28.1715 112.881 28.1715C113.801 28.1715 114.464 27.4886 114.464 26.6563L114.442 22.6444H117.032L119.663 27.3819C120.091 28.1075 120.99 28.4061 121.824 27.9794C122.659 27.5313 122.894 26.6349 122.445 25.9095L120.07 21.8976ZM114.442 15.8798H118.165C119.428 15.8798 120.22 16.6694 120.22 17.8431C120.22 18.9954 119.471 19.8491 118.208 19.8491H114.442V15.8798Z" fill="black"/>
                <path d="M132.751 28.2568C135.875 28.2568 137.886 26.8485 138.571 24.5651C138.935 23.2633 138.164 22.3245 137.009 22.3245C136.303 22.3245 135.832 22.6872 135.554 23.4768C135.126 24.6719 134.077 25.4188 132.58 25.4188C130.205 25.4188 129.178 23.8182 129.178 20.4892C129.178 17.2243 130.226 15.6665 132.58 15.6665C134.056 15.6665 134.912 16.2854 135.447 17.7151C135.746 18.5261 136.239 18.8888 136.966 18.8888C138.079 18.8888 138.892 17.9925 138.549 16.7549C137.865 14.2368 135.875 12.8284 132.665 12.8284C128.258 12.8284 126.011 15.5172 126.011 20.4892C126.011 25.504 128.258 28.2568 132.751 28.2568Z" fill="black"/>
                <path d="M147.964 28.2142C152.5 28.2142 154.746 25.4399 154.746 20.4892C154.746 15.4958 152.436 12.743 147.964 12.743C143.47 12.743 141.224 15.5384 141.202 20.4892C141.202 25.4613 143.492 28.2142 147.964 28.2142ZM147.964 25.3547C145.439 25.3547 144.348 23.7543 144.348 20.4892C144.348 17.1816 145.46 15.5811 147.942 15.5811C150.446 15.5811 151.623 17.1816 151.601 20.4892C151.601 23.7754 150.489 25.3547 147.964 25.3547Z" fill="black"/>
                <path d="M174.665 15.5171C174.665 13.8313 173.617 12.8283 171.99 12.8283C170.664 12.8283 169.658 13.5539 169.166 15.2183L167.519 20.5745L166.427 24.437L165.379 20.5745L163.624 15.2183C163.132 13.6605 162.276 12.8283 160.778 12.8283C159.131 12.8283 158.104 13.8099 158.104 15.5171V26.6563C158.104 27.4886 158.703 28.1715 159.58 28.1715C160.457 28.1715 161.057 27.4886 161.057 26.6563L161.035 21.2788L160.885 15.5171L162.576 21.4069L164.373 26.6136C164.758 27.7659 165.486 28.1502 166.427 28.1502C167.305 28.1502 168.011 27.83 168.374 26.6563L170.086 21.4069L171.905 15.4744L171.734 21.2788V26.6563C171.734 27.4886 172.354 28.1715 173.21 28.1715C174.087 28.1715 174.686 27.4886 174.686 26.6563L174.665 15.5171Z" fill="black"/>
                <path d="M35.1052 22.5056C35.1052 22.8614 34.9651 23.2024 34.7156 23.4538C34.4661 23.7052 34.1277 23.8466 33.7748 23.8466C33.4219 23.8466 33.0835 23.7052 32.834 23.4538C32.5845 23.2024 32.4443 22.8614 32.4443 22.5056V10.5268C32.4443 10.1712 32.5845 9.83011 32.834 9.57866C33.0835 9.3272 33.4219 9.18593 33.7748 9.18593C34.1277 9.18593 34.4661 9.3272 34.7156 9.57866C34.9651 9.83011 35.1052 10.1712 35.1052 10.5268V22.5056ZM34.6433 30.8057C34.4675 30.9829 29.5197 35.1384 20.4488 35.1384C11.3779 35.1384 6.46306 31.0051 6.25417 30.8277C6.12252 30.7159 6.01407 30.5789 5.93506 30.4248C5.85604 30.2704 5.80799 30.1021 5.7937 29.9291C5.7794 29.7562 5.79911 29.5821 5.85172 29.4168C5.90431 29.2516 5.98877 29.0983 6.10023 28.966C6.32986 28.6983 6.65521 28.533 7.00536 28.5059C7.35551 28.4789 7.70204 28.5927 7.96939 28.822C8.04636 28.8775 12.4664 32.4899 20.4377 32.4899C28.4092 32.4899 32.8621 28.8553 32.9062 28.822C33.1766 28.5946 33.5242 28.4824 33.8752 28.5094C34.2264 28.5363 34.5532 28.7001 34.7863 28.966C35.0106 29.2299 35.1226 29.5723 35.0979 29.9187C35.0732 30.2652 34.9138 30.588 34.6544 30.8167L34.6433 30.8057ZM5.78138 10.5268C5.80126 10.17 5.96046 9.83573 6.22418 9.59695C6.48789 9.35815 6.83468 9.23429 7.18875 9.25242C7.51697 9.27121 7.82668 9.41181 8.05813 9.64713C8.2896 9.88245 8.42641 10.1958 8.44217 10.5268V22.4836C8.44217 22.8391 8.30201 23.1802 8.05252 23.4316C7.80301 23.6832 7.46462 23.8244 7.11178 23.8244C6.75893 23.8244 6.42054 23.6832 6.17104 23.4316C5.92155 23.1802 5.78138 22.8391 5.78138 22.4836V10.5268ZM12.4554 7.86725C12.4753 7.51051 12.6345 7.17621 12.8982 6.93743C13.1619 6.69863 13.5087 6.57477 13.8627 6.5929C14.191 6.61169 14.5007 6.7523 14.7321 6.98761C14.9636 7.22293 15.1004 7.53628 15.1162 7.86725V25.5974C15.1162 25.9531 14.976 26.2941 14.7265 26.5455C14.477 26.7969 14.1386 26.9381 13.7858 26.9381C13.4329 26.9381 13.0945 26.7969 12.845 26.5455C12.5955 26.2941 12.4554 25.9531 12.4554 25.5974V7.86725ZM19.1624 7.20237C19.1624 6.84676 19.3025 6.50571 19.552 6.25426C19.8016 6.0028 20.1399 5.86153 20.4927 5.86153C20.8456 5.86153 21.184 6.0028 21.4335 6.25426C21.683 6.50571 21.8231 6.84676 21.8231 7.20237V26.4839C21.8231 26.8395 21.683 27.1805 21.4335 27.4321C21.184 27.6835 20.8456 27.8247 20.4927 27.8247C20.1399 27.8247 19.8016 27.6835 19.552 27.4321C19.3025 27.1805 19.1624 26.8395 19.1624 26.4839V7.20237ZM25.7594 7.86725C25.7594 7.51165 25.8996 7.1706 26.1491 6.91913C26.3986 6.66768 26.737 6.52641 27.0897 6.52641C27.4426 6.52641 27.781 6.66768 28.0305 6.91913C28.28 7.1706 28.4202 7.51165 28.4202 7.86725V25.5974C28.4202 25.9531 28.28 26.2941 28.0305 26.5455C27.781 26.7969 27.4426 26.9381 27.0897 26.9381C26.737 26.9381 26.3986 26.7969 26.1491 26.5455C25.8996 26.2941 25.7594 25.9531 25.7594 25.5974V7.86725ZM35.468 0.553577H5.47351C4.81994 0.549199 4.17194 0.674789 3.56662 0.923156C2.96128 1.17152 2.41049 1.53779 1.94579 2.00099C1.4811 2.46418 1.11162 3.0152 0.858514 3.62252C0.605406 4.22982 0.473642 4.88147 0.470764 5.54018V35.4598C0.473642 36.1184 0.605406 36.7702 0.858514 37.3775C1.11162 37.9847 1.4811 38.5358 1.94579 38.999C2.41049 39.4621 2.96128 39.8285 3.56662 40.0768C4.17194 40.3252 4.81994 40.4507 5.47351 40.4463H35.468C36.1206 40.4507 36.7678 40.3256 37.3723 40.0778C37.977 39.8302 38.5273 39.4649 38.9918 39.0028C39.4564 38.5409 39.8261 37.9911 40.0798 37.385C40.3337 36.7791 40.4665 36.1286 40.4707 35.4709V5.54018C40.4679 4.88242 40.3365 4.23167 40.084 3.62509C39.8317 3.0185 39.4632 2.46798 38.9995 2.00492C38.536 1.54187 37.9866 1.17537 37.3825 0.926353C36.7785 0.67733 36.1316 0.550661 35.479 0.553577" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_2_8873">
                <rect width="174.444" height="40" fill="white" transform="translate(0.470764 0.5)"/>
                </clipPath>
                </defs>
                </svg>

                
                <svg width="101" height="41" viewBox="0 0 101 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_8883)">
                <path d="M100.915 0.5H0.915222V40.5H100.915V0.5Z" fill="#EC1D24"/>
                <path d="M97.9921 31.3461V37.4231H86.7614V3.5769H92.8383V31.3461H97.9921ZM49.9152 20.1923C49.3767 20.4231 48.9152 20.5 48.4537 20.5V9.65383C48.9152 9.65383 52.5306 9.80767 52.5306 15.0384C52.5306 17.7308 51.2998 19.5 49.9152 20.1923ZM32.069 26.8077L33.7614 12.3461L35.5306 26.8077H32.069ZM85.6844 9.73075V3.5769H68.5306L65.6844 24.1923L62.9152 3.5769H56.6844L57.3767 9.03844C56.6844 7.65383 54.146 3.5769 48.5306 3.5769H42.2998V33.5769L37.8383 3.5769H29.6844L24.9921 34.6538V3.5769H17.2998L14.5306 21.0384L11.7614 3.5769H3.99213V37.4231H10.069V21.1154L12.9152 37.4231H16.146L18.9152 21.1154V37.4231H30.6844L31.3767 32.1923H36.146L36.8383 37.4231H48.3767V26.4231L49.7614 26.1923L52.7614 37.4231H58.7614L54.9152 24.3461C56.8383 22.8846 59.0691 19.2692 58.4537 15.7308C58.4537 15.8077 62.069 37.5 62.069 37.5H69.2229L74.069 6.8846V37.4231H85.6075V31.3461H80.146V23.5769H85.6075V17.4231H80.146V9.73075H85.6844Z" fill="#FEFEFE"/>
                <path d="M0.915222 0.5H23.9921V40.5H0.915222V0.5Z" fill="#EC1D24"/>
                <path d="M25.146 37.4231V3.5769H17.2998L14.5306 21.0384L11.7614 3.5769H3.99213V37.4231H10.146V21.1154L12.9152 37.4231H16.146L18.9152 21.1154V37.4231H25.146Z" fill="#FEFEFE"/>
                </g>
                <defs>
                <clipPath id="clip0_2_8883">
                <rect width="100" height="40" fill="white" transform="translate(0.915222 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                

                <svg width="241" height="19" viewBox="0 0 241 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_8889)">
                <path d="M87.9384 18.7C81.831 18.7 77.8694 14.33 77.8694 9.78184V9.21813C77.8694 4.59284 81.831 0.299988 87.9384 0.299988C94.0458 0.299988 98.0413 4.59284 98.0413 9.21813V9.78184C98.0413 14.33 94.0798 18.7 87.9384 18.7ZM94.774 9.26631C94.774 5.95152 92.3466 3.00289 87.9384 3.00289C83.5302 3.00289 81.1416 5.95634 81.1416 9.26631V9.68066C81.1416 12.9955 83.569 16.0019 87.9384 16.0019C92.3077 16.0019 94.774 12.9955 94.774 9.68066V9.26631Z" fill="#3499CD"/>
                <path d="M18.9365 18.0303L16.6595 13.7904H6.53229L4.31362 18.0303H0.915222L10.2366 0.916687H12.931L22.4077 18.0303H18.9365ZM11.5037 4.25557L7.75086 11.4537H15.3876L11.5037 4.25557Z" fill="#010101"/>
                <path d="M37.1131 18.7C30.9231 18.7 28.0491 15.3563 28.0491 10.9141V0.916687H31.263V10.9622C31.263 14.1229 33.3603 16.0019 37.3461 16.0019C41.4388 16.0019 43.1186 14.1229 43.1186 10.9622V0.916687H46.3567V10.8996C46.3567 15.1539 43.638 18.7 37.1131 18.7Z" fill="#010101"/>
                <path d="M64.3777 3.59069V18.0447H61.1395V3.59069H53.6047V0.916687H71.9124V3.59069H64.3777Z" fill="#010101"/>
                <path d="M126.884 18.0303V4.48684L126.03 5.98042L118.806 18.0255H117.228L110.082 5.98042L109.227 4.48684V18.0303H106.067V0.916687H110.548L117.344 12.6582L118.15 14.1036L118.951 12.6582L125.685 0.916687H130.113V18.0303H126.884Z" fill="#010101"/>
                <path d="M154.591 18.0303L152.309 13.7904H142.192L139.992 18.0303H136.594L145.915 0.916687H148.605L158.057 18.0303H154.591ZM147.158 4.25557L143.405 11.4537H151.042L147.158 4.25557Z" fill="#010101"/>
                <path d="M171.107 3.59069V18.0447H167.874V3.59069H160.339V0.916687H178.642V3.59069H171.107Z" fill="#010101"/>
                <path d="M194.852 3.59069V18.0447H191.614V3.59069H184.079V0.916687H202.392V3.59069H194.852Z" fill="#010101"/>
                <path d="M210.364 18.0303V2.53554C211.655 2.53554 212.174 1.84175 212.174 0.916687H213.558V18.0303H210.364Z" fill="#010101"/>
                <path d="M238.895 5.74916C237.037 3.99249 234.572 3.00813 232.006 2.99808C227.399 2.99808 224.807 6.1346 224.807 9.3964V9.72884C224.807 12.9665 227.423 15.9923 232.239 15.9923C234.759 15.9452 237.17 14.9637 238.997 13.2412L240.939 15.2696C238.517 17.5102 235.318 18.7387 232.006 18.7C225.481 18.7 221.52 14.4842 221.52 9.85893V9.29522C221.52 4.66993 225.845 0.299988 232.162 0.299988C235.812 0.299988 239.128 1.81766 240.9 3.71596L238.895 5.74916Z" fill="#010101"/>
                <path d="M90.0747 6.25505C90.2166 6.34479 90.3389 6.46188 90.4343 6.59937C90.5298 6.73687 90.5965 6.89198 90.6304 7.05552C90.6644 7.21906 90.6649 7.38769 90.632 7.55144C90.5991 7.71518 90.5334 7.87071 90.4388 8.0088L87.4871 12.5474C87.3982 12.6857 87.2828 12.8054 87.1473 12.8994C87.0118 12.9934 86.859 13.06 86.6976 13.0954C86.5362 13.1307 86.3693 13.1341 86.2065 13.1054C86.0438 13.0767 85.8883 13.0164 85.749 12.928C85.4692 12.7458 85.2733 12.4612 85.2042 12.1362C85.1351 11.8113 85.1983 11.4724 85.3801 11.1935L88.3318 6.65494C88.5129 6.37597 88.7982 6.17971 89.1249 6.10925C89.4517 6.03879 89.7933 6.09989 90.0747 6.27914V6.25505Z" fill="#010101"/>
                </g>
                <defs>
                <clipPath id="clip0_2_8889">
                <rect width="240" height="18.4" fill="white" transform="translate(0.915222 0.299988)"/>
                </clipPath>
                </defs>
                </svg>


            </div>

        </motion.section>
        )}
        </InView>
    )
}
export default Carousel;