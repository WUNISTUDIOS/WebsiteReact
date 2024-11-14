// components/FigmaEmbed.js
import React from 'react';

const FigmaEmbed = () => {
  return (
    <section>
    <div className="w-full h-screen boarder border-gray-200 p-4 rounded-lg">
      <iframe
        src="https://embed.figma.com/design/rn1ZgoMlzSsIbvMH9JemnY/ProductPageLeafyThings?node-id=0-1&embed-host=share"
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
