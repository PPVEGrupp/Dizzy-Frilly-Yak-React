import React from 'react'

import { Helmet } from 'react-helmet'

import UUUUusHeader from '../components/uuu-uus-header'
import AppComponent from '../components/component'
import './teenusedvana.css'

const Teenusedvana = (props) => {
  return (
    <div className="teenusedvana-container">
      <Helmet>
        <title>Teenusedvana - 3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="Teenusedvana - 3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <UUUUusHeader rootClassName="uuu-uus-header-root-class-name3"></UUUUusHeader>
      <div className="teenusedvana-features">
        <h1 className="teenusedvana-text">
          <span>PPVE Grupp pakub kõrgekvaliteedilisi inseneriteenuseid</span>
          <br></br>
        </h1>
        <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
      </div>
      <form className="teenusedvana-form-kysi-pakkumist">
        <div className="teenusedvana-tulp">
          <span>Text</span>
          <input type="text" placeholder="placeholder" className="input" />
          <span>Text</span>
          <input type="text" placeholder="placeholder" className="input" />
        </div>
      </form>
    </div>
  )
}

export default Teenusedvana
