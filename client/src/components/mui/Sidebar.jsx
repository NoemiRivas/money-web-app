import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listMenuItems } from "./utils";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = () => (
    <Box sx={{ width: 250, padding:1 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {listMenuItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            className={`capitalize`}
            sx={{marginBottom:2 }}
          >
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon sx={{ color: "white" }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <MenuIcon
        fontSize="large"
       className="cursor-pointer text-cyan-800"
        onClick={toggleDrawer(true)}
      />
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
            backgroundColor: "#0092b8", 
              color: "white",
              width: 250,
            },
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}
