import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"

export default function Lolo(){
    return (
        <section className='my-40'>
            <div className='flex flex-col content-center justify-evenly space-y-2'>
                <h1 className='font-bold text-center text-4xl xl:text-xl md:text-4xl '
                >
                    Lolos.site
                </h1>
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
                    with photogrametry, digital animation and javascript. <br></br> this website aims
                    to function as an interactive portolio for her designs and future projects.
                    <br></br>
                    <br></br>
                    The combination of phyiscal sculptures and digital animation is a concept
                    we wish to further develop. photorealistic yet stylised imagery brought
                    into the digital environment must retain the excentricity of motion. <br></br>
                    Modeled with clay in a t-pose the figures are scanned with polycam then 
                    rigged and animated in blender

                </p>
                </div>
                <video 
                    className="w-[30%] shadow-sm rounded-xl relative"
                    loop
                    autoPlay
                    muted
                >
                <source src="videos/loloSiteVid.MOV"/> 
                </video>
                <Image
                    src="/images/TitoLive.jpg"
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





