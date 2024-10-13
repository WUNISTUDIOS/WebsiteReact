import Head from "next/head";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link";


import BikeTion from "../../components/3dCanvas"
import YoutTubeEmbed from "@/components/loveVideoComp"
import Home from "../page"



export default function dashboard() {
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main>
      <section>
          <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
            <video className="w-full"
              loop
              autoPlay
              muted
            >
             <source src="videos/reel_stitch_06.mp4"/> 
            </video>
          </div>
        </section>
        <section>
          <div>
            <YoutTubeEmbed />
          </div>
          {/* <div className="h-screen">
            <BikeTion />
          </div> */}
        </section>
      </main>
    </div>
  )
}
