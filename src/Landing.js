import React, {Component} from 'react'
import {Container, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './css/Landing.css';
import Nav from './Nav';
import TypeIt from "typeit-react";

const useStyles = makeStyles({
 
});

export default function Landing() {
  const classes = useStyles();
    return (
      <div id="landingDiv">
        <div id="landingImg">
          <Nav></Nav>
          <div id="landingTextDiv">
              <TypeIt element={"h1"} options={{waitUntilVisible: true}} id="landingText">Hi, I'm Isra. </TypeIt>
          </div>
          <div id="subTextDiv">
            <h5>I'm a Computer Science Student, currently completing my final year at the University of Birmingham.</h5>
          </div>
        </div>
      </div>
    )
  }