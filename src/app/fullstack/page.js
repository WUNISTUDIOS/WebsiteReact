// components/FigmaEmbed.js
import React from 'react';
import Image from 'next/image';
import CardButton from '@/components/ui/webCarButton'
import LeafyCard from "@/components/ui/LeafyThingsCard"

const FigmaEmbed = () => {
  return (
    <section className='my-40'>
      <div>
        <p className='text-center relative font-thin xl:text-5xl md:text-4xl text-lg p-5 m-10'>
        web design/development allows for the perfect combination of technicality and expressionism. 
        The web is the ultimate DCC for those who care equally for optimization and fidelity. 
        An egalitarian platform with endless possibilities.
        </p>
      </div>
    <div className='flex flex-wrap justify-evenly'>
      <CardButton
        href="/lolo" 
        imageSrc="/images/portraitTito.png"
        title="Lolos.site"
        description=""
      />
       <LeafyCard
       href="/leafythings"
       imageSrc='/images/NoirLogo.svg'
       title='Leafythings'
       description='' 
        />
    </div>  
    </section>
  )
}

export default FigmaEmbed
