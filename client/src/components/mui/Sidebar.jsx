import React from "react";
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

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {listMenuItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            className={`capitalize ${item.classes|| ""}`}
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
        className="cursor-pointer"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </button>
  );
}
