import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Dizzy Frilly Yak</title>
        <meta property="og:title" content="Page - Dizzy Frilly Yak" />
      </Helmet>
    </div>
  )
}

export default Page
