
import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="  bg-stone-100 ">
      <div className="m-auto max-w-[1200px] flex justify-around items-center py-8">
        
        <div className="flex flex-col items-center gap-4 text-sky-900 text-center w-2/5">
          <h2 className="font-bold text-3xl leading-10">
            Sin control, no hay progreso.
          </h2>

          <p className=" font-normal text-xl my-4">
            Monitorear tus finanzas es el primer paso hacia la libertad
            financiera. Saber en qué gastas, cuánto ahorras y cómo evoluciona tu
            dinero te permite tomar decisiones mas acertadas evitando deudas
            innecesarias y alcanzando tus metas económicas más rápido.
          </p>

          <Link to={"/registrarse"}>
            <button className="w-40 text-white cursor-pointer p-3 bg-sky-400 rounded-4xl text-xl text-center capitalize font-bold">
              Comienza hoy
            </button>
          </Link>
        </div>
        <div>
          <img src="./img-hero.png" alt="" />
        </div>
        
      </div>
    </section>
  );
}

export default Main;
