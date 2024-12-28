import React from 'react'
import lgo from "../../assets/website/logo.png"
import Dark from '../Navigation/Dark'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const navlinks = [
          {
                    id: 1,
                    name: 'Home',
                    link: 'home',
          },
          {
                    id: 2,
                    name: 'Top Raied',
                    link: 'top-raised',
          },
          {
                    id: 3,
                    name: 'Kisd Wear',
                    link: 'kisdwear',
          },
          {
                    id: 4,
                    name: 'Mems Wear',
                    link: 'mems-wear',
          },
          {
                    id: 5,
                    name: 'Electronics',
                    link: 'electronics',
          }
]

const Navigation = ({ toggleOrderPopup }) => {
          return (
                    <nav className='shadow-md'>
                              <div className=' bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
                                        <div className='bg-primary/40 py-2'>
                                                  <div className=' container flex justify-between items-center'>
                                                            <div>
                                                                      <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                                                                                <img src={lgo} alt="photo" className='w-10' />Shopsy

                                                                      </a>
                                                            </div>
                                                            <div className='flex gap-6 items-center'>
                                                                      <div className='group relative hidden sm:block'>
                                                                                <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border dark:bg-gray-800 border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
                                                                                <div className='top-1/2 right-3 absolute text-2xl text-gray-500 group-hover:text-primary -translate-y-1/2 font-semibold'>
                                                                                          <CiSearch />
                                                                                </div>
                                                                      </div>
                                                                      <button onClick={toggleOrderPopup} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                                                                                <span className='hidden group-hover:block transition-all duration-200  capitalize'>order</span>
                                                                                <SlBasket className='text-xl text-white drop-shadow-sm cursor-pointer' />
                                                                      </button>
                                                                      <div>
                                                                                <Dark />
                                                                      </div>
                                                            </div>


                                                  </div>

                                        </div>
                              </div>
                              <div className='hidden  sm:flex justify-center dark:bg-gray-800 dark:text-white  duration-200'>
                                        <ul className=' flex items-center gap-4 py-2'>
                                                  {
                                                            navlinks.map((data) => {
                                                                      return (
                                                                                <div key={data.id}>
                                                                                          <li>
                                                                                                    <a href={data.link} className='hover:text-primary duration-200  px-4  inline-block'> {data.name}</a>
                                                                                          </li>

                                                                                </div>
                                                                      )
                                                            })
                                                  }
                                        </ul>
                              </div>

                    </nav>
          )
}

export default Navigation
