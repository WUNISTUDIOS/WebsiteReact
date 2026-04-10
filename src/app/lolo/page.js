import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

export default function Lolo() {
    return (
        <section className='mt-8 text-black relative'>
            <div className="flex flex-wrap justify-center items-start gap-8 w-[95%] max-w-10xl mx-auto mb-8">
                <video
                    className="w-[40%] shadow-sm rounded-xl"
                    style={{ aspectRatio: "3224/4032", objectFit: "cover" }}
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
                    className="w-[40%] shadow-sm rounded-xl object-cover"
                    style={{ aspectRatio: "3224/4032" }}
                />
            </div>
            <div className='w-[95%] max-w-10xl mx-auto p-5'>
                <h1 className="font-bold text-4xl xl:text-xl md:text-xl rounded-sm">Lolos.site</h1>
                <hr className='my-2' />
                <p className='font-monument text-base'>
                    Creative website for Louisa Thewes, an artist and shoe designer currently studying
                    at London College of Fashion. Her unique and unmistakable style is brought to life
                    with photogrametry, digital animation and javascript. <br /> This website aims
                    to function as an interactive portolio for her designs and future projects.
                    <br /><br />
                    The combination of phyiscal sculptures and digital animation is a concept
                    we wish to further develop. Photorealistic yet stylised imagery brought
                    into the digital environment as a form on preservation, whilst being enhanced through animation. <br />
                    These figures are modeled with clay in a t-pose then scanned with polycam,
                    rigged and animated in blender
                </p>
                <p className="my-2">
                    <Link target="_blank" href="https://lolos.site/"><span className="text-black">visit site</span></Link>
                </p>
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





