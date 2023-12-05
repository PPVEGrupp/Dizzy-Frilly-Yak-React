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
              <div className="onepager-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="onepager-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="onepager-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="onepager-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks2 rootClassName="rootClassName18"></NavigationLinks2>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="onepager-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="onepager-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="onepager-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
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
