import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import './kontaktvana.css'

const Kontaktvana = (props) => {
  return (
    <div className="kontaktvana-container">
      <Helmet>
        <title>Kontaktvana - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Kontaktvana - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name1"></UUUUusHeader>
      <div className="kontaktvana-container1">
        <span className="kontaktvana-text">
          <span>PPVE Grupp OÜ</span>
          <br></br>
        </span>
        <span className="kontaktvana-text3">
          <span>E-mail: 3d@printimine.eu</span>
          <br></br>
          <span>Reg. kood: 16862123</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Kontaktvana
