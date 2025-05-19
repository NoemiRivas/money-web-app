import React, { useContext } from "react";
import { Link } from "react-router-dom";
//material ui
import { Avatar } from "@mui/material/";
import { Stack } from "@mui/material/";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

import { useClerk, useUser } from "@clerk/clerk-react";

export default function UserAvatar() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  //open and close the menu ---- MUI
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //logout
  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  //user avatar
  const userAvatarName = user.fullName.charAt(0).toUpperCase();

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" spacing={2}>
          <Avatar>{userAvatarName} </Avatar>
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-button"
      >
        <Link to={"/perfil"}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
