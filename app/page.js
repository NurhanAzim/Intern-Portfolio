'use client';


import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
        <section className=" min-h-screen">
          <div className="text-center p-3">
            <div className="relative mx-auto mt-5 bg-gradient-to-b from-red-500 to-yellow-400 rounded-full w-60 h-60 overflow-hidden md:h-90 md:w-90">
               <Image  src={"/profile.png"} alt="Avatar picture" layout="fill" objectFit="cover" />
            </div>
            <h1 className="text-5xl py-2 mb-5 text-red-500 font-sans">Welcome to my website!</h1>
            <p className="text-xl py-2  text-gray-300 font-sans dark:text-gray-300">I'm Azim Nurhan, an aspiring mobile application developer currently interning at <span className="text-amber-600 font-bold">Ledakan Digital Sdn. Bhd.</span></p>
            <p className="text-xl py-2  text-gray-300 font-sans dark:text-gray-300">This platform is dedicated to showcasing the projects I have been working on during my internship.</p>
          </div>


          <div className="flex gap-2 justify-center mt-12">
            <Link className="text-black inline-block py-2 px-6 rounded-md   bg-gradient-to-tr from-orange-400 to-red-400" href="/project/graphic-design">Graphic Design</Link>
            <Link className="text-black inline-block py-2 px-6 rounded-md   bg-gradient-to-tr from-sky-400 to-blue-400" href="/project/content-development">Content Development</Link>
          </div>
          <div className="flex gap-2 justify-center mt-2">
            <Link className="text-black inline-block py-2 px-6 rounded-md   bg-gradient-to-tr from-teal-400 to-teal-600" href="/project/web-development">Web Development</Link>
            <Link className='text-black inline-block py-2 px-6 rounded-md bg-gradient-to-tr from-violet-400 to-indigo-400' href='/project/video-editing'>Video Editing</Link>
          </div>
        </section>
    
  )
}
