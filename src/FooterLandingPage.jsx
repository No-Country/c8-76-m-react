import React from 'react'
import style from './styles/FooterLandingPage.module.css'
import logo from "./assets/logoappwallet.svg"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export const FooterLandingPage = () => {
  return (
    <div className={style.general}>
        <br />
        <br />

        <div className={` col-12 ${style.containerLogo} `}>
            <div ><img src={logo} alt="" /></div>  
        </div>    
<br /><br />

        <div className={` col-12  ${style.containerHorizontal} `}>
          <div>
            <h5 className='col-3'>nearBank</h5>
            <ul>
              <li>Sobre nosostros</li>

            </ul>
          </div>

          <div>
            <h5>Productos</h5>
            <ul>
              <li>Cartera digital</li>

            </ul>
          </div>

          <div>
            <h5>Exploración</h5>
            <ul>
              <li>Comunidad</li>

            </ul>
          </div>

          <div>
            <h5>Viaja también</h5>
            <ul>
              <li>Auxilio de emergencia FGTS</li>

              
            </ul>
          </div>

        </div>    


        
        <div className={` col-12  ${style.containerHorizontal}`}>
        <div>
            <h5>Transparencia</h5>
            <ul>
              <li>Politica de provacidad</li>

            </ul>
          </div>

          <div>
            <h5>Ouvidoria</h5>
            <ul>
              <li>08000 887 0463</li>

            </ul>
          </div>

          <div>
            <h5>Nuestros clientes</h5>
            <ul>
              <li>0800 608 6236</li>

            </ul>
          </div>

          <div>
            <h5>Nuestras Agencias</h5>
            <ul>
              <li>Brasil</li>

              
            </ul>
          </div>
        </div>  
        <br /><br /><br /><br />
    
    </div>
  )
}
