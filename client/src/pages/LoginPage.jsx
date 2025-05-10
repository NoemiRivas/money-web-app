import React from "react";
//component
import FormLogin from "../components/forms/FormLogin";
import Logo from "../components/mui/home/Logo";
//router
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="max-w-[1400px] m-auto">
      <section className=" flex flex-col items-center gap-4 bg-white  rounded-4xl">
        <Logo />
        <FormLogin />
        <span>
          <p className="text-neutral-800 my-4">
            ¿No tienes una cuenta?
            <Link to={"/registrarse"}>
              <span className="font-bold cursor-pointer"> Suscribirse</span>
            </Link>
          </p>
        </span>
      </section>
    </main>
  );
}
