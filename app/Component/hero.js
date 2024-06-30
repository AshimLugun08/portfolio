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
    link.href = '/AshimLugunResume-08.pdf'; // Replace with your resume file path
    link.download = 'AshimLugunResume-08.pdf'; // Replace with your preferred file name
    link.click();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 mt-6 md:mt-40 bg-transparent flex flex-col">
          <div id="developer" className="md:ml-6 ml-2 mb-4">
            <div className="md:text-lg border-4 rounded-3xl px-2 inline-flex items-center shadow-lg whitespace-nowrap">
              <BsStars className="text-emerald-500 mr-2" />
              Fullstack Developer Portfolio
            </div>
            <h1 className="text-5xl text-gray-800 font-black mt-8">
              Providing <span className="text-emerald-500">the best </span> project experience.
            </h1>
          </div>
          <p id="dis" className="mt-6 ml-2 md:ml-6 font-medium">
            I'm a Fullstack Web Developer with experience in Website development.<br />
            Check out my project and skills.
          </p>
          <button
            id="resum"
            className="hover:bg-emerald-500 hover:text-white shadow-lg text-lg border-4 rounded-3xl md:ml-6 ml-2 mt-6 inline-flex items-center px-4 py-2 w-max"
            onClick={handleResumeDownload}
          >
            Download resume
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
          <div id="canv" className="absolute inset-0 z-0 w-full h-full">
            <Canvas className="w-full h-full">
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 50, 100]} scale={2.4}>
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
          <div id="img" className="relative z-9 mb-16 md:mb-0 w-72 h-72 md:w-96 md:h-96">
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
