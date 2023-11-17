import React from 'react'

import PropTypes from 'prop-types'

import Component1 from './component1'
import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <Component1
        rootClassName="component1-root-class-name"
        className=""
      ></Component1>
      <div className="feature-card2-container">
        <h2 className="feature-card2-text">{props.title}</h2>
        <span className="">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  description: 'PPVE Grupp 3D prindib nii prototüüpe kui ka seeriatellimusi.',
  rootClassName: '',
  title: '3D printimine',
}

FeatureCard2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard2
