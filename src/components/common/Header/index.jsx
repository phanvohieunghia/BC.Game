import React from 'react'

import './style.scss'
import Icons from 'assets/icons'

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <a className="item active">
          <Icons.Star height={'25'} />
          Casino
        </a>
        <a className="item">
          <Icons.Star height={'25'} />
          Casino
        </a>
      </div>
      <div className="right">
        <div className="left">
          <a className="img">
            <img src={require('assets/img/header/logo.webp')} alt="error png" />
          </a>
          <div className="search">
            <Icons.Star height={'20'} />
            <input
              type="text"
              placeholder="Game name | Provider | Category Tag"
            />
          </div>
        </div>
        <div className="right">
          <div className="signin">Sign in</div>
          <div className="signup">Sign up</div>
          <div className="comment">
            <Icons.Star height={'20'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
