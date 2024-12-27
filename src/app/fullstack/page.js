// components/FigmaEmbed.js
import React from 'react';
import Image from 'next/image';
import CardButton from '@/components/ui/webCarButton'
import LeafyCard from "@/components/ui/LeafyThingsCard"

const FigmaEmbed = () => {
  return (
    <section className="">
      {/* <div className="flex flex-wrap items-start justify-around my-40 mx-auto">
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
    </div> */}
    <div className='flex flex-call items-start p-10'>
      <CardButton
        className=""
        href="/lolo" 
        imageSrc="/images/portraitTito.png"
        title="Lolos.site"
        description=""
      />
      </div>
      <div>
        <LeafyThingsCard
        />
      </div>
      <div className="flex flex-wrap text-center items-center my-40">
        <p className="xl:text-5xl md:text-4xl text-lg">
        Web Design allows for the perfect combination of technicality and expressionism. 
        The web is the ultimate DCC for those who care equally for optimization and fidelity. 
        An egalitarian platform with endless possibilities.
        </p>
      </div>
    <div className="flex flex-wrap justify-center p-5">
      <iframe
        src="https://embed.figma.com/design/rn1ZgoMlzSsIbvMH9JemnY/ProductPageLeafyThings?node-id=0-1&embed-host=share"
        width="800"
        height="450"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
    <div className="flex flex-wrap justify-center p-5">
      <iframe
        src="https://embed.figma.com/design/vxbySv183edvLMm1qJ3x8G/EatMe?node-id=0-1&embed-host=share"
        width="800"
        height="450"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
    </section>

    
  )
}

// this needs to be a component so i can add some copy

export default FigmaEmbed;
