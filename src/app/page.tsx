'use client'

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import aboutImage from '@/app/Assets/Profile.png'
import skillsImage from '@/app/Assets/CodingSkill.png'

import projectOneImage from '@/app/Assets/MockTalksHeader.png'
import projectTwoImage from '@/app/Assets/PokemonHeader.png'
import projectTriImage from '@/app/Assets/AllForOneHeader.png'

import { Card } from "flowbite-react";

export default function Home() {
  return (
    <>
      <h1 className="text-9xl font-semibold text-black text-center mt-24">Adrian Martinez</h1>
      <h2 className="text-5xl font-extrabold text-black text-center">Junior Developer</h2>
      <p className="text-center text-2xl text-black mt-3 font-bold">{`Aspiring Front End Developer based in Antioch, California`}</p>

      <div className="w-full h-[960px] bg-green-200 mt-32">
        <div className="grid grid-cols-2">
          <Image src={aboutImage} alt="About Image" className="h-[960px] w-full object-cover" />
          <div className="p-16">
            <h1 className="text-black text-8xl font-semibold">{`About Me`}</h1>
            <p className="text-black text-4xl font-normal mt-5">{`Hi there! My name is Adrian Martinez, and I am currently a Junior Web Developer, and student, at Codestack Academy.`}</p>
            <p className="text-black text-4xl font-normal mt-10">{`Ever since I was young, I've always wanted to learn how to code so that I can make my own video games, which is how I ended up on my programming journey. Since then, I've been learning how to code using various languages, frameworks, libraries, and engines to get a grasp on how writing lines of code, along with planning, troubleshooting, and debugging, can be so challenging, and what skills I have learned that I can put to use.`}</p>
            <p className="text-black text-4xl font-normal mt-10">{`Otherwise, when I'm not working, I like to play video games, go outside to many places I haven't been to before, and draw for fun.`}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[960px] bg-green-200 mt-20">
        <div className="grid grid-cols-2">
          <div className="p-16">
            <h1 className="text-black text-8xl font-semibold">My Skills</h1>
            <h1 className="text-black text-4xl font-semibold">{'(In Programming Languages)'}</h1>
            <p className="text-black text-4xl font-normal mt-5">Frameworks I Use:</p>
            <ul>
              <li>React</li>
              <li>Flowbite</li>
              <li>Next.js</li>
              <li>React Native</li>
            </ul>
            <p className="text-black text-4xl font-normal mt-5">Libraries I Use:</p>
            <ul>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>Angular</li>
            </ul>
            <p className="text-black text-4xl font-normal mt-5">Languages I Use:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>SQL</li>
              <li>C#</li>
            </ul>
            <p className="text-black text-4xl font-normal mt-5">What I'm productive with:</p>
            <ul>
              <li>Azure</li>
              <li>Slack</li>
              <li>Github</li>
              <li>Jira</li>
              <li>Notion</li>
              <li>Figma</li>
              <li>Postman</li>
            </ul>
          </div>
          <Image src={skillsImage} alt="About Image" className="h-[960px] w-full object-cover" />
        </div>
      </div>

      <div className="w-full h-[960px] bg-green-200 mt-20">
        <div className="p-16">
          <h1 className="text-black text-8xl font-semibold text-center">My Projects</h1>
          <div className="grid grid-cols-3 mt-16">
            <div className="flex justify-center">
              <div className="w-[480px] h-[640px] bg-white rounded-lg">
                <Image src={projectOneImage} alt="cardImage1" className="h-[270px] mt-1 object-cover" />
                <div className="p-5">
                  <h1 className="text-3xl text-black font-semibold">{'Mock Talks (Front End Assistance)'}</h1>
                  <p className="text-md text-black font-normal mt-5">This fullstack application helps users find peers to practice interviewing with. Having complete functionality such as creating accounts and/or appointments, direct messaging, and video chatting.<br/>Currently, I am one of the Front End Developers working on this project, as it's still in-progress.</p>
                  <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://mocktalks.vercel.app/">Go to Website</a></button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[480px] h-[640px] bg-white rounded-lg">
                <Image src={projectTwoImage} alt="cardImage1" className="h-[270px] mt-1 object-cover" />
                <div className="p-5">
                  <h1 className="text-3xl text-black font-semibold">{'Search that Pokémon! (Developer)'}</h1>
                  <p className="text-md text-black font-normal mt-5">This project allows the user to search for any pokemon, and display their abilities and other info.<br/><br/>This was made to improve my skills with fetching and navigating through a larger API, and using more high-order functions.</p>
                  <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://react-pokemon-rebuild.vercel.app/">Go to Website</a></button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[480px] h-[640px] bg-white rounded-lg">
                <Image src={projectTriImage} alt="cardImage1" className="h-[270px] mt-1 object-cover" />
                <div className="p-5">
                  <h1 className="text-3xl text-black font-semibold">{'All for One Challenges (Developer)'}</h1>
                  <p className="text-md text-black font-normal mt-5">This project allows the user to select any game from the menu, and ask for input to display the outcome.<br/><br/>This was made to improve my skills with creating, hosting, and becoming familiar with Web API's through Microsoft's Cloud Service Azure.</p>
                  <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://react-all-for-one.vercel.app/">Go to Website</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-green-400 p-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-7">Where to find me!</h1>
        <div className="flex justify-center">
          <a className="text-3xl font-semibold text-black text-center underline mb-5" href="mailto:amartinez@codestack.co">amartinez@codestack.co</a>
        </div>
        <p className="text-3xl font-semibold text-black text-center mb-5">Antioch, California</p>
        <p className="text-3xl font-semibold text-black text-center">{'+1 (925)-384-6097'}</p>

        <h1 className="text-4xl font-semibold text-black text-center mt-20 mb-7">Other Contact Links</h1>

        <div className="grid grid-rows-3">
          <a className="text-3xl font-semibold text-black text-center underline mb-5" href="https://www.linkedin.com/in/adrian-martinez-97aa99306/">My LinkedIn</a>
          <a className="text-3xl font-semibold text-black text-center underline mb-5" href="https://github.com/AdrianMartinezGit">My Github</a>
          <a className="text-3xl font-semibold text-black text-center underline" href="https://docs.google.com/document/d/10WvHDvvuObDEnTLxm8R_uT0VKye_1Nb3iMLUy7kF1r8/edit?usp=sharing">My Resume</a>
        </div>
      </div>
    </>
  );
}
