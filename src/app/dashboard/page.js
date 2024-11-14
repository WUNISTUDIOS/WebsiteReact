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
  const handleClick = () => setIsClicked(!isClicked)
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main>
        <section>
        <div className="max-w-10xl mx-auto mt-20">
          <AnimatedText />
        </div>
        </section>
        <section>
          <div className="flex relative gap-2 w-fit max-w-10xl my-10 max-w-7xl mx-auto overflow-hidden">
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
              <source src="videos/AJSkating.mp4"/>
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
        <motion.div 
          layout 
          onClick={() => setIsOpen(!isOpen)}
          animate={{ scale: isOpen ? 1.1 : 1 }}
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
          <motion.div>
            <motion.h2 className="shadow-lg p-2 text-center my-8 max-w-xl mx-auto bg-slate-600 rounded-lg"> Fx Reel</motion.h2>
            <motion.div className="shadow-lg p-5 text-center max-w-4xl mx-auto bg-slate-600 rounded-lg">
              <p>is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.
              </p>
            </motion.div>
          </motion.div>
        </section>
        <section>
        <motion.div 
          layout 
          onClick={() => setIsOpen(!isOpen)}
          animate={{ scale: isOpen ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
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
