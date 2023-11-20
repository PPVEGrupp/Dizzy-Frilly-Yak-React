import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AppComponent from '../components/component'
import './teenused.css'

const Teenused = (props) => {
  return (
    <div className="teenused-container">
      <Helmet>
        <title>Teenused - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Teenused - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="teenused-features">
        <h1 className="teenused-text">
          <span>PPVE Grupp pakub kõrgekvaliteedilisi inseneriteenuseid</span>
          <br></br>
        </h1>
        <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
      </div>
      <form className="teenused-form-kysi-pakkumist">
        <div className="teenused-tulp">
          <span>Text</span>
          <input type="text" placeholder="placeholder" className="input" />
          <span>Text</span>
          <input type="text" placeholder="placeholder" className="input" />
        </div>
      </form>
    </div>
  )
}

export default Teenused
