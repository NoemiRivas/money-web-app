import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonForm from "../buttons/ButtonForm";
import { UserContext } from "../../context/UserContext";
import { loginUser } from "../../services/userService";

export default function FormLogin() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState(null);

  const {updateUser}= useContext(UserContext)


  //API call
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
      const response = await loginUser(input)
      setErrors("");
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user)
        navigate("/dashboard");
      }
  
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrors(error.response.data.message);
      } else {
        setErrors("Algo ha salido mal. Porfavor intenata de nuevo");
      }
    }
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-[400px] p-4  rounded-3xl bg-white shadow-xl"
    >
      <div className="box-label ">
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={changeEventHandler}
        />
      </div>
      <div className="box-label  ">
        <label>password:</label>
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
    </form>
  );
}
