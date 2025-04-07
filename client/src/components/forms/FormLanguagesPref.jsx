import React from 'react'

export default function FormLanguagesPref() {
  return (
    <div>
    <form className="my-4 ">
      <h3 className='font-bold'>Idioma</h3>
      <select className="w-xl p-2 my-2 border-2 border-gray-300 rounded-md max-sm:w-[300px] md:w-[300px]">
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="fr">Frances</option>
        <option value="de">Aleman</option>
        <option value="it">Italiano</option>
        <option value="pt">Portugues</option>
        <option value="ru">Ruso</option>
      </select>

    </form>
  </div>
  )
}
