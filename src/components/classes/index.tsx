import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SelectedPage } from '@/shared/types'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import slide4 from "@/assets/slide4.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section id="classes" className='min-h-full mx-[50px] my-[50px]'>
            <h1>Classes</h1>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={slide1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default index