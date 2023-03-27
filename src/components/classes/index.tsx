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
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section id="classes" className='min-h-full mx-[50px] my-[50px]'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
                <h1 className='text-center font-bold font-size text-4xl'>Classes</h1>
                <p className='py-8 px-7'>
                    Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. 
                    Et leo duis ut diam quam nulla porttitor. Pretium fusce id velit ut tortor pretium viverra suspendisse. 
                    Nibh venenatis cras sed felis eget velit aliquet sagittis. In massa tempor nec feugiat nisl pretium fusce id velit. 
                    Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Laoreet sit amet cursus sit amet. 
                    Commodo quis imperdiet massa tincidunt nunc pulvinar. Lectus arcu bibendum at varius vel pharetra vel. 
                    Gravida quis blandit turpis cursus in hac habitasse platea. Et tortor consequat id porta nibh venenatis cras sed felis. 
                    Sed id semper risus in. Adipiscing tristique risus nec feugiat in fermentum posuere urna. A diam sollicitudin tempor id. 
                    Duis ut diam quam nulla. Posuere urna nec tincidunt praesent. Ornare arcu dui vivamus arcu felis bibendum. 
                    Euismod lacinia at quis risus sed vulputate. Diam quis enim lobortis scelerisque fermentum dui faucibus in. 
                    Nunc sed id semper risus in hendrerit. 
                </p>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            // when window width is >= 640px
                            1060: {
                                slidesPerView: 2
                            }
                          }}
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
            </motion.div>
        </section>
    )
}

export default index