import React from 'react'

function BenefitCard() {
    const BenefitCard =[
         {
      title: "Visualiza tus finanzas en segundos",
      description:
        "Gráficos simples que te muestran cuánto gastas y cuánto ahorras cada mes. Detecta hábitos y toma decisiones más inteligentes sin hojas de cálculo.",
      icon: "",
    },
    {
      title: "Crea metas de ahorro claras",
      description:
        "Define objetivos como un viaje o un fondo de emergencia. La app te muestra tu progreso y te motiva a seguir avanzando.",
      icon: "",
    },
    {
      title: "Recibe recordatorios útiles",
      description:
        "Activa recordatorios de ahorro y recibe consejos personalizados según tus movimientos. Tu app se adapta a ti.",
      icon: "",
    }
    ]
  return (
      <div className="py-20 m-auto max-w-3xl grid  md:grid-cols-3 gap-4">
        {
            BenefitCard.map((item, index) => (
              <div key={index} className="bg-cyan-600 rounded-xl shadow-md shadow-sky-700 p-6 text-left hover:shadow-lg transition">
                <h2 className=' text-yellow-200 font-bold text-2xl mb-6'>{item.title}</h2>
                <p className="text-white font-semibold text-md">{item.description}</p>
              </div>
            ))
        }
            
          </div>
  )
}

export default BenefitCard
