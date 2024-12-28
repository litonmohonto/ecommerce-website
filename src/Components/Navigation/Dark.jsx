import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const s = () => {
          const [open, setOpen] = useState(false);
          const toggle = () => {
                    setOpen(!open);
          }

          const [theem, setTheem] = useState(localStorage.getItem('theem') ? localStorage.getItem('theem') : 'light');

          const element = document.documentElement;

          useEffect(() => {
                    if (theem === 'dark') {
                              element.classList.add('dark');
                              localStorage.setItem('theem', 'dark')
                    }
                    else {
                              element.classList.remove('dark');
                              localStorage.setItem('theem', 'light')
                    }

          }, [theem])

          return (
                    <div onClick={() => setTheem(theem === "dark" ? "light" : "dark")} >
                              <button onClick={toggle} className='text-xl text-gray-600 dark:text-gray-400 cursor-pointer'>
                                        {open ? <IoSunnyOutline /> : <FaMoon />}
                              </button>
                    </div>
          )
}

export default s
