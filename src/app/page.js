"use client"
import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link"
// import AnimatedText, { AnimatedText02 } from "@/components/text-animation"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Video from "next-video"

import Experience from "../components/character.js"
import Footer3d from "../components/footer3d"

import Image from "next/image"
import OrbShader from "@/components/OrbShader.js"



export default function Home() {
const [isOpen, setIsOpen] = useState(false)
const [isFxreel, setFxreel] = useState(false)

const [isLove, setIsLove] = useState(false)
const [isLoveText, setLoveText] = useState(false)

const [isMachine, setIsMachine] = useState(false)
const [isMachineText, setMachineText] = useState(false)
const handleClick = () => setIsClicked(!isClicked)

const videoRef = useRef(null)
const [isMuted, setIsMuted] = useState(true)
const handleVideoClick = () => {
  const newMutedState = !isMuted
  setIsMuted(newMutedState)

  if(videoRef.current){
    videoRef.current.muted = newMutedState
  }
}

const MachineRef = useRef(null)
const [isMachineMuted, setMachineIsMuted] = useState(true)
const handleMachineVideoClick = () => {
  const newMachineMutedState = !isMachineMuted
  setMachineIsMuted(newMachineMutedState)

  if(MachineRef.current){
    MachineRef.current.muted = newMachineMutedState
  }
}

  return (
    <div className="">
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main >
          {/* <section>
            <div className="flex items-start justify-start ax-w-10xl mx-auto mt-20 my-10 ">
              <AnimatedText />
            </div>
        </section> */}
        <section>
          {/* <div className="flex max-h-min gap-2 w-fit max-w-[98%] rounded-lg mx-auto"> */}
          <div className="flex flex-wrap items-start  justify-between m-5 my-10 h-full">
            <video
              className="w-1/2"
              className="w-1/2"
              controlsList="nofullscreen nodownload noremoteplayback"
              loop
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/AL_Season_04.mp4"
                type="video/mp4"/>
            </video>
            <video
              className="w-1/2"
              className="w-1/2"
              controlsList="nofullscreen nodownload noremoteplayback"
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/MACHINETRAILER5.mp4"
                type="video/mp4"/>
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
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              loop
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/story_ornament.mp4"
                type="video/mp4"/>
            </video>
            <video 
              className="w-1/2"
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/Lov3IG.mp4"
                type="video/mp4"/>
            </video>
          </div>
        </section>
        {/* <section>
        <div>
          <AnimatedText />
        </div>
        </section> */}
        <section>
          <div className=" py-10">
            {/* <Footer3d/> */}
            <OrbShader />
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
                  controlsList="nofullscreen nodownload noremoteplayback"
                  playsInline
                >
                  <source src="https://d6wod28es4wuu.cloudfront.net/reel_stitch_06.mp4"
                    type="video/mp4"/> 
                </video>
                </motion.div>
                <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setFxreel(!isFxreel)}
                style={{cursor: "pointer"}}
                >
                <motion.h2 
                  layout='position'
                  transition={{ duration: 1, ease: "easeInOut"}} 
                  className="shadow-xl rounded-lg text-white p-4 text-center font-bold max-w-min mx-auto border-2 border-red-800"
                >
                  FxReel
                </motion.h2>
                {isFxreel && (
                  <motion.div
                    layout="position"
                    transition={{layout: {duration: 1}}}
                    className="font-monument shadow-xl border-2 border-red-800 text-white text-center mr-5 ml-5 my-5 p-5 mx-auto rounded-lg "
                    style={{cursor: "pointer"}}
                  >
                    
                    <p className='p-2'>To further improve as a technical artist, 
                      I spent 2023 at Seneca school of VFX in their post graduate program.<br></br>
                    With a special interest in effects simulation, I learnt from industry leading artists, 
                    the full visual effects pipeline used for Hollywood productions.<br></br> 
                    From matchmoving to tool building. I left the program with a renewed vigor and a 
                    deeper understanding of computer graphics.
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
              ref={videoRef}
              loop
              autoPlay
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              muted={isMuted}
              onClick={handleVideoClick}
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/HB2_LOVE.mp4"
                type="video/mp4"
              /> 
            </video>
          </motion.div>
          <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setLoveText(!isLoveText)}
                style={{ cursor: 'pointer' }}
                >
                <motion.h2 layout className="shadow-xl border-2 border-red-800 text-white rounded-lg p-4 text-center  font-bold max-w-min mx-auto">Lov3</motion.h2>
                {isLoveText && (
                  <motion.div className="font-monument shadow-xl border-2 border-red-800 text-white text-center mr-5 ml-5 my-5 mx-auto p-5 rounded-lg">
                    <p className='p-2'> A collaboration with artist and director Drew Boyle to produce a full length - full cg 
                      music for LOV3. His attention to detail along with his skills in Look development meshed 
                      perfection with my technical animation and fx skills.<br></br> 
                      End result is cohesive and detailed world that follows our protagonist on his epic journey to 
                      the “northstar” 
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
          animate={{ scale: isMachine ? 1.1 : 1 }}
          style={{ cursor: 'pointer' }}

          transition={{ duration: 1, ease: "easeIn", }}
              
          className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
          whileInView={{"--rounded": "5%"}}
          initial={{ "--rounded": "20%" }}
          viewport={{amount: 0.5}}
          >
            <video className="w-full"
              ref={MachineRef}
              loop
              autoPlay
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              muted={isMachineMuted}
              onClick={handleMachineVideoClick}
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/MachinecutFullNcIGV8_2.mp4"
              type="video/mp4"/> 
            </video>
          </motion.div>
          <motion.div 
                layout="position"
                transition={{layout: {duration: 1}}}
                onClick={() => setMachineText(!isMachineText)}
                style={{ cursor: 'pointer' }}
                className=""
                >
                <motion.h2 layout className="shadow-xl p-4 text-center border-2 border-red-800 text-white rounded-lg font-bold max-w-min mx-auto">MACHINE</motion.h2>
                {isMachineText && (
                  <motion.div className="font-monument shadow-xl p-4 text-center border-2 border-red-800 text-white mr-5 ml-5 my-5 mx-auto rounded-lg">
                    <p> Commissioned by Angel De La Torre, machine is a full length cg feature for his song machine. 
                    </p>
                  </motion.div>
                )}
              </motion.div>
          </section>
          <section> 
          {/* <motion.div>
            <YoutTubeEmbed />b
          </motion.div> */}
          {/* <div className="h-screen">
            <BikeTion />
          </div> */}
        </section>

        <section className="flex flex-wrap items-center justify-start w-full p-10">
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
        <div className="flex flex-col items-center justify-center text-center">
                <p className="font-extralight text-slate-500 text-sm"> 
                    select graphic work in collaboration with Lewy180
                </p>
            </div>

          <section>
          {/* <div className="h-screen">
            <Experience />
          </div> */}
        </section>
      </main>
    </div>
  )
}
