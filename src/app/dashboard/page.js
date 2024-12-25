"use client"
import Head from "next/head";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link";
import AnimatedText, { AnimatedText02 } from "@/components/text-animation";
import { motion } from "framer-motion"
import { useState } from "react"

import BikeTion from "../../components/3dCanvas"
import YoutTubeEmbed from "@/components/loveVideoComp"
import Home from "../page"



export default function dashboard() {
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
      <main>
        <section>
        <div className="flex items-start justify-start ax-w-10xl mx-auto mt-20 ">
          <AnimatedText />
        </div>
        </section>
        <section>
          <div className="flex relative gap-2 w-fit  mx-auto overflow-hidden">
            <video
              className="w-1/2"
              loop
              autoPlay
              muted
            >
              <source src="videos/ballons.mp4"/>
            </video>
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
              <source src="videos/SmallnomusicAJBlackSkatingV2000_1.mp4"/>
            </video>
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
        <section>
        <div className="max-w-10xl mx-auto ">
          <AnimatedText />
        </div>
        </section>
        <section>
              <motion.div 
              layout 
              onClick={() => setIsOpen(!isOpen)}
              animate={{ scale: isOpen ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ cursor: 'pointer' }}
              >
                <div className="relative w-[90%] max-w-10xl mx-auto my-10 rounded-xl overflow-hidden">
                <video className="w-full"
                  loop
                  autoPlay
                  muted
                >
                  <source src="videos/reel_stitch_06.mp4"/> 
                </video>
                </div>
                </motion.div>
                <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setFxreel(!isFxreel)}
                style={{cursor: "pointer"}}
                className=""
                >
                <motion.h2 layout className="shadow-xl rounded-lg p-4 text-black text-center font-bold max-w-min mx-auto">FxReel</motion.h2>
                {isFxreel && (
                  <motion.div className="shadow-xl  text-center my-2 max-w-4xl mx-auto rounded-lg">
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
          transition={{ type: 'spring', stiffness: 400 }}
          style={{ cursor: 'pointer' }}
          >
          <div className="relative w-[90%] max-w-10xl mx-auto my-10 rounded-xl overflow-hidden">
            <video className="w-full"
              loop
              autoPlay
              muted
            >
              <source src="videos/LOV3.mp4"/> 
            </video>
          </div>
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
                  <motion.div className="shadow-xl text-center my-2 max-w-4xl mx-auto rounded-lg">
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
          transition={{ type: 'spring', stiffness: 400 }}
          style={{ cursor: 'pointer' }}
          >
          <div className="relative w-[90%] max-w-10xl mx-auto my-10 rounded-xl overflow-hidden">
            <video className="w-full"
              loop
              autoPlay
              muted
            >
              <source src="videos/CompressedMACHINEPRECUTV5.5.mp4"/> 
            </video>
          </div>
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
                  <motion.div className="shadow-xl p-4 text-center my-2 max-w-4xl mx-auto rounded-lg">
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
      </main>
    </div>
  )
}
