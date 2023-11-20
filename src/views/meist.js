import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './meist.css'

const Meist = (props) => {
  return (
    <div className="meist-container">
      <Helmet>
        <title>Meist - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Meist - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name2"></UUUUusHeader>
    </div>
  )
}

export default Meist
