import React from 'react'

import PropTypes from 'prop-types'

import './uuu-uus-header.css'

const UUUUusHeader = (props) => {
  return (
    <div className={`uuu-uus-header-container ${props.rootClassName} `}>
      <div className="uuu-uus-header-container1">
        <nav className="uuu-uus-header-links">
          <span className="uuu-uus-header-main">{props.main1}</span>
          <span className="uuu-uus-header-main1">
            <span className="uuu-uus-header-text">Teenused</span>
            <br className=""></br>
          </span>
          <span className="uuu-uus-header-about-us">{props.aboutUs1}</span>
          <span className="uuu-uus-header-contact">{props.contact1}</span>
        </nav>
      </div>
    </div>
  )
}

UUUUusHeader.defaultProps = {
  aboutUs1: 'Meist',
  main1: 'Esileht',
  rootClassName: '',
  contact1: 'Kontakt',
}

UUUUusHeader.propTypes = {
  aboutUs1: PropTypes.string,
  main1: PropTypes.string,
  rootClassName: PropTypes.string,
  contact1: PropTypes.string,
}

export default UUUUusHeader
