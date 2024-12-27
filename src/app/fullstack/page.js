// components/FigmaEmbed.js
import React from 'react';

const FigmaEmbed = () => {
  return (
    <section>
      <div className="flex flex-wrap text-center items-center m-5 py-40">
        <p className="xl:text-5xl md:text-4xl text-lg">
          web design and programming allows me to combine my passion for design and technicality.
          The web feels like the ultimate DCC for someone how cares about optimization and fedelity.
          I design user friendly platforms for commerce, while also experimenting with web graphics and 
          shader technology. The web is the perfect egalitarian platform that allows me to create and share my work
        </p>
      </div>
    <div className="flex flex-wrap justify-center py-40 p-5 w-full h-screen boarder border-gray-200 rounded-lg">
      <iframe
        src="https://embed.figma.com/design/rn1ZgoMlzSsIbvMH9JemnY/ProductPageLeafyThings?node-id=0-1&embed-host=share"
        width="800"
        height="450"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
    <div className="flex flex-wrap justify-center w-full p-5 h-screen boarder border-gray-200 rounded-lg">
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
