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
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/WEB2025ReelCompressed.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isOpen}
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
              Seneca school of VFX in their post graduate program.<br></br>
              With a special interest in effects simulation, I learnt from
              industry leading artists, the full visual effects pipeline
              used for Hollywood productions.<br></br>
              From matchmoving to tool building.
            </p>
            <p className="text-sm md:text-base">This video is a culminating result of my studies</p>
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
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/Weblov3hb.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isLove}
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
              a full length - full CG music video for LOV3. <br></br> His
              attention to detail along with his skills in Look development
              meshed perfectly with my technical animation and fx skills.
              <br></br>
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
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/WEBMACHINECUT_FULL_NC_V8_2.mp4"
              className="w-full"
              threshold={1.0}
              isAnimated={isMachine}
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
            whileInView={{ "--rounded": "5%" }}
            initial={{ "--rounded": "20%" }}
            viewport={{ amount: 0.5 }}
          >
            <LazyVideo
              src="https://d6wod28es4wuu.cloudfront.net/OBFULLCUT4WEB.mp4"
              className="w-full"
              threshold={0.2}
              isAnimated={isOB}
            />
          </motion.div>
          <AnimatedTextBox
            isOpen={isOBText}
            onToggle={() => setOBText(!isOBText)}
            buttonComponent={<OBButton className="flex justify-center mx-auto w-1/4 md:w-1/6" />}
            borderColor="border-white-800"
          >
            <p>
              {" "}
              A compilation project between artists from all around the
              world.<br></br> Open Borders is a techno, breakcore and
              ambient journey connecting emerging talents and their love for
              music.<br></br> My contribution is an animated short that
              captures the essence of this album involved.
            </p>
          </AnimatedTextBox>
        </section>
        <div className=" py-10">
          {/* <Footer3d/> */}
          <OrbShader />
        </div>
        <section className="flex flex-wrap items-center justify-start w-full p-10">
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
              src={
                "https://d6wod28es4wuu.cloudfront.net/circleFaceCompressed.webp"
              }
              width={5000}
              height={5000}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
            <Image
              src={
                "https://d6wod28es4wuu.cloudfront.net/UntitledCompressed.webp"
              }
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
      </main>
    </div>
  );
}
