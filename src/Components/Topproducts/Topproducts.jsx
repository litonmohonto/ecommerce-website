import React from 'react'
import img1 from '../../assets/shirt/shirt.png'
import img2 from '../../assets/shirt/shirt2.png'
import img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from "react-icons/fa";
import Button from '../Shared/Button';
const best = [
          {
                    id: 1,
                    img: img1,
                    title: 'casul Wear',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequuntur.',
                    aosdelay: 0

          },
          {
                    id: 2,
                    img: img2,
                    title: 'prined Shirt',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequuntur.',
                    aosdelay: 200
          },
          {
                    id: 3,
                    img: img3,
                    title: 'women shirt',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequuntur.',
                    aosdelay: 400
          }
]

const Topproducts = ({ toggleOrderPopup }) => {
          return (
                    <div className=' py-14 '>
                              <div className='container'>
                                        <div className='text-center sm:text-left mb-32  space-y-2'>
                                                  <p data-aos='fade-right' data-aos-delay="100" className='text-sm text-primary capitalize'>top selling Products for you</p>
                                                  <h1 data-aos='fade-right' data-aos-delay="200" className='text-3xl font-bold capitalize'>Best Products</h1>
                                                  <p data-aos='fade-right' data-aos-delay="300" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat saepe iste optio, possimus nisi eligendi fugit molestiae ratione libero.</p>
                                        </div>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                                                  {
                                                            best.map((data) => {
                                                                      return (
                                                                                <div key={data.id}>
                                                                                          <div data-aos="zoom-in" className=' mt-10 sm:0 px-2 py-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80  dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group  max-w-[300px]  '>
                                                                                                    <div className='h-[220px]'>
                                                                                                              <img src={data.img} alt="" className=' max-w-[240px] block mx-auto transform -translate-y-24 group-hover:scale-105 duration-300 drop-shadow-md' />
                                                                                                    </div>

                                                                                                    <div className='text-center space-y-2'>
                                                                                                              <div className='flex justify-center gap-4'>
                                                                                                                        <FaStar className='text-primary' />
                                                                                                                        <FaStar className='text-primary' />
                                                                                                                        <FaStar className='text-primary' />
                                                                                                                        <FaStar className='text-primary' />
                                                                                                                        <FaStar className='text-primary' />
                                                                                                              </div>
                                                                                                              <h1 className='text-xl font-bold'>{data.title}</h1>
                                                                                                              <p className='text-gray-500'>{data.description}</p>
                                                                                                              <div onClick={toggleOrderPopup}>
                                                                                                                        <Button
                                                                                                                                  text={'Order by'}
                                                                                                                                  bgColor={'bg-primary'}
                                                                                                                                  textColor={'text-white'}

                                                                                                                        />
                                                                                                              </div>

                                                                                                    </div>

                                                                                          </div>

                                                                                </div>
                                                                      )

                                                            })
                                                  }

                                        </div>
                              </div>

                    </div>
          )
}

export default Topproducts
