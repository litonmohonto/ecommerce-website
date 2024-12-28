import React from 'react'
import img from '../../assets/hero/sale.png'
import img1 from '../../assets/hero/women.png'
import img2 from '../../assets/hero/shopping.png'
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Shared/Button';

const hero = [
          {
                    id: 1,
                    img: img,
                    title: "70% Off  all women's wear",
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolor similique omnis porro accusantium ad, dolorum dolore fugiat facere inventore? ',
          },
          {
                    id: 2,
                    img: img1,
                    title: "50% Off  all women's wear",
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolor similique omnis porro accusantium ad, dolorum dolore fugiat facere inventore? ',
          }
          , {
                    id: 3,
                    img: img2,
                    title: "30% Off  all Product sale",
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolor similique omnis porro accusantium ad, dolorum dolore fugiat facere inventore? ',
          }
]

const Home = ({ toggleOrderPopup }) => {
          let settings = {
                    dost: false,
                    arrows: false,
                    Infinity: true,
                    speed: 800,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplayspeed: 5000,
                    cssEase: 'ease-in-out',
                    pauseOnHover: false,
                    pauseOnFocus: true,
          };
          return (
                    <div className=' relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
                              <div className='w-[700px] h-[700px] rounded-3xl absolute rotate-45 bg-primary/40 -top-1/2 right-4 -translate-x-1/2'></div>
                              <div className='container pb-4 sm:pb-0'>
                                        <Slider {...settings}>
                                                  {
                                                            hero.map((data) => {
                                                                      return (
                                                                                <div key={data.id}>
                                                                                          <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 p-6'>
                                                                                                    <div className='order-2 sm:order-1 space-y-4 '>
                                                                                                              <h1 data-aos="fade-up" data-aos-delay="200" className='text-5xl sm:text-6xl  lg:text-7xl font-bold capitalize'>{data.title}</h1>
                                                                                                              <p data-aos="fade-up" data-aos-delay="300" className='text-sm'>{data.description} </p>
                                                                                                              <div data-aos="fade-up" data-aos-delay="400">
                                                                                                                        <div onClick={toggleOrderPopup}>

                                                                                                                                  <Button
                                                                                                                                            bgColor={"bg-primary"}
                                                                                                                                            textColor={'text-white'}
                                                                                                                                            text={"order Now"}
                                                                                                                                  />
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                                    <div className='order-1 sm:order-2'>
                                                                                                              <img data-aos='zoom-in-up' src={data.img} alt="photo" className='w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-center mx-auto' />
                                                                                                    </div>
                                                                                          </div>


                                                                                </div>
                                                                      )
                                                            })}
                                        </Slider>



                              </div>
                    </div>


          )
}

export default Home
