import React from 'react'
import Cards from '../components/Cards'
import { data } from '../store/data'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FreeMode } from 'swiper/modules'

const Popular = () => {

    return (
        <div className='py-10 bg-linear-to-r from-[#0f2f2e] via-[#2f3a33] to-[#8a633c] '>
            <div className='px-22'>
                <h1 className='text-4xl text-[#c08327f2] font-bold'>POPULAR IN TRENDING</h1>
            </div>
            {/* <div>
                <hr className='w-50 bg-gray-900  h-1 rounded-2xl flex justify-self-center font-extrabold' />
            </div> */}
            <div className="block md:hidden py-10 px-4">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={20}
                    slidesPerView={1.15}
                    loop={true}

                    // 🔥 AUTOPLAY
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}

                    // 🧈 SMOOTHNESS
                    speed={4500}
                    freeMode={true}
                    freeModeMomentum={true}
                    freeModeMomentumRatio={0.9}

                    grabCursor={true}
                    className="ease-linear!"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <Cards data={item} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20 '>
                {data.map((item) => {
                    return <Link key={item.id} to={`/product/${item.id}`}>
                        <Cards data={item} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Popular