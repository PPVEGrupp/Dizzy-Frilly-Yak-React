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
            placeholder={props.textinput_placeholder}
            className="input"
          />
        </div>
      </form>
    </div>
  )
}

KysiPakkumist.defaultProps = {
  textinput_placeholder: 'placeholder',
  text: 'Text',
}

KysiPakkumist.propTypes = {
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default KysiPakkumist
