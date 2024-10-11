import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link"

import Experience from "../components/character.js"
import Footer3d from "../components/footer3d"

import image from "next/image"
// import tshirt_idea from "./tshirt_idea.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main className="bg-blue px-10 ">
        <section className="min-h-0">
          <div>
            <h3 className="text-2xl text-center py-10">computer graphics enthusiast</h3>
            <p className="text-md py-10 text-center leading-8">
              A digital artist and designer exploring all things possible in the thrid dimention.
              Optimization and fidelity, welcome to my sandbox
            </p>
          </div>
          <div className="min-h-0">
            <Experience />
          </div>
          {/* <div>
            <Image src={deved} layout="fill"/>
          </div> */}
        </section>
        <section className="min-h-full">
          <div className=" shadow-lg p-10 text-center">
            <h3 className="text-3xl py-1">Working on Currently</h3>
            <p className="text-md py-2 leading-8 text-blue-800">
              sharpening my dev skills with <span className="text-slate-500">python</span> and webgl / react with javascript. Vex with Houdini
            </p>
          </div>
          
          <div className="h-screen">
            <Footer3d/>
            <p className="text-md py-5 leading-8">
              this website is a part of my many experimentations, a look into my process work if you will.
              A construction site rather than a gallery. The web is perfect medium to explore all things media and interractivity, it a democratic and opensource environment filled with endless possibilties, just like a game engine or cinema.
              the source code for this website is hosted on my github if you so choose to learn and explore the amazing would wide web
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
