import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './kontakt.css'

const Kontakt = (props) => {
  return (
    <div className="kontakt-container">
      <Helmet>
        <title>Kontakt - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Kontakt - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name1"></UUUUusHeader>
      <div className="kontakt-container1">
        <span className="kontakt-text">
          <span>PPVE Grupp OÜ</span>
          <br></br>
        </span>
        <span className="kontakt-text3">
          <span>E-mail: 3d@printimine.eu</span>
          <br></br>
          <span>Reg. kood: 16862123</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Kontakt
