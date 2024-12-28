import React from 'react'
import { FaRegStar } from "react-icons/fa";
import img1 from '../../assets/women/women.png'
import img2 from '../../assets/women/women2.jpg'
import img3 from '../../assets/women/women3.jpg'
import img4 from '../../assets/women/women4.jpg'

const image = [
          {
                    id: 1,
                    img: img1,
                    title: 'women Ethinc',
                    color: 'white',
                    rating: 5.0,
                    aosdelay: 0
          },
          {
                    id: 2,
                    img: img2,
                    title: 'women Ethinc',
                    color: 'white',
                    rating: 4.1,
                    aosdelay: 200
          },
          {
                    id: 3,
                    img: img3,
                    title: 'women Ethinc',
                    color: 'white',
                    rating: 4.2,
                    aosdelay: 400
          },
          {
                    id: 4,
                    img: img4,
                    title: 'women Ethinc',
                    color: 'white',
                    rating: 4.4,
                    aosdelay: 600
          },
          {
                    id: 5,
                    img: img2,
                    title: 'women Ethinc',
                    color: 'white',
                    rating: 4.7,
                    aosdelay: 800

          }
]

const Products = () => {
          return (
                    <div className='mt-14 mb-12 py-12'>
                              <div className='container'>
                                        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
                                                  <p data-aos="fade-up"
                                                            data-aos-delay="100"
                                                            className='text-sm text-primary capitalize'>top selling Products for you</p>
                                                  <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold'>Products</h1>
                                                  <p data-aos="fade-up" data-aos-delay="300" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat saepe iste optio, possimus nisi eligendi fugit molestiae ratione libero.</p>
                                        </div>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 place-items-center'>
                                                  {
                                                            image.map((data) => {
                                                                      return (
                                                                                <div data-aos="fade-up" data-aos-delay={data.aosdelay} key={data.id}>
                                                                                          <div>
                                                                                                    <img src={data.img} alt="photp" className='h-[250px] w-[200px] object-center rounded-md mx-auto' />

                                                                                                    <div>
                                                                                                              <h3 className='font-semibold'> {data.title}</h3>
                                                                                                              <p className='text-sm text-gray-600'>{data.color}</p>
                                                                                                              <div className='flex items-center gap-2'>
                                                                                                                        <FaRegStar className='text-yellow-400' />
                                                                                                                        <span>{data.rating}</span>
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

export default Products
