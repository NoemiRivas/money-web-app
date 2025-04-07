import React, { useState } from "react";

export default function FormSettings({ user, modifyUser }) {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email) {
      alert("Porfavor introduce una email valida o existente");
      return;
    }
    if (!input.password) {
      alert("Porfavor introduce una password valida");
      return;
    }
    try {
      await modifyUser(input);
      alert("Usuario modificado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form className="my-4 m-auto" onSubmit={submitHandler}>
      <div className="flex flex-col gap-2 mb-3">
        <h3 className="text-3xl">Perfil</h3>
        <p className="text-sm font-light text-neutral-400">
          Modifica tu informacion personal
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre"
          onChange={changeEventHandler}
          name="fullname"
          className="w-full p-2 my-2 border-2 border-gray-300 border-md"
        />
        <input
          type="email"
          placeholder="Correo"
          onChange={changeEventHandler}
          name="email"
          className="w-full p-2 my-2 border-2 border-gray-300  border-md "
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={changeEventHandler}
          name="password"
          className="w-full p-2 my-2 border-2 border-gray-300  border-md"
        />

        <button type="submit" className="save-button">
          Guardar Perfil
        </button>
      </div>
    </form>
  );
}
