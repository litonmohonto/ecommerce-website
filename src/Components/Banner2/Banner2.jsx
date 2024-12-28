import React from 'react'
import img from '../../assets/website/orange-pattern.jpg'

const banner = {
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          height: '100%',
          widht: '100%'

}

const Banner2 = () => {
          return (
                    <div className='py-14'>
                              <div data-aos='zoom-in' style={banner} className='bg-gray-100 dark:bg-gray-800 text-white '>
                                        <div className='container backdrop-blur-sm py-10'>
                                                  <div className='space-y-6 max-w-xl mx-auto'>
                                                            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notfied about Now products</h1>
                                                            <input data-aos="fade-up"
                                                                      type="text" placeholder='Ender Your Email' className='w-full p-3' />
                                                  </div>

                                        </div>



                              </div>
                    </div>
          )
}

export default Banner2
