import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="component1-icon">
        <path
          d="M384 464c0 26.4-21.6 48-48 48h-96c-26.4 0-48-21.6-48-48v-96c0-26.4 21.6-48 48-48h96c26.4 0 48 21.6 48 48v96z"
          className=""
        ></path>
        <path
          d="M704 464c0 26.4-21.6 48-48 48h-96c-26.4 0-48-21.6-48-48v-96c0-26.4 21.6-48 48-48h96c26.4 0 48 21.6 48 48v96z"
          className=""
        ></path>
        <path
          d="M384 784c0 26.4-21.6 48-48 48h-96c-26.4 0-48-21.6-48-48v-96c0-26.4 21.6-48 48-48h96c26.4 0 48 21.6 48 48v96z"
          className=""
        ></path>
        <path
          d="M704 784c0 26.4-21.6 48-48 48h-96c-26.4 0-48-21.6-48-48v-96c0-26.4 21.6-48 48-48h96c26.4 0 48 21.6 48 48v96z"
          className=""
        ></path>
        <path
          d="M912.082 160l111.918-111.916v-48.084h-48.082l-111.918 111.916-111.918-111.916h-48.082v48.084l111.918 111.916-111.918 111.916v48.084h48.082l111.918-111.916 111.918 111.916h48.082v-48.084z"
          className=""
        ></path>
        <path d="M0 768h64v128h-64v-128z" className=""></path>
        <path d="M0 576h64v128h-64v-128z" className=""></path>
        <path d="M832 448h64v128h-64v-128z" className=""></path>
        <path d="M832 832h64v128h-64v-128z" className=""></path>
        <path d="M832 640h64v128h-64v-128z" className=""></path>
        <path d="M0 384h64v128h-64v-128z" className=""></path>
        <path d="M0 192h64v128h-64v-128z" className=""></path>
        <path d="M512 128h128v64h-128v-64z" className=""></path>
        <path d="M320 128h128v64h-128v-64z" className=""></path>
        <path d="M128 128h128v64h-128v-64z" className=""></path>
        <path d="M448 960h128v64h-128v-64z" className=""></path>
        <path d="M640 960h128v64h-128v-64z" className=""></path>
        <path d="M256 960h128v64h-128v-64z" className=""></path>
        <path d="M64 960h128v64h-128v-64z" className=""></path>
      </svg>
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
