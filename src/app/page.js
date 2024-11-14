import Head from "next/head"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Link from "next/link"

import Experience from "../components/character.js"
import Footer3d from "../components/footer3d"

import Image from "next/image"
// import tshirt_idea from "./tshirt_idea.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>cgidoggs's Dungeon</title>
      </Head>
      <main className="bg-blue px-10">

        <section>
          <div className="h-screen">
            <Footer3d/>
          </div>
          {/* <div>
            <Image src={deved} layout="fill"/>
          </div> */}
        </section>

        <section className="min-h-8 p-4">
          <div className=" shadow-lg p-10 text-center">
            <h3 className="text-3xl py-1">meet some of my friends!</h3>
          </div>
          </section>

          <section>
          {/* <div className="h-screen">
            <Experience />
          </div> */}
        </section>
      </main>
    </div>
  )
}
