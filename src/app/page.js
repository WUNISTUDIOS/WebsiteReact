import Head from "next/head";
// import { BrowserRouter, Routes, Route } from "react-router-dom"

import Experience from "../components/3dCanvas"

import Image from "next/image"
// import deved from "./public/dev-ed-wave.png"

// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Footer3d from "../components/footer3d";


export default function Home() {
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main className="bg-white px-10 ">
        <section className="min-h-0">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developed by cgidoggs</h1>
            <ul className="flex items-center">
              <li><a className="bg-gradient-to-r from-slate-500 to-zinc-200 text-white px-2 py-2 rounded-md ml-4" 
              href="https://www.linkedin.com/in/denzel-arthur-2b1685151/">Lockedin</a></li>
            </ul>
            <ul>
            <li><a className="bg-gradient-to-r from-slate-500 to-zinc-200 text-white px-2 py-2 rounded-md ml-4" 
              href="https://cgidoggs.world/">ClientWork</a></li>
              </ul>
            <ul>
            <li><a className="bg-gradient-to-r from-slate-500 to-zinc-200 text-white px-2 py-2 rounded-md ml-4" 
              href="https://github.com/WUNISTUDIOS">Github</a></li>
            </ul>
            <ul>
              <li><a className="bg-gradient-to-r from-slate-500 to-zinc-200 text-white px-2 py-2 rounded-md ml-4"
              href="/lov3">lov3</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="text-5xl py-2 text-slate-600">Ethos</h2>
            <h3 className="text-2xl py-2">computer graphics enthusiast</h3>
            <p className="text-md py-5 leading-8">
              i am digital artist and designer exporting all things possible in the thrid dimention.
              i belive in optimization and fedelity, all though those words normally cancel each other out,
              i believe there to be a happy medium.
              My work revolves around finding that medium
            </p>
          </div>
          <div>
            <h1>webgl content</h1>
            <Experience />
          </div>
          {/* <div>
            <Image src={deved} layout="fill"/>
          </div> */}
        </section>
        <section>
          <div className=" shadow-lg p-10 text-center">
            <h3 className="text-3xl py-1">Working on Currently</h3>
            <p className="text-md py-2 leading-8 text-blue-800">
              sharpening my dev skills with <span className="text-slate-500">python</span> and webgl / react with javascript. Vex with Houdini
            </p>
          </div>
          <div>
            <Footer3d/>
          </div>
        </section>
      </main>
    </div>
  )
}
