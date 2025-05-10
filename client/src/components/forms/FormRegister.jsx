import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//components
import ButtonForm from "../buttons/ButtonForm";
//context
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
//api call
import { registerUser } from "../../services/userService";

export default function FormRegister() {
  const { updateUser } = useContext(UserContext);

  const [error, setErrors] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email) {
      setErrors("Porfavor introduce una email valida o existente");
      return;
    }
    if (!input.password) {
      setErrors("Porfavor introduce una password valida");
      return;
    }

    try {
      const response = await registerUser(input);
      const { token, user } = response.data;
      setErrors("");
      if (token) {
        localStorage.setItem("token", token);
        await updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrors(error.response.data.message);
      } else {
        setErrors("Algo ha salido mal. Porfavor intenta de nuevo");
      }
    }
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=" w-[400px] p-4 py-10 rounded-3xl shadow-xl  bg-sky-600 shadow-stone-600  flex flex-col gap-2  mx-2 ">
        <div className="box-label">
          <label>Nombre </label>
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
          />
        </div>
        <div className="box-label">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
          />
        </div>
        <div className="box-label">
          <label>password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
          />
        </div>
        <ButtonForm />
        {error && (
          <p className="text-red-600 text-sm text-center my-2"> {error} </p>
        )}
        <span>
          <p className="text-neutral-200 my-4 text-center">
            ¿Ya tienes una cuenta?
            <Link to={"/login"}>
              <span className="font-bold cursor-pointer"> Login</span>
            </Link>
          </p>
        </span>
      </div>
    </form>
  );
}
