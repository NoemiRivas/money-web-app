import React from "react";
//components
import FormRegister from "../components/forms/FormRegister";
import Logo from "../components/mui/home/Logo";
import BenefitCard from "../components/mui/BenefitCard";

export default function RegisterPage() {
  return (
    <section className=" max-w-[1400px] m-auto ">
      <Logo />
      <div className="  flex items-center justify-between  py-18 max-lg:flex-col max-lg:w-full max-sm:w-full max-sm:m-auto">
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="font-bold text-6xl text-sky-800  ">
            Tu ahorro empieza hoy
          </h2>
          <p className="text-neutral-500 text-md w-2/3 mb-8">
            💡Regístrate gratis y comienza a tomar el control de tus finanzas sin
            hojas de cálculo, solo claridad y progreso.
          </p>
          <BenefitCard  />
        </div>
        <div>

    
          <FormRegister />
        </div>
      </div>
    </section>
  );
}
