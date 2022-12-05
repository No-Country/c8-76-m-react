import React from "react";
import s from "../../styles/HomeWallet.module.css"

function Home() {
  return(
    <>
    <div className={s.textCenter}>
        <section>
           <h2 className="py-5">
            Saldo: $1000
           </h2>
        </section>
        <section> 
       <h3>Movimientos</h3>
        <article className={s.article}>
          <p>Edesur</p>
            <div>
              <p>Pago de Edesur</p>
              <p>30/11/2022</p>
            </div>
               <p>$100</p>
        </article>
       </section>
      </div>
    </>
    );
}

export default Home;
