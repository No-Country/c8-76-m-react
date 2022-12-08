import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import s from "../../styles/HomeWallet.module.css";

function Home() {
  const { user } = useContext(DataContext);

  return (
    <>
      <div className={s.textCenter}>
        <section>
          <h2>Saldo:{user.saldo}</h2>
        </section>
        <section>
          <h3>Movimientos</h3>
          {/* <article className={s.article}>
            <p>Edesur</p>
            <div>
              <p>Pago de Edesur</p>
              <p>30/11/2022</p>
            </div>
            <p>$100</p>
          </article> */}
          {user.movimientos.map((movimiento) => (
            <article className={s.article} key={crypto.randomUUID()}>
              <p>{movimiento.nombre}</p>
              <div>
                <p>{movimiento.concepto}</p>
                <p>{movimiento.fecha}</p>
              </div>
              <p>${movimiento.monto}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
