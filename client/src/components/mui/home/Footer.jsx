import React from "react";

function Footer() {
  return (
    <footer className="bg-sky-900 py-8">
      <div className="m-auto max-w-[1200px]">
        <div className=" text-white flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl leading-10">MONEYUP </h1>
            <p className="font-light text-sm">
              Todos los derechos reservados. 2024 Copyrigth ©
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center w-2/5">
            <ul>
              <li>Preguntas frecuentes</li>
              <li>Politica de privacidad</li>
              <li>Terminos y condiciones</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
