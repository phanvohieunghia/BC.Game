import React from 'react'

import './style.scss'
import Slider from 'components/slider'
import { SwiperSlide } from 'swiper/react'

const Banner = () => {
  return (
    <div className="banner">
      <Slider customItem={CustomBanner} />
    </div>
  )
}
const CustomBanner = () => {
  return (
    <>
      <SwiperSlide>
        <div className="item">
          <a className="half">
            <img
              src={require('assets/img/main/banner/banner1.png')}
              alt="error png"
            />
          </a>
          <a>
            <img
              src={require('assets/img/main/banner/banner2.webp')}
              alt="error png"
            />
          </a>
          <a>
            <img
              src={require('assets/img/main/banner/banner3.png')}
              alt="error png"
            />
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <a className="half">
            <img
              src={require('assets/img/main/banner/banner1.png')}
              alt="error png"
            />
          </a>
          <a>
            <img
              src={require('assets/img/main/banner/banner2.webp')}
              alt="error png"
            />
          </a>
          <a>
            <img
              src={require('assets/img/main/banner/banner3.png')}
              alt="error png"
            />
          </a>
        </div>
      </SwiperSlide>
    </>
  )
}

export default Banner
