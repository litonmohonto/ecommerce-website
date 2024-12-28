import React from 'react'
import { IoMdClose } from "react-icons/io";
import Button from '../Shared/Button';

const Popup = ({ orderPopup, toggleOrderPopup }) => {
          return (
                    <div >
                              {
                                        orderPopup && (

                                                  <div className='w-screen h-screen bg-black/40 fixed top-0 left-0'>
                                                            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2  p-4 -translate-y-1/2 rounded-md shadow-sm bg-white dark:text-white dark:bg-gray-900 duration-200 '>
                                                                      <div className='flex justify-between items-center text-xl'>
                                                                                <h1 >Order Now</h1>
                                                                                <IoMdClose onClick={toggleOrderPopup} />
                                                                      </div>
                                                                      <div className='mt-4 text-center'>
                                                                                <input type="text" placeholder='Name' className='input' />
                                                                                <input type="email" placeholder='Email' className='input' />
                                                                                <input type="text" placeholder='Address' className='input' />

                                                                                <Button
                                                                                          text={'Send Me'}
                                                                                          bgColor={'bg-primary'}
                                                                                          textColor={'text-white'}
                                                                                />
                                                                      </div>

                                                            </div>
                                                  </div>
                                        )
                              }

                    </div>
          )
}

export default Popup
