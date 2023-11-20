import React from 'react'

import PropTypes from 'prop-types'

import UUUUusHeader from './uuu-uus-header'
import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <UUUUusHeader></UUUUusHeader>
    </div>
  )
}

Header.defaultProps = {
  Nav5: 'Blog',
  rootClassName: '',
  Nav3: 'Contact',
  Main: 'Esileht',
  Login: 'Login',
  About_us: 'Meist',
  Logo: '3DPRINT',
  Contact: 'Kontakt',
  Nav4: 'Team',
  Nav2: 'About Us',
  Register: 'Register',
  Nav1: 'Main',
}

Header.propTypes = {
  Nav5: PropTypes.string,
  rootClassName: PropTypes.string,
  Nav3: PropTypes.string,
  Main: PropTypes.string,
  Login: PropTypes.string,
  About_us: PropTypes.string,
  Logo: PropTypes.string,
  Contact: PropTypes.string,
  Nav4: PropTypes.string,
  Nav2: PropTypes.string,
  Register: PropTypes.string,
  Nav1: PropTypes.string,
}

export default Header
