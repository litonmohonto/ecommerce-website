import React from 'react'

const Button = ({ text, bgColor, textColor, handler = () => { } }) => {
          return (
                    <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 divide-blue-200 rounded-full  relative z-10 px-4 py-1`}>
                              {text}
                    </button>
          )
}

export default Button
