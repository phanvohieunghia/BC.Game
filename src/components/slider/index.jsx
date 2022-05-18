import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.scss'

// import required modules
import { Pagination, Navigation } from 'swiper'

const Slider = (props) => {
  const { customItem } = props
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {customItem()}
    </Swiper>
  )
}
export default Slider
