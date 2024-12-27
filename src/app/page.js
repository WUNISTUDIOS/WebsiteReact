"use client"
import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link"
import AnimatedText, { AnimatedText02 } from "@/components/text-animation";
import { motion } from "framer-motion"
import { useState } from "react"

import Experience from "../components/character.js"
import Footer3d from "../components/footer3d"

import Image from "next/image"
// import tshirt_idea from "./tshirt_idea.png"



export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
const [isFxreel, setFxreel] = useState(false)

const [isLove, setIsLove] = useState(false)
const [isLoveText, setLoveText] = useState(false)

const [isMachine, setIsMachine] = useState(false)
const [isMachineText, setMachineText] = useState(false)
const handleClick = () => setIsClicked(!isClicked)


  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main className="">
          {/* <section>
            <div className="flex items-start justify-start ax-w-10xl mx-auto mt-20 my-10 ">
              <AnimatedText />
            </div>
        </section> */}
        <section>
          {/* <div className="flex max-h-min gap-2 w-fit max-w-[98%] rounded-lg mx-auto"> */}
          <div className="flex flex-wrap items-start justify-between m-5 h-full">
            <video
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/AL_Season_04.mp4"/>
            </video>
            <video
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/MACHINETRAILER3.mp4"/>
            </video>
            {/* <video
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/SmallnomusicAJBlackSkatingV2000_1.mp4"/>
            </video> */}
            <video 
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/story_ornament.mp4" />
            </video>
            <video 
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/lov3IG.mp4"/>
            </video>
          </div>
        </section>
        {/* <section>
        <div>
          <AnimatedText />
        </div>
        </section> */}
        <section>
          <div className=" ml-10 mr-10 py-10">
            <Footer3d/>
          </div>
          {/* <div>
            <Image src={deved} layout="fill"/>
          </div> */}
        </section>
        <section>
              <motion.div
              layout="position"  
              // onClick={() => setIsOpen(!isOpen)}
              // animate={{ scale: isOpen ? 1.1 : 1}}
              transition={{ duration: 1, ease: "easeIn", }}
              
              className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
              style={{ cursor: 'pointer', }}
            whileInView={{"--rounded": "5%"}}
              initial={{ "--rounded": "20%" }}
              viewport={{amount: 0.5}}
              >
                <video className="w-full"
                  loop
                  autoPlay
                  muted
                >
                  <source src="videos/reel_stitch_06.mp4"/> 
                </video>
                </motion.div>
                <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setFxreel(!isFxreel)}
                style={{cursor: "pointer"}}
                >
                <motion.h2 layout className="shadow-xl rounded-lg p-4 text-black text-center font-bold max-w-min mx-auto">FxReel</motion.h2>
                {isFxreel && (
                  <motion.div className="font-monument shadow-xl text-center my-2 max-w-4xl mx-auto rounded-lg">
                    <p>As an aspiring technical artist. I spent 2023 at Seneca school of VFX for my post graduate studies.
                      While focusing on Houdini and fx work, I also learnt about compositing, surfacing and look dev from the
                      wonderful artists at Pixomondo and Seneca.
                    </p>
                    <p>
                      This video is a culminating result of my studies
                    </p>
                  </motion.div>
                )}
              </motion.div>
          </section>  
        <section>
        <motion.div 
          layout 
          onClick={() => setIsLove(!isLove)}
          animate={{ scale: isLove ? 1.2 : 1 }}
          style={{ cursor: 'pointer' }}

          transition={{ duration: 1, ease: "easeIn", }}
              
          className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
          whileInView={{"--rounded": "5%"}}
          initial={{ "--rounded": "20%" }}
          viewport={{amount: 0.5}}

          >
          
            <video className="w-full"
              loop
              autoPlay
              muted
            >
              <source src="videos/CLOV3.mp4"/> 
            </video>
          </motion.div>
          <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setLoveText(!isLoveText)}
                style={{ cursor: 'pointer' }}
                className=""
                >
                <motion.h2 layout className="shadow-xl rounded-lg p-4 text-black text-center font-bold max-w-min mx-auto">Love</motion.h2>
                {isLoveText && (
                  <motion.div className="font-monument shadow-xl text-center my-2 max-w-4xl mx-auto rounded-lg">
                    <p> A collaboration with Artist Drew Boyle aka Oyle, I focued on animation and simulation work
                      while oyle was in charge of look dev and world building
                    </p>
                    <p>
                      Drew / Oyle collaborator 
                    </p>
                  </motion.div>
                )}
              </motion.div>
          </section>
          <section>
        <motion.div 
          layout 
          onClick={() => setIsMachine(!isMachine)}
          animate={{ scale: isMachine ? 1.2 : 1 }}
          style={{ cursor: 'pointer' }}

          transition={{ duration: 1, ease: "easeIn", }}
              
          className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
          whileInView={{"--rounded": "5%"}}
          initial={{ "--rounded": "20%" }}
          viewport={{amount: 0.5}}
          >
            <video className="w-full"
              loop
              autoPlay
              muted
            >
              <source src="videos/CompressedFULLMACHINECUTV5.mp4"/> 
            </video>
          </motion.div>
          <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setMachineText(!isMachineText)}
                style={{ cursor: 'pointer' }}
                className=""
                >
                <motion.h2 layout className="shadow-xl p-4 text-black text-center rounded-lg font-bold max-w-min mx-auto">MACHINE</motion.h2>
                {isMachineText && (
                  <motion.div className="font-monument shadow-xl p-4 text-center my-2 max-w-4xl mx-auto rounded-lg">
                    <p> A collaboration with Artist Drew Boyle aka Oyle, I focued on animation and simulation work
                      while oyle was in charge of look dev and world building
                    </p>
                    <p>
                      Drew / Oyle collaborator 
                    </p>
                  </motion.div>
                )}
              </motion.div>
          </section>
          <section> 
          {/* <motion.div>
            <YoutTubeEmbed />
          </motion.div> */}
          {/* <div className="h-screen">
            <BikeTion />
          </div> */}
        </section>

        <section className="flex flex-wrap items-center justify-evenly w-full p-10">
          {/* <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/white.png"
            width={1080}
            height={1920}
            className="w-full h-auto"
          />
          </div> */}
          {/* <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/stairscleanup.png"
            width={1080}
            height={1920}
            className="w-full h-auto"
          />
          </div> */}
          {/* <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/updated_lighting_3.png"
            width={1080}
            height={1980}
            className="w-full h-auto"
          /> 
          </div> */}
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/wearesoback.png"
            width={3000}
            height={3000}
            className="w-full h-auto"
          /> 
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/circleFace.png"
            width={5000}
            height={5000}
            className="w-full h-auto"
          /> 
          </div>
          {/* <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/Messy.png"
            width={2000}
            height={3000}
            className="w-full h-auto"
          /> 
          </div> */}
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src="/images/Untitled.png"
            width={5000}
            height={5000}
            className="w-full h-auto"
          /> 
          </div>
        </section>

          <section>
          {/* <div className="h-screen">
            <Experience />
          </div> */}
        </section>
      </main>
    </div>
  )
}
