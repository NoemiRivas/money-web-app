import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//components
import ButtonForm from "../buttons/ButtonForm";
import {useForm} from "react-hook-form"
import { useAuth } from "../../context/UserContext";

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signUp, isAuthenticated, error} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
       if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async(values)=>{
    signUp(values)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className=" w-[400px] p-4 py-10 rounded-3xl shadow-xl  bg-sky-600 shadow-stone-600  flex flex-col gap-2  mx-2 ">
       
        
          
        <div className="box-label">
          <label>Nombre </label>
          <input
            type="text"
            name="fullname"

             {...register("fullname", { required: true })}
          />
           {errors.fullname && (
                <p className="text-red-700">la password es requerida</p>
              )}
        </div>
        <div className="box-label">
          <label>email</label>
          <input
            type="email"
            name="email"

             {...register("email", { required: true })}
             
          />
           {errors.email && (
                <p className="text-red-700">la password es requerida</p>
              )}
        </div>
        <div className="box-label">
          <label>password</label>
          <input
            type="password"
            name="password"

             {...register("password", { required: true })}
          />
           {errors.password && (
                <p className="text-red-700">la password es requerida</p>
              )}
        </div>
        <ButtonForm />
      
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
