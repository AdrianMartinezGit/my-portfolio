'use client'

import React from "react"

import aboutImage from '@/assets/Profile.png'
import skillsImage from '@/assets/CodingSkill.png'

import projectMockImage from '@/assets/MockTalksHeader.png'
import projectPokeImage from '@/assets/PokemonHeader.png'
import projectA41Image from '@/assets/AllForOneHeader.png'
import projectWeahterImage from '@/assets/WeatherHeader.png'
import Image from "next/image"

import iconReact from '@/assets/icons/react-svgrepo-com.svg'
import iconFlowbite from '@/assets/icons/logo.svg'
import iconNextJS from '@/assets/icons/next-dot-js-svgrepo-com.svg'

import iconBootstrap from '@/assets/icons/bootstrap-fill-svgrepo-com.svg'
import iconTailwindCSS from '@/assets/icons/tailwindcss-svgrepo-com.svg'
import iconAngular from '@/assets/icons/angular-svgrepo-com.svg'

import iconHTML from '@/assets/icons/html-124-svgrepo-com.svg'
import iconCSS from '@/assets/icons/css3-02-svgrepo-com.svg'
import iconJS from '@/assets/icons/javascript-155-svgrepo-com.svg'
import iconTS from '@/assets/icons/typescript-16-svgrepo-com.svg'
import iconSQL from '@/assets/icons/sql-svgrepo-com.svg'
import iconCSharp from '@/assets/icons/c-sharp-16-svgrepo-com.svg'

import iconAzure from '@/assets/icons/microsoftazure-svgrepo-com.svg'
import iconSlack from '@/assets/icons/slack-svgrepo-com.svg'
import iconGithub from '@/assets/icons/github-142-svgrepo-com.svg'
import iconJira from '@/assets/icons/jira-svgrepo-com.svg'
import iconNotion from '@/assets/icons/notion-svgrepo-com.svg'
import iconFigma from '@/assets/icons/figma-svgrepo-com.svg'
import iconPostman from '@/assets/icons/postman-svgrepo-com.svg'
import iconVercel from '@/assets/icons/logo-vercel-svgrepo-com.svg'

import { Card } from "flowbite-react"

export default function Page() {
  return (
    <>
      <main className="hidden 2xl:block"> {/* Desktop View */}
        <h1 className="font-[Source-Code-Pro] text-white text-8xl font-semibold text-center mt-32 tracking-tighter" style={{ textShadow: '#000000 4px 4px 2px' }}>Adrian Martinez</h1>
        <p className="font-[Source-Code-Pro] text-white text-2xl font-lightbold text-center mt-3 tracking-tighter" style={{ textShadow: '#000000 1px 1px 1px' }}>{`Aspiring Web Developer based in Antioch, California`}</p>

        <div className="px-60 py-20">
          <div className="bg-green-200 w-full h-auto p-5 rounded-xl shadow-xl shadow-green-950">
            <div className="grid grid-flow-col">
              <Image src={aboutImage} alt="About Me" className="w-96 rounded-md" />
              <div className="px-10">
                <h1 className="text-black text-8xl font-semibold font-[Source-Code-Pro]">{`About me`}</h1>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`Hi there! My name is Adrian Martinez, and I am currently a student, at Codestack Academy.`}</p>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`I've been learning how to code using various languages, frameworks, libraries, and engines to get a grasp on how writing lines of code, troubleshooting, and debugging, can be so challenging, and applying the skills that I have learned so far to good use.`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-48">
          <div className="bg-green-200 w-full h-auto p-5 rounded-xl shadow-xl shadow-green-950">
            <div className="grid grid-flow-col">
              <div className="pl-10">
                <h1 className="text-black text-6xl font-semibold font-[Source-Code-Pro]">{`My Skills`}</h1>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`Frameworks that I Use:`}</p>
                <div className="grid grid-flow-col w-96 mt-2">
                  <Image src={iconReact} alt="iconReact" className="w-16 h-16" />
                  <Image src={iconFlowbite} alt="iconReact" className="w-16 h-16" />
                  <Image src={iconNextJS} alt="iconNextJS" className="w-16 h-16" />
                </div>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`Libraries that I Use:`}</p>
                <div className="grid grid-flow-col w-96 mt-2">
                  <Image src={iconBootstrap} alt="iconBootstrap" className="w-16 h-16" />
                  <Image src={iconTailwindCSS} alt="iconTailWindCSS" className="w-16 h-16" />
                  <Image src={iconAngular} alt="iconAngular" className="w-16 h-16" />
                </div>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`Languages that I Use:`}</p>
                <div className="grid grid-flow-col w-[640px] mt-2">
                  <Image src={iconHTML} alt="iconHTML" className="w-16 h-16" />
                  <Image src={iconCSS} alt="iconCSS" className="w-16 h-16" />
                  <Image src={iconJS} alt="iconJavascript" className="w-16 h-16" />
                  <Image src={iconTS} alt="iconTypeScript" className="w-16 h-16" />
                  <Image src={iconSQL} alt="iconSQL" className="w-16 h-16" />
                  <Image src={iconCSharp} alt="iconC#" className="w-16 h-16" />
                </div>
                <p className="text-black text-4xl font-normal mt-5 font-[Source-Code-Pro]">{`Applications that I use:`}</p>
                <div className="grid grid-flow-col w-[640px] mt-2">
                  <Image src={iconAzure} alt="iconAzure" className="w-16 h-16" />
                  <Image src={iconSlack} alt="iconSlack" className="w-16 h-16" />
                  <Image src={iconGithub} alt="iconGithub" className="w-16 h-16" />
                  <Image src={iconJira} alt="iconJira" className="w-16 h-16" />
                  <Image src={iconNotion} alt="iconNotion" className="w-16 h-16" />
                  <Image src={iconFigma} alt="iconFigma" className="w-16 h-16" />
                  <Image src={iconPostman} alt="iconPostman" className="w-16 h-16" />
                  <Image src={iconVercel} alt="iconVercel" className="w-16 h-16" />
                </div>
              </div>
              <div className="flex justify-end pr-10">
                <Image src={skillsImage} alt="About Me" className="w-96 h-full rounded-md object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-24 py-20">
          <div className="bg-green-200 w-full h-auto p-5 rounded-xl shadow-xl shadow-green-950">
            <h1 className="text-black text-6xl font-semibold text-center font-[Source-Code-Pro] pb-10">{`My Projects`}</h1>
            <div className="grid grid-flow-col">

              <div className="flex justify-center">
                <div className="w-96 h-auto bg-white rounded-lg shadow-md shadow-black">
                  <Image src={projectMockImage} alt="cardImage1" className="h-[270px] mt-2 object-cover" />
                  <div className="p-5">
                    <h1 className="text-2xl text-black font-semibold font-[Source-Code-Pro]">{'Mock Talks (Front End Assistance)'}</h1>
                    <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro]">{`This fullstack application helps users find peers to practice interviewing with. Having functionality such as creating accounts, appointments, direct messaging, and video chatting.`}<br />{`Currently, I am one of the Front End Developers working on this project, as it's still in-progress.`}</p>
                    <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://mocktalks.vercel.app/">Go to Website</a></button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-96 h-auto bg-white rounded-lg shadow-md shadow-black">
                  <Image src={projectPokeImage} alt="cardImage1" className="h-[270px] mt-2 object-cover" />
                  <div className="p-5">
                    <h1 className="text-2xl text-black font-semibold font-[Source-Code-Pro]">{'Search that Pokémon! (Developer)'}</h1>
                    <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro]">{`This project allows the user to search for any pokemon, and display their abilities and other info.`}<br /><br />{`This was made to improve my skills with fetching and navigating through a larger API, and using more high-order functions.`}</p>
                    <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://react-pokemon-rebuild.vercel.app/">Go to Website</a></button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-96 h-auto bg-white rounded-lg shadow-md shadow-black">
                  <Image src={projectA41Image} alt="cardImage1" className="h-[270px] mt-2 object-cover" />
                  <div className="p-5">
                    <h1 className="text-2xl text-black font-semibold font-[Source-Code-Pro]">{'All for One Challenges (Developer)'}</h1>
                    <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro]">{`This project allows the user to select any game from the menu, and ask for input to display the outcome.`}<br /><br />{`This was made to improve my skills with creating, hosting, and becoming familiar with Web API's through Microsoft's Cloud Service Azure.`}</p>
                    <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://react-all-for-one.vercel.app/">Go to Website</a></button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-96 h-auto bg-white rounded-lg shadow-md shadow-black">
                  <Image src={projectWeahterImage} alt="cardImage1" className="h-[270px] mt-2 object-cover" />
                  <div className="p-5">
                    <h1 className="text-2xl text-black font-semibold font-[Source-Code-Pro]">{'Cloud 9 Web App (Developer)'}</h1>
                    <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro]">{`This project allows the user to check the weather of their current location along with searching other areas, cities, to see their weather status as well.`}<br />{`This was made to help me further understand APIs and how to fill up text fields with fetched data.`}</p>
                    <button className="bg-blue-500 p-4 text-white rounded-xl text-3xl w-full h-16 mt-5"><a href="https://react-weather-rebuild.vercel.app/">Go to Website</a></button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-green-300 p-12">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold text-black text-center mb-7 font-[Source-Code-Pro]">Where to find me!</h1>
              <div className="flex justify-center">
                <a className="text-3xl font-semibold text-black text-center underline mb-2 font-[Source-Code-Pro]" href="mailto:amartinez@codestack.co">{`amartinez@codestack.com`}</a>
              </div>
              {/*<p className="text-3xl font-semibold text-black text-center mb-2 font-[Source-Code-Pro]">{`Antioch, California`}</p>*/}
              <p className="text-3xl font-semibold text-black text-center font-[Source-Code-Pro]">{'+1 (925)-384-6097'}</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-black text-center mb-7 font-[Source-Code-Pro]">{`Other Contact Links`}</h1>
              <div className="grid grid-rows-3">
                <div className="flex justify-center">
                  <span><a className="text-3xl font-semibold text-black text-center underline mb-2 font-[Source-Code-Pro]" href="https://www.linkedin.com/in/adrian-martinez-97aa99306/">My LinkedIn</a></span>
                </div>
                <div className="flex justify-center">
                  <span><a className="text-3xl font-semibold text-black text-center underline mb-2 font-[Source-Code-Pro]" href="https://github.com/AdrianMartinezGit">My Github</a></span>
                </div>
                <div className="flex justify-center">
                  <span><a className="text-3xl font-semibold text-black text-center underline font-[Source-Code-Pro]" href="https://docs.google.com/document/d/10WvHDvvuObDEnTLxm8R_uT0VKye_1Nb3iMLUy7kF1r8/edit?usp=sharing">My Resume</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      <main className="block 2xl:hidden"> {/* Mobile View */}
        <div className="p-5">
          <h1 className="font-[Source-Code-Pro] text-white text-4xl sm:text-6xl font-semibold text-center mt-12 tracking-tighter" style={{ textShadow: '#000000 3px 3px 1px' }}>Adrian Martinez</h1>
          <p className="font-[Source-Code-Pro] text-white text-1xl sm:text-2xl font-lightbold text-center mt-3 tracking-tighter" style={{ textShadow: '#000000 1px 1px 1px' }}>{`Aspiring Web Developer based in Antioch, California`}</p>

          <div className="bg-green-200 w-full h-auto p-2 rounded-xl mt-10 shadow-md shadow-green-950">
            <Image src={aboutImage} alt="About Me" className="w-full h-72 sm:h-96 md:h-[640px] rounded-md object-cover mb-5 object-top" />
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-semibold font-[Source-Code-Pro] text-center">{`About me`}</h1>
            <div className="p-2">
              <p className="text-black text-md md:text-xl font-normal mt-5 font-[Source-Code-Pro]">{`Hi there! My name is Adrian Martinez, and I am currently a student, at Codestack Academy.`}</p>
              <p className="text-black text-sm md:text-xl font-normal mt-5 font-[Source-Code-Pro]">{`I've been learning how to code using various languages, frameworks, libraries, and engines to get a grasp on how writing lines of code, troubleshooting, and debugging, can be so challenging, and applying the skills that I have learned so far to good use.`}</p>
            </div>
          </div>

          <div className="bg-green-200 w-full h-auto p-2 rounded-xl mt-10 shadow-md shadow-green-950">
            <Image src={skillsImage} alt="My Skills" className="w-full h-72 sm:h-96 md:h-[640px] rounded-md object-cover mb-5 object-top" />
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-semibold font-[Source-Code-Pro] text-center">{`My Skills`}</h1>
            <div className="p-2">
              <div className="sm:grid sm:grid-flow-row sm:grid-cols-2">

                <div>
                  <h1 className="text-black text-2xl font-normal mt-5 font-[Source-Code-Pro] text-center mb-2">{`Frameworks that I Use:`}</h1>
                  <div className="flex justify-center">
                    <div className="grid grid-flow-col w-48">
                      <div className="flex justify-center"><Image src={iconReact} alt="iconReact" className="w-12 h-12" /></div>
                      <div className="flex justify-center"><Image src={iconFlowbite} alt="iconReact" className="w-12 h-12" /></div>
                      <div className="flex justify-center"><Image src={iconNextJS} alt="iconNextJS" className="w-12 h-12" /></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-normal mt-5 font-[Source-Code-Pro] text-center mb-2">{`Libraries that I Use:`}</h1>
                  <div className="flex justify-center">
                    <div className="grid grid-flow-col w-48">
                      <div className="flex justify-center"><Image src={iconBootstrap} alt="iconBootstrap" className="w-12 h-12" /></div>
                      <div className="flex justify-center"><Image src={iconTailwindCSS} alt="iconTailWindCSS" className="w-12 h-12" /></div>
                      <div className="flex justify-center"><Image src={iconAngular} alt="iconAngular" className="w-12 h-12" /></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-normal mt-5 font-[Source-Code-Pro] text-center mb-2">{`Languages that I Use:`}</h1>
                  <div className="flex justify-center">
                    <div className="grid grid-rows-2 w-96 space-y-2">
                      <div className="grid grid-cols-3">
                        <div className="flex justify-center"><Image src={iconHTML} alt="iconHTML" className="w-12 h-12 flex" /></div>
                        <div className="flex justify-center"><Image src={iconCSS} alt="iconCSS" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconJS} alt="iconJavascript" className="w-12 h-12" /></div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="flex justify-center"><Image src={iconTS} alt="iconTypeScript" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconSQL} alt="iconSQL" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconCSharp} alt="iconC#" className="w-12 h-12" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-normal mt-5 font-[Source-Code-Pro] text-center mb-2">{`Applications that I use:`}</h1>
                  <div className="flex justify-center">
                    <div className="grid grid-rows-2 w-80 space-y-2">
                      <div className="grid grid-cols-4">
                        <div className="flex justify-center"><Image src={iconAzure} alt="iconAzure" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconSlack} alt="iconSlack" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconGithub} alt="iconGithub" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconVercel} alt="iconVercel" className="w-12 h-12" /></div>
                      </div>
                      <div className="grid grid-cols-4">
                        <div className="flex justify-center"><Image src={iconJira} alt="iconJira" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconNotion} alt="iconNotion" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconFigma} alt="iconFigma" className="w-12 h-12" /></div>
                        <div className="flex justify-center"><Image src={iconPostman} alt="iconPostman" className="w-12 h-12" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-200 w-full h-auto p-2 rounded-xl mt-10 shadow-md shadow-green-950">
            <h1 className="text-black text-3xl sm:text-5xl md:text-6xl font-semibold font-[Source-Code-Pro] text-center mb-3 sm:mb-6">{`My Projects`}</h1>
            <div className="grid grid-flow-row space-y-2">
              <div className="bg-white w-full h-auto rounded-md shadow-sm shadow-black">
                <Image src={projectMockImage} alt="ProjectImage" className="w-full mt-2 h-48 sm:h-64 md:h-96 object-cover object-top" />
                <div className="p-2">
                  <h1 className="text-2xl text-black font-extrabold font-[Source-Code-Pro] text-center">{'Mock Talks (Front End Assistance)'}</h1>
                  <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro] text-center">{`This fullstack application helps users find peers to practice interviewing with. Having functionality such as creating accounts, appointments, direct messaging, and video chatting.`}<br /><br />{`Currently, I am one of the Front End Developers working on this project, as it's still in-progress.`}</p>
                  <button className="bg-blue-500 text-white rounded-xl text-xl w-full h-8 mt-4 font-[Source-Code-Pro]"><a href="https://mocktalks.vercel.app/">Go to Website</a></button>
                </div>
              </div>
              <div className="bg-white w-full h-auto rounded-md shadow-sm shadow-black">
                <Image src={projectPokeImage} alt="ProjectImage" className="w-full mt-2 h-48 sm:h-64 md:h-96 object-cover object-top" />
                <div className="p-2">
                  <h1 className="text-2xl text-black font-extrabold font-[Source-Code-Pro] text-center">{'Search that Pokémon! (Developer)'}</h1>
                  <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro] text-center">{`This project allows the user to search for any pokemon, and display their abilities and other info.`}<br /><br />{`This was made to improve my skills with fetching and navigating through a larger API, and using more high-order functions.`}</p>
                  <button className="bg-blue-500 text-white rounded-xl text-xl w-full h-8 mt-4 font-[Source-Code-Pro]"><a href="https://react-pokemon-rebuild.vercel.app/">Go to Website</a></button>
                </div>
              </div>
              <div className="bg-white w-full h-auto rounded-md shadow-sm shadow-black">
                <Image src={projectA41Image} alt="ProjectImage" className="w-full mt-2 h-48 sm:h-64 md:h-96 object-cover object-top" />
                <div className="p-2">
                  <h1 className="text-2xl text-black font-extrabold font-[Source-Code-Pro] text-center">{'All for One Challenges (Developer)'}</h1>
                  <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro] text-center">{`This project allows the user to select any game from the menu, and ask for input to display the outcome.`}<br /><br />{`This was made to improve my skills with creating, hosting, and becoming familiar with Web API's through Microsoft's Cloud Service Azure.`}</p>
                  <button className="bg-blue-500 text-white rounded-xl text-xl w-full h-8 mt-4 font-[Source-Code-Pro]"><a href="https://react-all-for-one.vercel.app/">Go to Website</a></button>
                </div>
              </div>
              <div className="bg-white w-full h-auto rounded-md shadow-sm shadow-black">
                <Image src={projectWeahterImage} alt="ProjectImage" className="w-full mt-2 h-48 sm:h-64 md:h-96 object-cover object-top" />
                <div className="p-2">
                  <h1 className="text-2xl text-black font-extrabold font-[Source-Code-Pro] text-center">{'Cloud 9 Web App (Developer)'}</h1>
                  <p className="text-sm text-black font-normal mt-5 font-[Source-Code-Pro] text-center">{`This project allows the user to check the weather of their current location along with searching other areas, cities, to see their weather status as well.`}<br /><br />{`This was made to help me further understand APIs and how to fill up text fields with fetched data.`}</p>
                  <button className="bg-blue-500 text-white rounded-xl text-xl w-full h-8 mt-4 font-[Source-Code-Pro]"><a href="https://react-weather-rebuild.vercel.app/">Go to Website</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-green-300 p-5">
          <div className="grid grid-rows-2">
            <div>
              <h1 className="text-3xl font-semibold text-black text-center mb-7 font-[Source-Code-Pro]">Where to find me!</h1>
              <div className="flex justify-center">
                <a className="text-xl font-semibold text-black text-center underline mb-1 font-[Source-Code-Pro]" href="mailto:amartinez@codestack.co">{`amartinez@codestack.com`}</a>
              </div>
              {/*<p className="text-xl font-semibold text-black text-center mb-1 font-[Source-Code-Pro]">{`Antioch, California`}</p>*/}
              <p className="text-xl font-semibold text-black text-center font-[Source-Code-Pro]">{'+1 (925)-384-6097'}</p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-black text-center mb-7 font-[Source-Code-Pro]">{`Other Contact Links`}</h1>
              <div className="grid grid-rows-3">
                <div className="flex justify-center">
                  <span><a className="text-xl font-semibold text-black text-center underline mb-1 font-[Source-Code-Pro]" target="_blank" href="https://www.linkedin.com/in/adrian-martinez-97aa99306/">My LinkedIn</a></span>
                </div>
                <div className="flex justify-center">
                  <span><a className="text-xl font-semibold text-black text-center underline mb-1 font-[Source-Code-Pro]" target="_blank" href="https://github.com/AdrianMartinezGit">My Github</a></span>
                </div>
                <div className="flex justify-center">
                  <span><a className="text-xl font-semibold text-black text-center underline font-[Source-Code-Pro]" target="_blank" href="https://docs.google.com/document/d/10WvHDvvuObDEnTLxm8R_uT0VKye_1Nb3iMLUy7kF1r8/edit?usp=sharing">My Resume</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}