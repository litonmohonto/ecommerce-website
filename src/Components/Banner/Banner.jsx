import React from 'react'
import imgs from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
          return (
                    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-6'>
                              <div className='container'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6'>
                                                  <div data-aos='zoom-in'>
                                                            <img src={imgs} alt="" className='max-w-[400px] h-[350px] w-full mx-auto object-center drop-shadow-[10PX_10px_12px_rgba(0,0,0,1)]' />
                                                  </div>
                                                  <div className='flex flex-col gap-6 sm:pt-0 justify-center mt-12 sm:mt-0'>
                                                            <h1 data-aos="fade-up"
                                                                      data-aos-delay="100" className='text-3xl lg:text-4xl font-bold'>Winter sale up to 50% off</h1>
                                                            <p data-aos="fade-up"
                                                                      data-aos-delay="200" className='text-sm tracking-wide leading-4 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam maxime vitae obcaecati quae et aliquid dolore consectetur perspiciatis neque accusamus!</p>
                                                            <div data-aos="fade-up"
                                                                      data-aos-delay="300" className='flex items-center gap-4 '>
                                                                      <GrSecure className='text-4xl h-12 w-12 rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 inline-block p-4' />
                                                                      <h2>Ouality Products</h2>
                                                            </div>
                                                            <div data-aos="fade-up"
                                                                      data-aos-delay="400" className='flex items-center gap-4 text-xl'>
                                                                      <CiDeliveryTruck className='text-4xl h-12 w-12 rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 inline-block p-4' />
                                                                      <h2>Fast Delivery</h2>
                                                            </div>
                                                            <div data-aos="fade-up"
                                                                      data-aos-delay="500" className='flex items-center gap-4 text-xl'>
                                                                      <MdPayments className='text-4xl h-12 w-12 rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 inline-block p-4' />
                                                                      <h2>Easy Pyment method</h2>
                                                            </div>
                                                            <div data-aos="fade-up"
                                                                      data-aos-delay="500" className='flex items-center gap-4 text-xl'>
                                                                      <MdLocalOffer className='text-4xl h-12 w-12 rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 inline-block p-4' />
                                                                      <h2>Get Offer</h2>
                                                            </div>
                                                  </div>

                                        </div>

                              </div>


                    </div>
          )
}

export default Banner
