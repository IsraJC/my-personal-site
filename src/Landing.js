import React, {Component} from 'react'
import {Fade} from "@material-ui/core";
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
              <TypeIt element={"h1"} options={{waitUntilVisible: true, lifeLike: false, speed: 85}} id="landingText">Hi, I'm Isra. </TypeIt>
          </div>
          <div id="subTextDiv">
            <Fade in="true" style={{transitionDelay: "2000ms"}} {...{timeout: 1000}}><h5>I'm a Computer Science Student, currently completing my final year university.</h5></Fade>
          </div>
        </div>
      </div>
    )
  }