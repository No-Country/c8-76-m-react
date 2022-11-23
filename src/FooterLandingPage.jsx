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
              <li>Carreras</li>
              <li>Preguntas frecuentes</li>
              <li>Contacto</li>
              <li>Empresa</li>
              <li>Investigadores</li>
            </ul>
          </div>

          <div>
            <h5>Productos</h5>
            <ul>
              <li>Cartera digital</li>
              <li>Tarjeta de crédito</li>
              <li>Prestamo</li>
              <li>Conta PJ</li>
              <li>Tarjeta de Debito</li>
              <li>Investigadores</li>
            </ul>
          </div>

          <div>
            <h5>Exploración</h5>
            <ul>
              <li>Comunidad</li>
              <li>Blog</li>
              <li>bear InvestNews</li>
              <li>Newsletter</li>
              <li>North America</li>
              <li>Paises de Europa</li>
            </ul>
          </div>

          <div>
            <h5>Viaja también</h5>
            <ul>
              <li>Auxilio de emergencia FGTS</li>
              <li>Todo sobre Pix</li>
              <li>Formadores</li>
              
            </ul>
          </div>

        </div>    


        
        <div className={` col-12  ${style.containerHorizontal}`}>
        <div>
            <h5>Transparencia</h5>
            <ul>
              <li>Politica de provacidad</li>
              <li>Politica de confianza</li>
              <li>Politica de Seguridad</li>
              <li>Contratos</li>
              <li>Relatores Fincancieros</li>
              <li>Etica y seguridad</li>
              <li>Datos abiertos</li>
              <li>SRC</li>
              <li>Convención de boletos</li>
            </ul>
          </div>

          <div>
            <h5>Ouvidoria</h5>
            <ul>
              <li>08000 887 0463</li>
              <li>ouvidoria@nearBank.com.br</li>
              <li>Atención de 9 a 18h</li>
            </ul>
          </div>

          <div>
            <h5>Nuestros clientes</h5>
            <ul>
              <li>0800 608 6236</li>
              <li>meajuda@nearbank.com.br</li>
              <li>Atención 24h</li>
            </ul>
          </div>

          <div>
            <h5>Nuestras Agencias</h5>
            <h6>Somos un banco digital <br />
             mas también contamos  <br />
             con algunas agencias <br />
              en esta lista de ciudades</h6>
            <ul>
              <li>Brasil</li>
              <li>Sao Pablo</li>
              <li>Rio de Janeiro</li>
              <li>Florida</li>
              <li>Puerto Alegre</li>
              <li>Ver mas</li>
              
            </ul>
          </div>
        </div>  
    
    </div>
  )
}
