"use client"
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from Font Awesome
import ContactForm from './contactform'; // Assuming ContactForm is exported as `ContactForm` from ContactForm.js
import { PiHandshakeDuotone } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ContactSection = () => {
  useGSAP(()=>{
    gsap.from(".scrolleffetss", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffetss",
        scroller: "body",
        
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffetss1", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffetss1",
        scroller: "body",
        
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffetss2", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffetss2",
        scroller: "body",
        
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffetss3", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffetss3",
        scroller: "body",
        
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffetss4", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffetss4",
        scroller: "body",
        
        start: "top 80%",
      },
    });
    


  })
  return (<div>
  <div  className=' scrolleffets font-bold text-gray-700 font-sans mb-8 justify-center flex text-4xl'>
        Contact me
      </div>
    <div className="min-h-80 flex mb-12 flex-col mx-6 md:flex-row md:mb-4">
      <div className="mb-4 flex flex-1 justify-center bg-transparent flex flex-col ">
        <h1 className='scrolleffets1 text-xl mb-3 font-semibold inline-block'>
          Get in<span className='text-emerald-500'> Touch</span> <PiHandshakeDuotone className='inline-block' />
        </h1>
        <p className="text-lg scrolleffets2 mb-4 font-serif inline-block  py-4">
          Feel free to reach out! You can connect with me via the<br />
          contact form or through my social media handles.<br />
          I'm happy to respond to genuine inquiries and messages.
        </p>
        <div className="flex scrolleffets3 items-center space-x-4 md:space-x-2">
          <a href="https://www.instagram.com/logan_ashim_08?utm_source=qr&igsh=dXExcHpzcjFwdzU=" className="text-2xl text-gray-600 hover:text-gray-900"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/ashim-lugun-5924a9289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-2xl text-gray-600 hover:text-gray-900"><FaLinkedin /></a>
          <a href="https://github.com/AshimLugun08/" className="text-2xl text-gray-600 hover:text-gray-900"><FaGithub /></a>
        </div>
      </div>
      
      {/* Contact Form */}
      <ContactForm className="scrolleffets4" />
    </div></div>
  );
};

export default ContactSection;
