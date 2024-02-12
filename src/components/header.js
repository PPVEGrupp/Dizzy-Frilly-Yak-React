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
  nav5: 'Blog',
  rootClassName: '',
  nav3: 'Contact',
  main: 'Esileht',
  login: 'Login',
  aboutUs: 'Meist',
  logo: '3DPRINT',
  contact: 'Kontakt',
  nav4: 'Team',
  nav2: 'About Us',
  register: 'Register',
  nav1: 'Main',
}

Header.propTypes = {
  nav5: PropTypes.string,
  rootClassName: PropTypes.string,
  nav3: PropTypes.string,
  main: PropTypes.string,
  login: PropTypes.string,
  aboutUs: PropTypes.string,
  logo: PropTypes.string,
  contact: PropTypes.string,
  nav4: PropTypes.string,
  nav2: PropTypes.string,
  register: PropTypes.string,
  nav1: PropTypes.string,
}

export default Header
