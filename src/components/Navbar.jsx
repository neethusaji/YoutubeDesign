import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, IconButton, Box, Avatar } from "@mui/material";
import { Search, Mic, Notifications, VideoCall } from "@mui/icons-material";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", width: `calc(100% - 240px)`, ml: "240px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#121212", borderRadius: "20px", padding: "5px 10px", maxWidth: "600px", flexGrow: 1, mx: "auto" }}>
          <InputBase
            placeholder="Search"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ color: "white", flex: 1 }}
          />
          <IconButton sx={{ color: "white" }}>
            <Search />
          </IconButton>
          <IconButton sx={{ color: "white", backgroundColor: "#222", borderRadius: "50px", p: 1, ml: 1 }}>
            <Mic />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "white" }}>
            <VideoCall />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Notifications />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }} src="https://via.placeholder.com/32" alt="User" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
