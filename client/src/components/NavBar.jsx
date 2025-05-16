import React, { useContext } from "react";
//components
import Sidebar from "./mui/Sidebar";
import UserAvatar from "./mui/UserAvatar";
//icons
import SearchIcon from "@mui/icons-material/Search";
import { useUser } from "@clerk/clerk-react";
import { Container } from "@mui/material";

export default function NavBar() {
  const { user } = useUser();

  if (!user) {
    return null;
  }
  return (
    <Container>
      <nav className=" py-6 px-4 border-b-1 border-neutral-300">
        <ul className="flex justify-between items-center">
          <li className="flex   gap-6 items-center">
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
              <SearchIcon className="cursor-pointer relative right-10 text-cyan-800" />
            </div>

            <UserAvatar />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
