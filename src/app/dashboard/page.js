import Head from "next/head";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link";


import BikeTion from "../../components/3dCanvas"
import YoutTubeEmbed from "@/components/loveVideoComp"
import Home from "../page"

import image from "next/image"


export default function dashboard() {
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main className="bg-blue px-10 ">
        <section className="h-screen">
        <header className="navbar">
        <div className="navebar-start">
          <Link href="/">LOGO</Link>
        </div>
        <div className="navvar-end">
          <div className="px-3"><Link href="/dashboard">Lov3</Link></div>
          <div className="px-3">Github</div>
          <div className="px-3">LockedIn</div>
        </div>
      </header>
          {/* <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">
              developed by cgidoggs <Link href="/Home"> Home</Link>
            </h1>
            <ul className="flex items-center">
              <li><a className="from-slate-500 to-zinc-200 text-white px-2 py-2 rounded-md ml-4" 
              href="https://www.linkedin.com/in/denzel-arthur-2b1685151/">Lockedin</a></li>
            </ul>
            <ul>
            <li><a
              href="https://cgidoggs.world/">ClientWork</a></li>
              </ul>
            <ul>
            <li><a
              href="https://github.com/WUNISTUDIOS">Github</a></li>
            </ul>
            <ul>
              <li><a
              href="/dashboard">lov3</a></li>
            </ul>
          </nav> */}
          <div>
            <YoutTubeEmbed />
          </div>
          <div className="h-screen">
            <BikeTion />
          </div>
          {/* <div>
            <Image src={deved} layout="fill"/>
          </div> */}
        </section>
      </main>
    </div>
  )
}
