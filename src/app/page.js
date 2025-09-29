"use client"
import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import AnimatedText, { AnimatedText02 } from "@/components/text-animation"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

import Image from "next/image"
import OrbShader from "@/components/OrbShader.js"
import LazyVideo from "@/components/LazyLoading.js"
import RedMetalButton from "@/components/ui/customFXReelButton.js"
import { LoveButton, MachineButton, OBButton } from "@/components/ui/SvgCustomButtons"




export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFxreel, setFxreel] = useState(false)

  const [isLove, setIsLove] = useState(false)
  const [isLoveText, setLoveText] = useState(false)

  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const handleVideoClick = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)

    if (videoRef.current) {
      videoRef.current.muted = newMutedState
    }
  }

  const [isMachine, setIsMachine] = useState(false)
  const [isMachineText, setMachineText] = useState(false)

  const MachineRef = useRef(null)
  const [isMachineMuted, setMachineIsMuted] = useState(true)
  const handleMachineVideoClick = () => {
    const newMachineMutedState = !isMachineMuted
    setMachineIsMuted(newMachineMutedState)

    if (MachineRef.current) {
      MachineRef.current.muted = newMachineMutedState
    }
  }

  const [isOB, setIsOB] = useState(false)
  const [isOBText, setOBText] = useState(false)

  const OBRef = useRef(null)
  const [isOBMuted, setOBIsMuted] = useState(true)
  const handleOBVideoClick = () => {
    const newOBMutedState = !isOBMuted
    setOBIsMuted(newOBMutedState)

    if (OBRef.current) {
      OBRef.current.muted = newOBMutedState
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
          <div className="flex flex-wrap items-start justify-between m-1 my-10 h-full">
            <video
              className="w-1/2"
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/AL_Season_04.mp4"
                type="video/mp4" />
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
              <source src="https://d6wod28es4wuu.cloudfront.net/MACHINETRAILER5WEB.mp4"
                type="video/mp4" />
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
              autoPlay
              muted
              disablePictureInPicture
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/story_ornament.mp4"
                type="video/mp4" />
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
              <source src="https://d6wod28es4wuu.cloudfront.net/WebPhone_AJFullSequence_2.mp4"
                type="video/mp4" />
            </video>
          </div>
        </section>
        {/* <section>
        <div>
          <AnimatedText />
        </div>
        </section> */}
        <section>
          {/* <div className="flex flex-col items-center justify-center text-center">
            <p className="font-extralight text-slate-500 text-sm">
              Right click videos for player controls
            </p>
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
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            {/* <video className="w-full"
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              autoPlay
              loop
              muted
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/ReelStitch_08hb.mp4"
                type="video/mp4" />
            </video> */}
            <LazyVideo 
              src = "https://d6wod28es4wuu.cloudfront.net/reel_stitch_9.mp4"
              className = "w-full"
              threshold = {0.2}
            />
          </motion.div>
          <motion.div
            layout="position"
            transition={{ layout: { duration: 1 } }}
            onClick={() => setFxreel(!isFxreel)}
            style={{ cursor: "pointer" }}
          >
            {/* <motion.h2
              layout='position'
              transition={{ duration: 1, ease: "easeInOut" }}
              className="shadow-xl rounded-lg text-white p-4 text-center font-bold max-w-min mx-auto border-2 border-red-800"
            >
              FxReel
            </motion.h2> */}

            <RedMetalButton className='flex flex-wrap justify-evenly mx-auto w-52 max-w-[100px] md:max-w-[200px]'/>

            {isFxreel && (
              <motion.div
                layout="position"
                transition={{ layout: { duration: 1 } }}
                className="font-monument shadow-xl border-2 border-red-800 text-white text-center mr-5 ml-5 my-5 p-5 mx-auto rounded-lg "
                style={{ cursor: "pointer" }}
              >

                <p className='p-2'>To further improve as a technical artist,
                  I spent 2023 at Seneca school of VFX in their post graduate program.<br></br>
                  With a special interest in effects simulation, I learnt from industry leading artists,
                  the full visual effects pipeline used for Hollywood productions.<br></br>
                  From matchmoving to tool building, I left the program with a renewed vigor and a
                  deeper understanding of computer graphics and programming.
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
            animate={{ scale: isLove ? 1.05 : 1 }}
            style={{ cursor: 'pointer' }}

            transition={{ duration: 1, ease: "easeIn", }}

            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}

          >

            {/* <video className="w-full"
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
            </video> */}
            <LazyVideo 
              src = "https://d6wod28es4wuu.cloudfront.net/CLOV3.mp4"
              className = "w-full"
              threshold = {0.2}
            />
          </motion.div>
          <motion.div
            layout="position"
            transition={{ layout: { duration: 1 } }}
            onClick={() => setLoveText(!isLoveText)}
            style={{ cursor: 'pointer' }}
          >
              <LoveButton className='flex flex-wrap justify-evenly mx-auto w-52 max-w-[100px] md:max-w-[200px]'/>
            {/* <motion.h2 layout className="shadow-xl border-2 border-red-800 text-white rounded-lg p-4 text-center  font-bold max-w-min mx-auto">Lov3</motion.h2> */}
            {isLoveText && (
              <motion.div className="font-monument shadow-xl border-2 border-red-800 text-white text-center mr-5 ml-5 my-5 mx-auto p-5 rounded-lg">
                <p className='p-2'> A collaboration with artist and director Drew Boyle to produce a full length - full CG
                  music video for LOV3. <br></br> His attention to detail along with his skills in Look development meshed
                  perfectly with my technical animation and fx skills.<br></br>
                  End result is cohesive and detailed world that follows our protagonist on his epic journey to
                  the “Northstar”
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
            animate={{ scale: isMachine ? 1.05 : 1 }}
            style={{ cursor: 'pointer' }}

            transition={{ duration: 1, ease: "easeIn", }}

            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
          <LazyVideo 
              src = "https://d6wod28es4wuu.cloudfront.net/WEBMACHINECUT_FULL_NC_V8_2.mp4"
              className = "w-full"
              threshold = {0.2}
          />
            {/* <video className="w-full"
              ref={MachineRef}
              loop
              autoPlay
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              muted={isMachineMuted}
              onClick={handleMachineVideoClick}
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/MachinecutFullNcIGV8_2.mp4"
                type="video/mp4" />
            </video> */}
          </motion.div>
          <motion.div
            layout="position"
            transition={{ layout: { duration: 1 } }}
            onClick={() => setMachineText(!isMachineText)}
            style={{ cursor: 'pointer' }}
            className=""
          >
              <MachineButton className='flex flex-wrap justify-evenly mx-auto w-52 max-w-[100px] md:max-w-[200px]'/>
            {/* <motion.h2 layout className="shadow-xl p-4 text-center border-2 border-red-800 text-white rounded-lg font-bold max-w-min mx-auto">MACHINE</motion.h2> */}
            {isMachineText && (
              <motion.div className="font-monument shadow-xl p-4 text-center border-2 border-red-800 text-white mr-5 ml-5 my-5 mx-auto rounded-lg">
                <p> Commissioned by Angel De La Torre, MACHINE is a self produced, full length CG feature for MACHINE.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
        <section>
          <motion.div
            layout
            onClick={() => setIsOB(!isOB)}
            animate={{ scale: isOB ? 1.05 : 1 }}
            style={{ cursor: 'pointer' }}

            transition={{ duration: 1, ease: "easeIn", }}

            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
          <LazyVideo 
              src = "https://d6wod28es4wuu.cloudfront.net/OBFULLCUT4WEB.mp4"
              className = "w-full"
              threshold = {0.2}
          />
            {/* <video className="w-full"
              ref={OBRef}
              loop
              autoPlay
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              muted={isOBMuted}
              onClick={handleOBVideoClick}
            >
              <source src="https://d6wod28es4wuu.cloudfront.net/03_3%20OB_insntagram.mp4"
                type="video/mp4" />
            </video> */}
          </motion.div>
          <motion.div
            layout="position"
            transition={{ layout: { duration: 1 } }}
            onClick={() => setOBText(!isOBText)}
            style={{ cursor: 'pointer' }}
            className=""
          >
          <OBButton className='flex flex-wrap justify-evenly mx-auto w-52 max-w-[100px] md:max-w-[200px]'/>
            {/* <motion.h2 layout className="shadow-xl p-4 text-center border-2 border-red-800 text-white rounded-lg font-bold max-w-min mx-auto">Open Borders</motion.h2> */}
            {isOBText && (
              <motion.div className="font-monument shadow-xl p-4 text-center border-2 border-red-800 text-white mr-5 ml-5 my-5 mx-auto rounded-lg">
                <p> A compilation project between artists from all around the world.<br></br> Open Borders is a techno, breakcore and ambient journey
                  connecting emerging talents and their love for music.<br></br> My contribution is an animated short that captures the essence of this album
                  involved.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
                            <div className=" py-10">
            {/* <Footer3d/> */}
            <OrbShader />
          </div>
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
              src={"https://d6wod28es4wuu.cloudfront.net/WebWearesoback.webp"}
              width={3000}
              height={3000}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
            <Image
              src={"https://d6wod28es4wuu.cloudfront.net/circleFaceCompressed.webp"}
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
              src={"https://d6wod28es4wuu.cloudfront.net/UntitledCompressed.webp"}
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
