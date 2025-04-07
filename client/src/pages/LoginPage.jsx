import React from "react";
//component
import FormLogin from "../components/forms/FormLogin";
//router
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="form-layout">
      <section className="max-w-[800px]  m-auto flex flex-col items-center gap-4 bg-white p-14 rounded-4xl">
        <h2>Login</h2>
        <FormLogin />
        <span>
          <p className="text-neutral-800">
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
