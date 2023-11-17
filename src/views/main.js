import React from 'react'

import { Helmet } from 'react-helmet'

import './main.css'

const Main = (props) => {
  return (
    <div className="main-container">
      <Helmet>
        <title>Main - Dizzy Frilly Yak</title>
        <meta property="og:title" content="Main - Dizzy Frilly Yak" />
      </Helmet>
    </div>
  )
}

export default Main
