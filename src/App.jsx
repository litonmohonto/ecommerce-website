import React, { useEffect, useState } from 'react'
// aos link
import Aos from 'aos'
import "aos/dist/aos.css"

import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Topproducts from './Components/Topproducts/Topproducts'
import Popup from './Components/Popup/Popup'
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner2/Banner2'
import Footer from './Components/Footer/Footer'

const App = () => {
          React.useEffect(() => {
                    Aos.init({
                              duration: 800,
                              easing: 'ease-in-out',
                              delay: 100,
                              offset: 100,
                              once: false,

                    })
          }, []);

          const [orderPopup, setOrderPopup] = useState(false);
          const toggleOrderPopup = () => {
                    setOrderPopup(!orderPopup);
          }
          return (
                    <div className='dark:bg-gray-950 dark:text-white duration-200'>
                              <Navigation toggleOrderPopup={toggleOrderPopup} />
                              <Home toggleOrderPopup={toggleOrderPopup} />
                              <Products />
                              <Topproducts toggleOrderPopup={toggleOrderPopup} />
                              <Banner />
                              <Banner2 />
                              <Footer />
                              <Popup orderPopup={orderPopup} toggleOrderPopup={toggleOrderPopup} />

                    </div>
          )
}

export default App
