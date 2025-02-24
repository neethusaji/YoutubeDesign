import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from "@mui/material";
import { Home, Subscriptions, VideoLibrary, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import YouTubeLogo from "../Assets/youtube-logo.png";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate(); 

  return (
    <Drawer
      variant="permanent"
      sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, backgroundColor: "black", color: "white" } }}
    >
      <Toolbar sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
        <img src={YouTubeLogo} alt="YouTube Logo" style={{ height: "70px", marginBottom: "10px" }} />
      </Toolbar>
      <List>
        {[
          { text: "Home", icon: <Home />, onClick: () => navigate("/") }, 
          { text: "Subscriptions", icon: <Subscriptions /> },
          { text: "Library", icon: <VideoLibrary /> },
          { text: "History", icon: <History /> },
        ].map((item) => (
          <ListItem button key={item.text} onClick={item.onClick}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
