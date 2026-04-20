"use client"
import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import AnimatedText, { AnimatedText02 } from "@/components/text-animation"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

import Image from "next/image"
import OrbShader from "@/components/OrbShader.js"
import LazyVideo from "@/components/LazyLoading.js"
import ClickToPlayVideo from "@/components/ui/videoPlayer"
import RedMetalButton from "@/components/ui/customFXReelButton.js"
import AnimatedTextBox from "@/components/ui/AnimTextBox"
import { LoveButton, MachineButton, OBButton } from "@/components/ui/SvgCustomButtons"

import ImageWorksCard from "@/components/ui/ImageWorksCard"




export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFxreel, setFxreel] = useState(false)

  const [isLove, setIsLove] = useState(false)
  const [isLoveText, setLoveText] = useState(false)

  const [isMachine, setIsMachine] = useState(false)
  const [isMachineText, setMachineText] = useState(false)

  const [isOB, setIsOB] = useState(false)
  const [isOBText, setOBText] = useState(false)

  return (
    <div className="">
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main>
        {/* <section>
            <div className="flex items-start justify-start ax-w-10xl mx-auto mt-20 my-10 ">
              <AnimatedText />
            </div>
        </section> */}
        <section>
          {/* <div className="flex max-h-min gap-2 w-fit max-w-[98%] rounded-lg mx-auto"> */}
          <div className="flex flex-wrap items-start justify-between m-1 h-full">
            <video
              className="w-1/2"
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              loop
              autoPlay
              muted
              disablePictureInPicture
            >
              <source
                src="https://d6wod28es4wuu.cloudfront.net/AL_Season_04.mp4"
                type="video/mp4"
              />
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
              <source
                src="https://d6wod28es4wuu.cloudfront.net/MACHINETRAILER5WEB.mp4"
                type="video/mp4"
              />
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
              <source
                src="https://d6wod28es4wuu.cloudfront.net/story_ornament.mp4"
                type="video/mp4"
              />
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
              <source
                src="https://d6wod28es4wuu.cloudfront.net/WebPhone_AJFullSequence_2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <section>
          <motion.div
            layout="position"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ scale: isOpen ? 1.02 : 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            style={{ cursor: "pointer" }}
            whileInView={{ "--rounded": "0%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/V1cmp_WEB2025ReelFullRes.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isOpen}
              poster={"https://d6wod28es4wuu.cloudfront.net/ReelCover.webp"}
              aspectRatio="16/9"
            />
          </motion.div>
          <AnimatedTextBox
            isOpen={isFxreel}
            onToggle={() => setFxreel(!isFxreel)}
            buttonComponent={<RedMetalButton className="flex justify-center mx-auto w-1/4 md:w-1/6" />}
            borderColor="border-white-800"
          >
            <p className="p-2 text-sm md:text-base">
              My Fx reel under the guidance of the
              Seneca school of VFX in their post graduate program.
              With a special interest in effects simulation, I learnt from
              industry leading artists, the full visual effects pipeline
              used for Hollywood productions.
              From matchmoving to tool building.
              This video is a culminating result of my studies
            </p>
          </AnimatedTextBox>
        </section>
        <section>
          <motion.div
            layout
            onClick={() => setIsLove(!isLove)}
            animate={{ scale: isLove ? 1.02 : 1 }}
            style={{ cursor: "pointer" }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "0%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/Weblov3hb.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isLove}
              poster={"https://d6wod28es4wuu.cloudfront.net/LoveCover.webp"}
              aspectRatio="16/9"
            />
          </motion.div>
          <AnimatedTextBox
            isOpen={isLoveText}
            onToggle={() => setLoveText(!isLoveText)}
            buttonComponent={<LoveButton className="flex justify-center mx-auto w-1/4 md:w-1/6" />}
            borderColor="border-white-800"
          >
            <p className="p-2">
              {" "}
              A collaboration with artist and director Drew Boyle to produce
              a full length - full CG music video for LOV3. His
              attention to detail along with his skills in Look development
              meshed perfectly with my technical animation and fx skills.
              End result is cohesive and detailed world that follows our
              protagonist on his epic journey to the “Northstar”
            </p>
            <p>Drew / Oyle collaborator</p>
          </AnimatedTextBox>
        </section>
        <section>
          <motion.div
            layout
            onClick={() => setIsMachine(!isMachine)}
            animate={{ scale: isMachine ? 1.02 : 1 }}
            style={{ cursor: "pointer" }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "0%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/WEBMACHINECUT_FULL_NC_V8_2.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isMachine}
              poster={"https://d6wod28es4wuu.cloudfront.net/MachineCover.webp"}
            />
          </motion.div>
          <AnimatedTextBox
            isOpen={isMachineText}
            onToggle={() => setMachineText(!isMachineText)}
            buttonComponent={<MachineButton className="flex justify-center mx-auto w-1/4 md:w-1/6" />}
            borderColor="border-white-800"
          >
            <p>
              {" "}
              Commissioned by Angel De La Torre, MACHINE is a self produced,
              full length CG feature for MACHINE.
            </p>
          </AnimatedTextBox>
        </section>
        <section>
          <motion.div
            layout
            onClick={() => setIsOB(!isOB)}
            animate={{ scale: isOB ? 1.02 : 1 }}
            style={{ cursor: "pointer" }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative w-[95%] max-w-10xl mx-auto my-10 variable-rounded overflow-hidden"
            whileInView={{ "--rounded": "0%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/OBFULLCUT4WEB.mp4"
              className="w-full"
              threshold={0.2}
              isAnimated={isOB}
              poster={"https://d6wod28es4wuu.cloudfront.net/OBCover.webp"}
            />
          </motion.div>
          <AnimatedTextBox
            isOpen={isOBText}
            onToggle={() => setOBText(!isOBText)}
            buttonComponent={<OBButton className="flex justify-center mx-auto w-fit" />}
            borderColor="border-white-800"
          >
            <p>
              {" "}
              A compilation project between artists from all around the
              world. Open Borders is a techno, breakcore and
              ambient journey connecting emerging talents and their love for
              music. My contribution is an animated short that
              captures the essence of this album involved.
            </p>
          </AnimatedTextBox>
        </section>
        {/* <div className=" py-10 ">
          <motion.div
            layout
            style={{ cursor: "pointer" }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ amount: 0.5 }}>
            <OrbShader />
          </motion.div>
        </div> */}
        {/* <section className='flex flex-wrap justify-evenly gap-5 text-white'>
          <div className='lg:w-2/5 p-10'>
            <ImageWorksCard
              href="/ImageWorks"
              imageSrc="https://d6wod28es4wuu.cloudfront.net/bugCloseuppsd.webp"
            title="Biblically accurate slop harvester"
            // description='Design - Development'
            />
            </div>

          <div className='lg:w-2/5 p-10'>
            <ImageWorksCard
              href="/ImageWorks"
              imageSrc="https://d6wod28es4wuu.cloudfront.net/UntitledCompressed.webp"
            title="Unintled explorations of blend modes"
            description='in collaboration with Lewy180'
            />
          </div>
        </section> */}
      </main>
    </div>
  )
}
