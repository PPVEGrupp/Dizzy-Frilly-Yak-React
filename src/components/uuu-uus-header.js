import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './uuu-uus-header.css'

const UUUUusHeader = (props) => {
  return (
    <div className={`uuu-uus-header-container ${props.rootClassName} `}>
      <div className="uuu-uus-header-container1">
        <nav className="uuu-uus-header-links">
          <Link to="/" className="uuu-uus-header-main">
            {props.Main1}
          </Link>
          <Link to="/teenused" className="uuu-uus-header-main1">
            <span className="uuu-uus-header-text">Teenused</span>
            <br className=""></br>
          </Link>
          <Link to="/meist" className="uuu-uus-header-about-us">
            {props.About_us1}
          </Link>
          <Link to="/kontakt" className="uuu-uus-header-contact">
            {props.Contact1}
          </Link>
        </nav>
      </div>
    </div>
  )
}

UUUUusHeader.defaultProps = {
  Main1: 'Esileht',
  About_us1: 'Meist',
  Contact1: 'Kontakt',
  rootClassName: '',
}

UUUUusHeader.propTypes = {
  Main1: PropTypes.string,
  About_us1: PropTypes.string,
  Contact1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default UUUUusHeader
