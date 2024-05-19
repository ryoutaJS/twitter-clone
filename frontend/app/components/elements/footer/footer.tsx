"use client";

import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -60,
  left: "85%",
  right: 0,
});

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
            <Grid item xs={3} style={{ paddingLeft: "6%" }}>
              <IconButton color='inherit' style={{ color: "white" }}>
                <ModeCommentIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <StyledFab color='primary' aria-label='add'>
          <Link href='/tweet' style={{ textDecoration: "none" }}>
            <AddIcon sx={{ mt: 1 }} />
          </Link>
        </StyledFab>
      </AppBar>
    </>
  );
};
