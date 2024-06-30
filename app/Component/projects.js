"use client"
import React, { useEffect, useState } from 'react';
import ProjectCard from './card';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  
 useGSAP(()=>{
   gsap.from(".scrolleffets", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".scrolleffets",
      scroller: "body",
      
      start: "top 80%",
    },
  });

  gsap.from(".scrolleffets1", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".scrolleffets1",
      scroller: "body",
      
      start: "top 80%",
    },
  });



  gsap.from(".scrolleffets2", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".scrolleffets2",
      scroller: "body",
      
      start: "top 80%",
    },
  });})



  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/project');
        const data = await res.json();
        if (data.success) {
          setProjects(data.data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
     <div className='font-bold scrolleffets text-gray-700 font-sans mb-8 justify-center flex text-4xl'>My Projects</div>
       
      <div className="flex flex-wrap md:mx-4 justify-center">
        <div className="w-full">
          <h1 className="text-2xl justify-center scrolleffets1 flex font-bold whitespace-nowrap">Check out my latest work</h1>
          <p className="text-center scrolleffets2 mt-4">Here are some of my top projects, showcasing a range of skills and expertise in web development.</p>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}  />
        ))}
      </div>
    </div>
  );
};

export default Home;
