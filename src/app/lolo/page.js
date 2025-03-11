import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

export default function Lolo(){
    return (
        <section className='my-40 text-white '>
            <div className='flex flex-col content-center justify-evenly space-y-2'>
                <li className="font-bold text-center text-4xl xl:text-4xl md:text-4xl underline ">
                    <Link target="_blank" href="https://lolos.site/"><spann>Lolos.site</spann></Link>
                </li>
                {/* <h1 className='font-bold text-4xl text-center underline '
                >
                    / Fullstack Dev / Animation /  
                </h1> */}
            </div>
            <div className='p-5 flex flex-wrap items-start gap-4'>
            <div className='text-sm w-full md:w-1/3 '>
            <p className='font-monument relative pr-2'>
                    Creative website for Louisa Thewes, an artist and shoe designer currently studying
                    at London College of Fashion. Her unique and unmistakable style is brought to life
                    with photogrametry, digital animation and javascript. <br></br> This website aims
                    to function as an interactive portolio for her designs and future projects.
                    <br></br>
                    <br></br>
                    The combination of phyiscal sculptures and digital animation is a concept
                    we wish to further develop. Photorealistic yet stylised imagery brought
                    into the digital environment as a form on preservation, whilst being enhanced through animation. <br></br>
                    These figures are modeled with clay in a t-pose then scanned with polycam, 
                    rigged and animated in blender

                </p>
                </div>
                <video 
                    className="w-[30%] shadow-sm rounded-xl relative"
                    loop
                    autoPlay
                    muted
                >
                <source src="https://d6wod28es4wuu.cloudfront.net/loloSiteVid.MOV"/> 
                </video>
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/TitoLive.jpg"
                    width={3224}
                    height={4032}
                    className="w-[30%] h-full shadow-sm rounded-xl relative"
                />
            </div>
            {/* <section className="flex relative flex-wrap justify-start p-5 ">
                <div className='content-center m-5 relative'>
                <Image
                    src="/images/loloVs.png"
                    width={2880}
                    height={1800}
                    className="w-full h-auto shadow-sm rounded-xl"
                />
                <Image
                src="/images/loloClose.png"
                width={1880}
                height={1800}
                className="w-full h-auto shadow-sm rounded-xl"
                />
                </div>
            </section> */}
        </section>
    )
}





