import React from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className="feature-card1-feature-card">
      <Icon rootClassName="icon-root-class-name"></Icon>
      <div className="feature-card1-container">
        <h2 className="feature-card1-text">{props.heading}</h2>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

FeatureCard1.defaultProps = {
  heading: '3D disain',
  text: 'PPVE Grupp 3D pakub 3D disainimist vastavalt kliendi vajadustele.',
}

FeatureCard1.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureCard1
