import React, {Component} from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './css/Nav.css';

const useStyles = makeStyles({
  tabs: {
    outline: 0,
    color: "white"
  },
});

export default function Nav() {
  const classes = useStyles();
    return (
      <AppBar position="static" className="Navbar">
        <Toolbar>
          <Typography variant="h6" id="name" style={{flex:1}}>
            Isra Jawaid
          </Typography>
          <div clasName="tabsDiv">
          <Button className="tabs">About</Button>
          <Button className="tabs">Projects</Button>
          <Button className="tabs">Achievements</Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }