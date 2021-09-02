import React, {Component} from 'react'
import {Container, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './css/About.css';
import TypeIt from "typeit-react";

const useStyles = makeStyles({
 
});

export default function About() {
  const classes = useStyles();
    return (
      <div id="aboutDiv">
        <h1 id="title">About Me</h1>
        <p id="text">Some desciption here</p>
      </div>
    )
  }