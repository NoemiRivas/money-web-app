import React from "react";
import { useState } from "react";
//icons
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

//material ui
import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//data
import { listMenuItems } from "./utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = () => (

      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}

      >
        <List>
          {listMenuItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              className={` capitalize  ${item.classes}`}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <Link to={item.link}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
   
  );

  return (
    <button>
      <MenuIcon
        fontSize="large"
        className="cursor-pointer text-cyan-800 "
        sx={{ size: 40 }}
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </button>
  );
}
