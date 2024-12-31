// components/FigmaEmbed.js
import React from 'react';
import Image from 'next/image';
import CardButton from '@/components/ui/webCarButton'
import LeafyCard from "@/components/ui/LeafyThingsCard"

const FigmaEmbed = () => {
  return (
    <section className='my-40 content-center justify-center'>
      {/* <div>
        <p className='relative font-thin xl:text-5xl md:text-4xl text-lg py-5 pt-5 pl-5'>
        web design/development allows for the perfect combination of technicality and expressionism. 
        The web is the ultimate DCC for those who care equally for optimization and fidelity. 
        An egalitarian platform with endless possibilities.
        </p>
      </div> */}
      <div className='flex flex-wrap justify-evenly gap-5'>
        <CardButton
          href="/lolo" 
          imageSrc="/images/bgPortraitTito.png"
          title="Lolos.site"
          description='Design - Development'
        />
        <LeafyCard
        href="/leafythings"
        imageSrc='/images/LTXmas.png'
        title='Leafythings'
        description='Digital Designer' 
        />
      </div>  
    </section>
  )
}

export default FigmaEmbed
