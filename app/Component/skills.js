"use client"
import React from 'react'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { BsStars } from 'react-icons/bs';


export const Skills = () => {
    const imageUrls = [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/image4.jpg',
        '/image5.jpg',
        '/image6.jpg',
        '/image7.jpg',
        '/image8.jpg',
      ];

    
      useGSAP(() => {
        gsap.from(".scrolleffet", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet",
            scroller: "body",
            
            start: "top 80%",
          },
        });

        gsap.from(".scrolleffet1", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet1",
            scroller: "body",
            
            start: "top 80%",
          },
        });



        gsap.from(".scrolleffet2", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet2",
            scroller: "body",
            
            start: "top 80%",
          },
        });



        gsap.from(".scrolleffet3", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet3",
            scroller: "body",
            
            start: "top 80%",
          },
        });


        gsap.from(".scrolleffet4", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet4",
            scroller: "body",
          
            start: "top 80%",
          },
        });

        gsap.from(".scrolleffet5", {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".scrolleffet",
            scroller: "body",
            
            start: "top 80%",
          },
        });



      }, []);

      return (
        <div className='bg-gray-200 md:mx-4 border rounded-t-2xl'>
        <div className='scrolleffet font-bold text-gray-700 font-sans mb-8	justify-center flex text-4xl'>Skills</div>
    
        <div className=" min-h-80 md:h-auto flex flex-col items-center justify-center  space-y-4">
       <div className="text-xs scrolleffet1 border-4 rounded-3xl m-2 inline-flex items-center bg-white px-4 py-2 ">
              <BsStars className=" text-emerald-500 mr-2 " />
              Enhanced creativity through technology
            </div>
            <div className='scrolleffet2 font-bold text-center flex flex-col items-center text-gray-700 font-sans text-2xl'>Making apps with morden technology</div>
      
      <div className="scrolleffet5 w-full flex justify-center">
     
         
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
          <Image src={imageUrls[0]} alt="Image 1" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="scrolleffet3 w-full flex justify-center space-x-2 sm:space-x-4">
        {imageUrls.slice(1, 4).map((url, index) => (
          <div key={index} className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
            <Image src={url} alt={`Image ${index + 2}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="scrolleffet4 w-full flex justify-center space-x-2 sm:space-x-4">
        {imageUrls.slice(4, 8).map((url, index) => (
          <div key={index} className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
            <Image src={url} alt={`Image ${index + 5}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    
    </div></div>
    
  )
}
