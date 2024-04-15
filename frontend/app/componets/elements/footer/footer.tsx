"use client";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

export const Footer = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed' color='primary' sx={{ top: "auto", bottom: 0 }}>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};
