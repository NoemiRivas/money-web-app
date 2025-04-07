import React from "react";

export default function FormMoneyPreferencs() {
  return (
    <div>
      <form className="my-4 ">
        <h3 className="font-bold">Moneda actual</h3>
        <select className="p-2 w-xl my-2 border-2 border-gray-300 rounded-md max-sm:w-[300px] md:w-[300px]">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="mxn">MXN</option>
        </select>
      </form>
    </div>
  );
}
