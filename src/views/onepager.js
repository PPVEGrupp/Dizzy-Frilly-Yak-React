import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import './onepager.css'

const Onepager = (props) => {
  return (
    <div className="onepager-container">
      <Helmet>
        <title>3D Printimine</title>
        <meta
          name="description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
        <meta property="og:title" content="3D Printimine" />
        <meta
          property="og:description"
          content="3D printimine ja disain kvaliteetsete ja kiirete tulemustega"
        />
      </Helmet>
      <div id="Esileht" className="onepager-esileht">
        <header data-role="Header" className="onepager-header">
          <Link to="/" className="onepager-navlink">
            <img
              alt="logo"
              src="/horizontal_black-1500h.png"
              className="onepager-image"
            />
          </Link>
          <div className="onepager-nav">
            <NavigationLinks2 rootClassName="rootClassName17"></NavigationLinks2>
          </div>
          <div data-role="BurgerMenu" className="onepager-burger-menu">
            <svg viewBox="0 0 1024 1024" className="onepager-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="onepager-mobile-menu">
            <div className="onepager-nav1">
              <NavigationLinks2 rootClassName="rootClassName18"></NavigationLinks2>
            </div>
            <img
              src="/horizontal_black-1500h.png"
              alt="image"
              className="onepager-image1"
            />
            <div className="onepager-container01">
              <div
                data-role="CloseMobileMenu"
                className="onepager-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="onepager-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
        </header>
        <div className="onepager-container02">
          <div className="onepager-container03">
            <div className="onepager-container04">
              <span className="onepager-text">
                <span>Kvaliteetsed ja läbimõeldud</span>
                <br></br>
                <span>lahendused.</span>
              </span>
              <div className="onepager-container05">
                <a href="#Teenused" className="onepager-link button">
                  <span>
                    <span>Teenused</span>
                    <br></br>
                  </span>
                </a>
                <a href="#Kontakt" className="onepager-link1 button">
                  <span>
                    <span>Kontakt</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
            <img
              alt="image"
              src="/3d-printer-300h.png"
              className="onepager-image2"
            />
          </div>
        </div>
      </div>
      <div id="Teenused" className="onepager-teenused">
        <div className="onepager-container06">
          <span className="onepager-text10">
            <span>Meie pakutavad teenused</span>
            <br></br>
            <br></br>
          </span>
          <div className="onepager-printimine">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTcwMTM4MTY5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
              className="onepager-image3"
            />
            <div className="onepager-container07">
              <span className="onepager-text14">3D Printimine</span>
              <span className="onepager-text15">
                Meie 3D printimise teenus on just nii ja nii hea ja me oskame
                teha just seda.
              </span>
            </div>
          </div>
          <div className="onepager-mudelleerimine">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwxfDF8YWxsfDIxfHx8fHx8Mnx8MTcwMTM4MTY5OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
              className="onepager-image4"
            />
            <div className="onepager-container08">
              <span className="onepager-text16">3D Modelleerimine</span>
              <span className="onepager-text17">
                Me oleme selles just nii osavad ja kasutame selleks seda ja seda
                tarkvara.
              </span>
            </div>
          </div>
          <div className="onepager-prototpimine">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1682685796014-2f342188a635?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwxfDF8YWxsfDI2fHx8fHx8Mnx8MTcwMTM4NTYzMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
              className="onepager-image5"
            />
            <div className="onepager-container09">
              <span className="onepager-text18">
                <span>Prototüüpimine</span>
                <br></br>
              </span>
              <span className="onepager-text21">
                See on selline äge asi mida teeks kogu aeg kui keegi raha
                maksaks. Varem oleme teinud just seda ja seda.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="Kontakt" className="onepager-kontakt">
        <div className="onepager-container10">
          <span className="onepager-text22">
            <span>Kirjuta meile julgelt</span>
            <br></br>
            <span>ja bla bla bla :)</span>
            <br></br>
            <br></br>
            <span>3d@printimine.eu</span>
            <br></br>
            <br></br>
            <span>+372 ooga booga</span>
            <br></br>
          </span>
          <form
            action="https://formsubmit.co/9b4bf3647bda31cef96041f47918b94c"
            method="POST"
            enctype="multipart/form-data"
            autoComplete="on"
            className="onepager-form"
          >
            <div className="onepager-container11">
              <input
                type="text"
                name="eesnimi"
                required
                placeholder="Eesnimi"
                autoComplete="given-name"
                className="onepager-input input"
              />
              <input
                type="text"
                name="perenimi"
                placeholder="Perenimi"
                autoComplete="family-name"
                className="onepager-textinput input"
              />
            </div>
            <div className="onepager-container12">
              <input
                type="email"
                name="email"
                required
                placeholder="E-post"
                autoComplete="email"
                className="onepager-input1 input"
              />
              <input
                type="tel"
                name="telefon"
                placeholder="Mobiil"
                autoComplete="tel"
                className="onepager-textinput1 input"
              />
            </div>
            <textarea
              name="tekst"
              placeholder="Sõnum..."
              autoComplete="off"
              className="onepager-textarea textarea"
            ></textarea>
            <input
              type="file"
              name="manus"
              placeholder="placeholder"
              className="onepager-input2 input"
            />
            <button
              name="saada"
              type="submit"
              className="onepager-button button"
            >
              <span>
                <span>Saada</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="onepager-container13">
        <span className="onepager-text36">
          <span className="onepager-text37">PPVE Grupp OÜ</span>
          <br className="onepager-text38"></br>
          <span className="onepager-text39">Reg. nr. 16862123</span>
          <span> </span>
          <br></br>
        </span>
        <span className="onepager-text42">© PPVE Grupp OÜ 2023</span>
      </div>
    </div>
  )
}

export default Onepager
