import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    return (
    <div>
        <div>
        <nav className="max-w-10xl mx-auto mt-20">
                <ul className="flex text-xl space-x-4 underline font-bold p-10">

                    <li>
                        <Link href="https://www.instagram.com/trouwsers/"> <span>instagram</span></Link>
                    </li>
                    <li>
                        <Link href="/dashboard"><span>email</span></Link>
                    </li>
                    <li>
                        <Link href="https://github.com/WUNISTUDIOS"><span>github</span></Link>
                    </li>

                </ul>
            </nav>
        </div>
        <Head>
        <title>cgidoggs's Dungeon</title>
        </Head>
        <main className="px-10">
        <section>
            <div className=" shadow-lg p-10 text-center">
            <h1 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r to-red-600 from-sky-400 p-4">digital designer</h1>
            <p className="text-5xl">Wuni / cgistudio, is a creative design studio based 
                in Toronto / Berlin specializing in developing identities for 
                local businesses through three dimensional motion graphics, 
                traditional graphic design, web design, and storytelling. 
                Wuni also develops educational content for maker spaces and other 
                S.T.E.A.M based learning environments. Leading the Wuni initiative 
                is<strong class="font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r to-red-600 from-sky-400 p-4"> Denzel Arthur, </strong> a digital artist with an interest in education, technology, and design</p>
            </div>
        </section>
        </main>
    </div>
    )
}
