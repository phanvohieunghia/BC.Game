import React from 'react'

import './style.scss'
import Icons from 'assets/icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="item home">
        <div className="wrapper">
          <img
            src={require('assets/img/sidebar/menu-icon1.png')}
            alt="error png"
          />
          <span>Home</span>
        </div>
      </a>
      <div className="item">
        <div className="wrapper">
          <img
            src={require('assets/img/sidebar/menu-icon2.png')}
            alt="error png"
          />
          <span>BC Originals</span>
        </div>
        <div className="arrow">
          <Icons.Star height={'14'} />
        </div>
      </div>
      <Item path="3" name="Slots" />
      <Item path="4" name="Live Casio" />
      <div className="item promotion">
        <div className="wrapper">
          <img
            src={require('assets/img/sidebar/menu-icon5.png')}
            alt="error png"
          />
          <span>Promotions</span>
        </div>
      </div>
      <div className="item2">
        <div className="child">
          <img
            src={require('assets/img/sidebar/menu-icon13-1.png')}
            alt="error png"
          />
        </div>
        <div className="child spins">
          <img
            src={require('assets/img/sidebar/menu-icon13-21.png')}
            alt="error png"
          />
          <img
            className="spin"
            src={require('assets/img/sidebar/menu-icon13-22.png')}
            alt="error png"
          />
          <img
            src={require('assets/img/sidebar/menu-icon13-23.png')}
            alt="error png"
          />
        </div>
        <div className="child locked">
          <img
            src={require('assets/img/sidebar/menu-icon13-3.png')}
            alt="error png"
          />
        </div>
        <div className="child">
          <img
            src={require('assets/img/sidebar/menu-icon13-4.png')}
            alt="error png"
          />
        </div>
        <div className="child tag">
          <Icons.Tag height={'34'} />
        </div>
        <div className="child coins">
          <img
            className="base"
            src={require('assets/img/sidebar/menu-icon13-63.png')}
            alt="error png"
          />
          <img
            className="light"
            src={require('assets/img/sidebar/menu-icon13-61.png')}
            alt="error png"
          />
          <img
            className="coin"
            src={require('assets/img/sidebar/menu-icon13-62.png')}
            alt="error png"
          />
        </div>
      </div>
      <Item path="6" name="Lottery" />
      <div className="line"></div>
      <Item path="7" name="Affiliate" />
      <div className="item vipclub">
        <div className="wrapper">
          <img
            src={require('assets/img/sidebar/menu-icon5.png')}
            alt="error png"
          />
          <span>VIP Club</span>
        </div>
      </div>
      <Item path="9" name="Forum" />
      <Item path="10" name="Probly Fair" />
      <Item path="11" name="Favorite Game" />
      <Item path="12" name="Recent Play" />
      <div className="line"></div>
    </div>
  )
}
const Item = ({ name, path }) => (
  <div className="item">
    <div className="wrapper">
      <img
        src={require(`assets/img/sidebar/menu-icon${path}.png`)}
        alt="error png"
      />
      <span>{name}</span>
    </div>
  </div>
)

export default Sidebar
