"use client";
import { Suspense } from 'react';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MyComponent = () => {
  const tl = gsap.timeline();
  const t2 = gsap.timeline();
  
  useGSAP(() => {
    tl.from("#developer", {
      x: -40,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });
    tl.from("#dis", {
      x: -40,
      opacity: 0,
      duration: 0.5,
    });
    tl.from("#resum", {
      x: -40,
      opacity: 0,
      duration: 0.5,
    });
    t2.from("#canv", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    t2.from("#img", {
      opacity: 0,
      duration: 0.5,
    });
  });

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/AshimLugunResume-800.pdf'; // Replace with your resume file path
    link.download = 'AshimLugunResume-800.pdf'; // Replace with your preferred file name
    link.click();
  };

  return (
    <>
      <div className=":md:min-h-screen md:mb-40 flex flex-col md:flex-row">
        <div className="flex-1 mt-6 md:mt-40 bg-transparent flex flex-col">
          <div id="developer" className="md:ml-6 ml-2 mb-4">
            <div className="md:text-lg border-4 rounded-3xl px-2 inline-flex items-center shadow-lg whitespace-nowrap">
              <BsStars className="text-emerald-500 mr-2" />
              Fullstack Developer 
            </div>
            <h1 className="text-5xl text-gray-800 font-black mt-8">
              Providing <span className="text-emerald-500">the best </span> project experience.
            </h1>
          </div>
          <p id="dis" className="mt-6 ml-2 md:ml-6 font-medium">
          I'm Ashim Lugun, a Computer Science Engineer passionate about full-stack development and blockchain technology. I enjoy building impactful, user-centric applications and exploring innovative solutions in the web3 space.
      <br></br>   Check out my projects and skills below!
    </p>
         
          <button
            id="resum"
            className="hover:bg-emerald-500 hover:text-white shadow-lg text-lg border-4 rounded-3xl md:ml-6 ml-2 mt-6 inline-flex items-center px-4 py-2 w-max"
            onClick={handleResumeDownload}
          >
            Download resume
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center relative md:mt-16 ">
          <div id="canv" className="absolute w-full h-full md:mt-16 sm:h-80 md:h-150 ">
          <Canvas className="w-full h-full relative md:mt-10">
  <Suspense fallback={null}>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={1} />
    <directionalLight position={[3, 2, 1]} />
    <Sphere args={[1, 50, 50]} scale={2.4}>
      <MeshDistortMaterial
        color="#3d1c56"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  </Suspense>
</Canvas>

          </div>
          <div id="img" className="relative z-10 mb-16 md:mb-0 w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/my_pic.png"
              alt="Profile Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
