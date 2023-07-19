"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import placeholder from './../../../public/placeholder.jpeg';
import image11 from './../../../public/graphic design/1/1.png';
import image12 from './../../../public/graphic design/1/2.png';
import image13 from './../../../public/graphic design/1/3.png';
import image14 from './../../../public/graphic design/1/4.png';
import image2 from './../../../public/graphic design/2.png';
import image3 from './../../../public/graphic design/3.png';
import image4 from './../../../public/graphic design/4.png';
import image5 from './../../../public/graphic design/5.png';
import image6 from './../../../public/graphic design/6.png';

import { Pagination } from 'swiper/modules';

export default function GraphicDesign() {
    return (
        <>
            <main className="bg-black px-30">
                <section>
                    <div>
                        <h3 className="text-3xl py-1 text-red-400 lg:flex justify-center items-center">Graphic Design</h3>
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-10 py-10 ">
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row lg:flex-wrap'>
                            <div className='overflow-hidden flex-1'>
                                <Swiper pagination={true} modules={[Pagination]} className='h-full'>
                                    <SwiperSlide>
                                        <Image src={image11} objectFit='cover'  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={image12} objectFit='cover'  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={image13} objectFit='cover'  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={image14} objectFit='cover'  />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>
                                Discover why small business owners and e-commerce merchants leverage SEO content writing to drive website traffic. This article highlights three main benefits: reaching an audience with high intent, cost-effectiveness compared to paid ads, and the ability to connect with customers. Unleash the potential of SEO content writing to boost your business and achieve success in the digital landscape.
                            </h4>
                        </div>
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row'>
                            <Image src={image2} width={'100%'} height={'100%'} objectFit='cover' className='overflow-hidden flex-1'></Image>
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>
Deliver exceptional customer service in your e-commerce store by responding promptly, offering various communication channels, maintaining clarity in responses, providing detailed product information, and personalizing the customer experience.</h4>
                        </div>
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row'>
                            <Image src={image3} width={'100%'} height={'100%'} objectFit='cover' className='overflow-hidden flex-1' />
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>Maximize your brand's presence on Facebook by incorporating sharing buttons, sharing engaging visual content, utilizing lookalike audiences, encouraging fan posts, posting regularly, engaging with comments and messages, integrating Messenger into your CRM, sharing humorous content, and utilizing interactive content.</h4>
                        </div>
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row'>
                            <Image src={image4} width={'100%'} height={'100%'} objectFit='cover' className='overflow-hidden flex-1' />
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>Choose the best social media platforms for your e-commerce business, such as Facebook, Instagram, TikTok, and Twitter, to reach new audiences, showcase products, and drive sales.</h4>
                        </div>
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row'>
                            <Image src={image5} width={'100%'} height={'100%'} objectFit='cover' className='overflow-hidden flex-1' />
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>With regards to chatbot interactions, it is crucial to prioritize data privacy and security, which can be achieved through transparent data handling practices, robust encryption measures, and empowering users with control over their personal information.</h4>
                        </div>
                        <div className='border-dashed border-8 border-amber-500 py-5 px-5 basis-1/3 flex-1 flex flex-col lg:flex-row'>
                            <Image src={image6} width={'100%'} height={'100%'} objectFit='cover' className='overflow-hidden flex-1' />
                            <h4 className='flex-1 py-4 lg:px-4  text-gray-300 lg:text-xl dark:text-gray-300'>Enhance user satisfaction in chatbot interactions by incorporating a personal touch, utilizing user data to customize responses and cater to individual needs, while ensuring responsible and transparent use of data.</h4>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}