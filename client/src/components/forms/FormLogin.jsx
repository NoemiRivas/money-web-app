import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//components
import ButtonForm from "../buttons/ButtonForm";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/UserContext";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, isAuthenticated, error: registerError } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signIn(values);
  });

  return (
    <form onSubmit={onSubmit} className="w-[400px] p-6 rounded-3xl bg-cyan-600 shadow-stone-600 shadow-xl ">
  
      
      <div className="box-label-login ">
        <label>email:</label>
        <input
          type="email"
          name="email"
             {...register("email", { required: true })}
        />
             {errors.email && (
                <p className="text-red-700">la password es requerida</p>
              )}
      </div>
      <div className="box-label-login  ">
        <label>password:</label>
        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          className="mb-8"
        />
        <ButtonForm />
            {errors.password && (
                <p className="text-red-700">la password es requerida</p>
              )}
      </div>
    </form>
  );
}
