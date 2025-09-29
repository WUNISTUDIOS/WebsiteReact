import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

export default function Lolo() {
    return (
        <section className='my-40 text-white flex flex-wrap items-start justify-center'>
            <div className='text-sm w-full md:w-2/3 p-5'>
                    <h1 className="font-bold text-4xl xl:text-xl md:text-xl rounded-sm"> Lolos.site</h1>
                    <hr className='my-2'></hr>
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
                    <p className="my-2 ">
                    <Link target="_blank" href="https://lolos.site/"><spann className="text-slate-500">visit site</spann></Link>
                </p>
            </div>    
                <div className="flex flex-wrap relative justify-center items-start gap-8">
                <video
                    className="w-[40%] shadow-sm rounded-xl relative"
                    loop
                    autoPlay
                    muted
                >
                    <source src="https://d6wod28es4wuu.cloudfront.net/loloSiteVid.MOV" />
                </video>
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/TitoLiveCompressed.webp"
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





