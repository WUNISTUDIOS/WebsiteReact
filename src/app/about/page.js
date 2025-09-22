import Head from "next/head"
import Link from "next/link"
import Image from "next/image"



export default function AboutPage() {
    return (
        <div>
            <div>
                <nav className=" flex mt-20 pt-20 p-5">
                    <ul className="flex text-xl space-x-5 underline font-bold text-white">

                        <li>
                            <Link target="_blank" href="https://www.instagram.com/trouwsers/"> <span>instagram</span></Link>
                        </li>
                        <li>
                            <Link target="_blank" href="/dashboard"><span>email</span></Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://github.com/WUNISTUDIOS"><span>github</span></Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <Head>
                <title>cgidoggs's Dungeon</title>
            </Head>
            <main>
                <section>
                    <div className=" relative flex flex-wrap  shadow-sm p-5 ">
                        <h1 className="text-transparent xl:text-8xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 py-5">digital designer</h1>
                        <p className="xl:text-5xl md:text-4xl text-white text-lg">Denzel Arthur, designer and artist fascinated by identity, technology, and the spaces between. Combining experimental aesthetics with technical expertise to push the boundaries of visual communication.</p>
                    </div>
                </section>
                <section className="flex flex-wrap items-center align-center h-1/2 m-5">
                    <Image
                        src="https://d6wod28es4wuu.cloudfront.net/working_outsideWeb.webp"
                        width={2550}
                        height={1785}
                    />
                </section>
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="font-extralight text-slate-500 text-sm">
                        render for active labour print magazine
                    </p>
                </div>
                <section className='flex flex-col p-5'>
                    <h1 className='relative font-bold text-xl xl:text-6xl md:text-4xl text-white'> Clients/Collaborators</h1>
                    <hr></hr>
                    <br></br>
                    <ul className='font-extralight xl:text-5xl md:text-4xl text-lg text-white'>
                        <li>
                            <Link target="_blank" href="https://www.spencerbadu.com/"><spann>Spencer Badu</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://cruxkitchen.com/"><spann>Crux Kitchen</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.northscopemedia.com/"><spann>North Scope Media</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.leafythings.com/"><spann>LeafyThings</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.instagram.com/humanresources.dept/"><spann>Human Resources</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.oligarchy.ca/"><spann>Oligarchy</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://oyle.world/"><spann>Oyl3</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.instagram.com/lewy180/"><spann>Lewy180</spann></Link>
                        </li>
                        <hr></hr>
                        <li>
                            <Link target="_blank" href="https://www.instagram.com/akuavisuals/"><spann>Akuavisuals</spann></Link>
                        </li>
                        <hr></hr>

                    </ul>
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
