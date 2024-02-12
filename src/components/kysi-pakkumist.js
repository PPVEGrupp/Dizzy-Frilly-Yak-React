import React from 'react'

import PropTypes from 'prop-types'

import './kysi-pakkumist.css'

const KysiPakkumist = (props) => {
  return (
    <div className="kysi-pakkumist-kysi-pakkumist">
      <form className="kysi-pakkumist-form">
        <div className="kysi-pakkumist-container">
          <span className="kysi-pakkumist-text">{props.text}</span>
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="input"
          />
        </div>
      </form>
    </div>
  )
}

KysiPakkumist.defaultProps = {
  textinputPlaceholder: 'placeholder',
  text: 'Text',
}

KysiPakkumist.propTypes = {
  textinputPlaceholder: PropTypes.string,
  text: PropTypes.string,
}

export default KysiPakkumist
