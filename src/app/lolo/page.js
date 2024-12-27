import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"

export default function Lolo(){
    return (
        <section>
                  <div className="flex flex-wrap items-start justify-around my-40 mx-auto">
      <video className="w-1/3"
        loop
        autoPlay
        muted
      >
        <source src="videos/loloSiteVid.MOV"/> 
      </video>
      <div className="flex flex-col justify-evenly">
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
        </div>
    </div>
        </section>
    )
}





