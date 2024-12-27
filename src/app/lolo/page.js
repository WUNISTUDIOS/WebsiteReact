import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"

export default function Lolo(){
    return (
        <section className='flex flex-wrap p-5 gap-2 h-screen content-center justify-center'>
                {/* <video className="w-1/3 h-2/3"
                    loop
                    autoPlay
                    muted
                >
                <source src="videos/loloSiteVid.MOV"/> 
                </video> */}
                <Image
                    src="/images/loloVs.png"
                    width={2880}
                    height={1800}
                    className="w-1/3"
                />
                <Image
                src="/images/loloClose.png"
                width={1880}
                height={1800}
                className="w-1/3"
                />
        </section>
    )
}





