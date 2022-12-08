import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import s from "../../styles/HomeWallet.module.css";

function Home() {
  const { user } = useContext(DataContext);

  return (
    <>
      <div className={s.textCenter} data-aos="fade-up" data-aos-delay="400">
        <section>

          <h2>Saldo:{user.saldo}</h2>

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
