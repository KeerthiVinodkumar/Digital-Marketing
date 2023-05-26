import React, { Component } from 'react';
import Header from './Header';
import First from "./First";
import Three from './Three';
import Fourth from './Fourth';
import Brand from './Brand';
import Team from './Team';
import Branding from './Branding';
import Last from './Last'
import { Swiper, SwiperSlide } from 'swiper/react';

export default class App extends Component  {
  render() { 
    return (
      <div>
         <Header/>
         <First></First>
        <Three></Three>
        <Fourth></Fourth>
        <Brand></Brand>
        <Team></Team>
        <Branding></Branding>
        <Last></Last> 
       
      </div>
    );
  }
}
