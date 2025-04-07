import React, { useContext } from "react";
import FormSettings from "../components/forms/FormSettings";
import FormMoneyPreferencs from "../components/forms/FormMoneyPreferencs";
import FormLanguagesPref from "../components/forms/FormLanguagesPref";
import BasicSwitch from "../components/mui/BasicSwitch";
//mui
import { Divider } from "@mui/material";
import { UserContext } from "../context/UserContext";

export default function SettingsPage() {
 const{user, modifyUser} =useContext(UserContext)
  return (
    <section className="my-4 pb-6 m-auto w-11/12 flex flex-col gap-6">
      <div className="py-6 px-5 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold">Settings</h1>
        <FormSettings user={user} modifyUser={modifyUser}  />
      </div>
      <div className="py-6 px-5 bg-white shadow-md rounded-md">
        <h3 className=" text-3xl">Preferencias</h3>
        <p className="text-sm font-light text-neutral-400 my-3">
          Mejora la experiencia de usuario
        </p>
        {
          /**
           * ADD THE FUNCTIONALITY TO CHANGE CURRENCY AND LANGUAGE
           * * 1. Create a state to hold the selected currency and language
           * * 2. Create a function to handle the button click and set the selected currency and language
           */
        }
        <div className="flex items-center justify-between gap-2 mb-3 max-md:flex-col max-sm:flex-col">
          <FormMoneyPreferencs />
          <FormLanguagesPref />
        </div>
        <Divider />
        {
          /**
           * ADD THE FUNCTIONALITY TO CHANGE NOTIFICATIONS
           *
           */
        }
        <div className=" m-auto">
          <div className="flex items-center justify-between my-4">
            <div>
              <h4 className="font-bold">Notificaciones</h4>
              <p className=" text-md font-light text-neutral-600 mt-3">Configura las notificaciones para mantenerte actualizado</p>
            </div>
            <BasicSwitch />
          </div>
          <button className="save-button">Guardar preferencias</button>
        </div>
      </div>
    </section>
  );
}
