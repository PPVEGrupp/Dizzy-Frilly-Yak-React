import React from 'react'

import PropTypes from 'prop-types'

import './uuu-uus-header.css'

const UUUUusHeader = (props) => {
  return (
    <div className={`uuu-uus-header-container ${props.rootClassName} `}>
      <div className="uuu-uus-header-container1">
        <nav className="uuu-uus-header-links">
          <span className="uuu-uus-header-main">{props.Main1}</span>
          <span className="uuu-uus-header-main1">
            <span className="uuu-uus-header-text">Teenused</span>
            <br className=""></br>
          </span>
          <span className="uuu-uus-header-about-us">{props.About_us1}</span>
          <span className="uuu-uus-header-contact">{props.Contact1}</span>
        </nav>
      </div>
    </div>
  )
}

UUUUusHeader.defaultProps = {
  About_us1: 'Meist',
  Main1: 'Esileht',
  rootClassName: '',
  Contact1: 'Kontakt',
}

UUUUusHeader.propTypes = {
  About_us1: PropTypes.string,
  Main1: PropTypes.string,
  rootClassName: PropTypes.string,
  Contact1: PropTypes.string,
}

export default UUUUusHeader
