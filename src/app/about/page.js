import Head from "next/head"
import Link from "next/link"
import Image from "next/image"



export default function AboutPage() {
    return (
    <div>
        <div>
        <nav className=" flex mt-20 justify-center pt-20">
                <ul className="flex text-xl space-x-5 underline font-bold">

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
        <main>
        <section>
            <div className=" relative flex flex-wrap justify-center shadow-lg p-5 text-center">
            <h1 className="text-transparent xl:text-8xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-red-600 to-gray-950 py-5">digital designer</h1>
            <p className="xl:text-5xl md:text-4xl text-lg">Wuni / cgistudio, is a creative design studio based 
                in Toronto / Berlin specializing in developing identities for 
                local businesses through three dimensional motion graphics, 
                traditional graphic design, web design, and storytelling. 
                Wuni also develops educational content for maker spaces and other 
                S.T.E.A.M based learning environments. Leading the Wuni initiative 
                is<strong class="font-semibold text-transparent text-3xl xl:text-6xl bg-clip-text bg-gradient-to-r to-red-600 from-gray-950 p-4"> Denzel Arthur, </strong> a digital artist with an interest in education, technology, and design</p>
            </div>
        </section>
        <section className="flex flex-wrap items-center align-center h-1/2 m-5">
        <Image
            src="/images/working_outside.png"
            width={2550}
            height={1785}
          />
        </section>
        </main>
    </div>
    )
}
