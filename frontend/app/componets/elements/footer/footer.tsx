"use client";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export const Footer = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed' color='primary' sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={3} style={{ paddingLeft: "6%" }}>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                style={{ color: "white" }}
              >
                <HomeIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: "6%" }}>
              <IconButton color='inherit'>
                <SearchIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: "6%" }}>
              <IconButton color='inherit'>
                <NotificationsActiveIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
