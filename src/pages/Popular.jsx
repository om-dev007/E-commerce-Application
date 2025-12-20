import React from 'react'
import Cards from '../components/Cards'
import { data } from '../store/data'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

const Popular = () => {
    return (
        <div className='py-10 px-10 bg-linear-to-r from-[#0f2f2e] via-[#2f3a33] to-[#8a633c]'>
            <div className='px-5 sm:px-15'>
                <h1 className='text-3xl text-orange-500'>TRENDING NOW</h1>
            </div>

            <div className="block md:hidden py-10 px-4">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={20}
                    slidesPerView={1.15}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
                    freeMode={true}
                    grabCursor={true}
                    className="swiper-linear"
                >

                    {data.map(item => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <Cards data={item} />
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className='hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
                {data.map(item => (
                    <React.Fragment key={item.id}>
                        <Link to={`/product/${item.id}`}>
                            <Cards data={item} />
                        </Link>
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}

export default Popular