import LockIcon from "@mui/icons-material/Lock";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <section className="  bg-green-600  ">
        <div className="m-auto max-w-max flex justify-around items-center py-8">
          <div>
            <img src="./img-hero.png" alt="" />
          </div>
          <div className="text-white text-center w-1/5">
            <h2 className="font-bold text-5xl leading-14">
              Bienestar financiero para todos
            </h2>
            <p className="font-normal text-2xl my-4">
              MoneyUp la plataforma digital para organizar y controlar tus
              finanzas
            </p>
            <Link to={"/registrarse"}>
              <button className="w-40 cursor-pointer p-3 bg-sky-400 rounded-4xl text-xl text-center capitalize font-bold">
                inicia
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
      <section className=" m-auto max-w-[1200px]  py-16">
        <div>
          <h2 className="text-center text-3xl font-bold text-sky-900 leading-14">
            Encuentra una solucion con MoneyUp
          </h2>
          <div className="flex justify-around items-center mt-2">
            <div className=" w-2/9 flex flex-col items-center gap-4  text-center  ">
              <LockIcon sx={{ fontSize: 90 }} color="primary" />
              <p className="text-zinc-900 font-medium text-xl ">
                Almacena tu información de forma segura
              </p>
              <p>
                Mantén tu información segura con las funciones de seguridad
                digital más avanzadas. Protegemos tu información y te damos
                control total sobre quién la ve y cuándo.
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center gap-4 text-center ">
              <WidgetsRoundedIcon sx={{ fontSize: 90 }} color="primary" />
              <p className="text-zinc-900 font-medium text-xl ">
                Organiza tu información financiera
              </p>
              <p>
                Organiza toda tu información importante en un solo lugar para
                que puedas acceder a ella fácilmente cuando la necesites. Una
                plataforma sencilla de usar pensada para ti.{" "}
              </p>
            </div>
            <div className=" w-2/9 flex flex-col items-center gap-4 text-center ">
              <TrendingUpRoundedIcon sx={{ fontSize: 90 }} color="primary" />
              <p className="text-zinc-900 font-medium text-xl ">
                Alcanza tus objetivos
              </p>
              <p>
                Con MoneyUp, puedes establecer objetivos financieros y realizar
                un seguimiento de tu progreso. Te ayudamos a mantenerte motivado
                y en el camino correcto para alcanzar tus metas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
