import React from "react";
//components
import FormRegister from "../components/forms/FormRegister";


export default function RegisterPage() {
  return (
    <main className="form-layout-2">
      <section className="flex items-center gap-10 m-auto w-6xl bg-white p-14 rounded-4xl max-lg:flex-col max-lg:w-full max-sm:w-full max-sm:m-auto">
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-medium text-neutral-600">
            Bienvenid@ a MoneyTrack
          </span>
          <p className="font-medium text-3xl text-neutral-800  ">
            Con MoneyTrack, podrás gestionar tus ingresos, gastos y ahorros en
            un solo lugar. Regístrate hoy y comienza a:
          </p>
          ✅ Organizar tus finanzas de forma clara y visual. ✅ Establecer metas
          de ahorro y seguirlas paso a paso. ✅ Analizar tus hábitos de gasto
          con reporte detallados ✅ Tomar decisiones inteligentes para mejorar
          tu salud financiera.
        </div>
        <div>
      
          
          <h3 className="text-4xl mb-4 font-medium text-neutral-600 text-center">
            Registrarse
          </h3>
          <FormRegister />
        </div>
      </section>
    </main>
  );
}
