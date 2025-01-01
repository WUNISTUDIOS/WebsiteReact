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
            <div className=" relative flex flex-wrap justify-center shadow-sm p-5 text-center">
            <h1 className="text-transparent xl:text-8xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-red-600 to-gray-950 py-5">digital designer</h1>
            <p className="xl:text-5xl md:text-4xl text-lg">Wuni / cgistudio, is a creative design studio based 
                in Toronto / Berlin specializing in developing identities for 
                local businesses through three dimensional motion graphics, 
                traditional graphic design, web design, and storytelling. 
                Wuni also develops educational content for maker spaces and other 
                S.T.E.A.M based learning environments. Leading the Wuni initiative 
                is<strong class="font-semibold text-transparent text-3xl xl:text-6xl bg-clip-text bg-gradient-to-r to-red-600 from-gray-950 p-1">Denzel Arthur,</strong>a digital artist with an interest in education, technology, and design</p>
            </div>
        </section>
        <section className="flex flex-wrap items-center align-center h-1/2 m-5">
        <Image
            src="/images/working_outside.png"
            width={2550}
            height={1785}
        />
        </section>
        <div className="flex flex-col items-center justify-center text-center">
                <p className="font-extralight text-sm"> 
                    render for active labour print magazine
                </p>
            </div>
        <section className='flex flex-col p-5'>
            <h1 className='relative font-bold text-6xl'> Clients</h1>
            <hr></hr>
            <br></br>
            <p className='font-extralight xl:text-5xl md:text-4xl text-lg'>
                Spencer Badu
                <br></br>
                <hr></hr>
                Crux Kitchen
                <br></br>
                <hr></hr>
                Leafythings
                <br></br>
                <hr></hr>
                Kalibur+
                <br></br>
                <hr></hr>
                Oligarchy
                <hr></hr>
            </p>
        </section>
        {/* <section className="flex flex-wrap items-center justify-evenly w-full p-5">
            <div className="w-[5%]">
                <Image
                src="/images/sidefx_badge_flat.png"
                width={2084}
                height={2084}
                // className="w-full h-auto"
            /> 
            </div>
            <div className="w-1/4 sm:w-1/6 lg:w-1/6 ">
                <Image
                src="/images/blender_logo_socket.png"
                width={1800}
                height={550}
                // className="w-full h-auto"
                /> 
            </div>
            <div className="w-[7%] ">
                <Image
                src="/images/reactLogo.png"
                width={4096}
                height={4096}
                // className="w-full h-auto"
                /> 
            </div>
            <div className="w-[15%]">
                <Image
                src="/images/FigmaLogo.png"
                width={700}
                height={600}
                // className="w-full h-auto"
                /> 
            </div>
        </section> */}
        </main>
    </div>
    )
}
