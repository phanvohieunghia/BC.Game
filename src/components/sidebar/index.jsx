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
      <Item path="4" name="Live Casino" />
      <Item path="5" name="Promotions" cClass=" promotion" />
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
          <div className="wrapper">
            <Icons.Lock height={'12'} width={'12'} />
          </div>
          <img
            src={require('assets/img/sidebar/menu-icon13-3.png')}
            alt="error png"
          />
        </div>
        <div className="child locked">
          <div className="wrapper">
            <Icons.Lock height={'12'} width={'12'} />
          </div>
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
      <Item path="7" name="Affiliate" />
      <Item path="8" name="VIP Club" cClass=" vipclub" />
      <Item path="9" name="Forum" />
      <Item path="10" name="Provably Fair" />
      <div className="line"></div>
      <Item path="11" name="Favorite Games" />
      <Item path="12" name="Recent Play" cClass=" recentplay" />
      <div className="language">
        <span>Language Options</span>
        <div className="select">
          <span>English</span>
          <span>
            <Icons.AngleRight height={'16'} />
          </span>
        </div>
        <div className="theme">
          <div className="left">
            <div className="item active">
              <Icons.Star height={'20'} />
            </div>
            <div className="item">
              <Icons.Star height={'20'} />
            </div>
          </div>
          <div className="right">
            <div className="title">Darkmode</div>
            <div className="state">Currently</div>
          </div>
        </div>
      </div>
      <div className="live">
        <div className="wrapper">
          <div className="icon">
            <Icons.Star height={'20'} />
          </div>
          <span>Live Support</span>
        </div>
      </div>
      <div className="socialmedia">
        <span className="title">Social Media</span>
        <div className="content">
          <div className="item">
            <a>
              <Icons.Telegram height={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Medium height={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Github height={'20'} width={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Twitter height={'20'} width={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Facebook height={'20'} width={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Discord height={'20'} width={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.Instagram height={'20'} />
            </a>
          </div>
          <div className="item">
            <a>
              <Icons.BTC height={'20'} width={'20'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
const Item = ({ name, path, cClass = '' }) => (
  <div className={`item${cClass}`}>
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
