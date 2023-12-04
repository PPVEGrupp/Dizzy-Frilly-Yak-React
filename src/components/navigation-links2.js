import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <a href="#Esileht" className="navigation-links2-link">
        {props.text2}
      </a>
      <a href="#Teenused" className="navigation-links2-link1">
        {props.text3}
      </a>
      <a href="#Kontakt" className="navigation-links2-link2">
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text1: '',
  text: 'About',
  rootClassName: '',
  text2: 'Esileht',
  text3: 'Teenused',
  text4: 'Kontakt',
}

NavigationLinks2.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks2
