import React, { useContext } from "react";
//components
import Sidebar from "./mui/Sidebar";
import UserAvatar from "./mui/UserAvatar";
//icons
import SearchIcon from "@mui/icons-material/Search";
import { UserContext } from "../context/UserContext";
export default function NavBar() {
  
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }
  return (
    <nav className=" py-6 px-4 border-b-2 border-neutral-300">
      <ul className="flex justify-between">
        <li className="flex gap-6 items-center">
          <h1 className="font-medium text-3xl cursor-pointer max-md:hidden">
            MONEYTRACK
          </h1>
          <Sidebar />
        </li>

        <li className="flex gap-3 items-center">
          <div className="flex  items-center ">
            <input
              type="search"
              className="rounded-lg  focus:outline-none max-md:hidden
               "
              placeholder="Busca por aqui ..."
            />
            <SearchIcon className="cursor-pointer relative right-10" />{" "}
          </div>

          <UserAvatar />
        </li>
      </ul>
    </nav>
  );
}
