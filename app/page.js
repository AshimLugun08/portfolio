"use client"
import React from 'react';
import { About } from './Component/about';
import { Skills } from './Component/skills';
import ShapeDivider from './Component/shaped';
import Home from './Component/projects';
import ContactSection from './Component/contacrseccion';
import { Icons } from './Component/icons';
import MyComponent from './Component/hero';
import Loading from './loading';
import { useState,useEffect } from 'react';

function MainComponent() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Icons /><div id="main">
      <MyComponent/></div>
       <About />
        <Skills />
        <ShapeDivider />
        <Home />
      
      
      <div id="contact">
      <ContactSection /></div>
    </>
  );
}

export default MainComponent;
