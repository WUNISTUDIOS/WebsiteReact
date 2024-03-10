import React from "react"

export default function YoutubeEmbed(){
    return(
        <div className="aspect-w-16 aspect-h-9">
            <iframe 
                width="560" height="315" 
                src="https://www.youtube.com/embed/5-4HYlv3iEk?si=u3W3swjjn3Wmp79S" 
                title="Lov3" 
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // allowfullscreen
                >
            </iframe>
        </div>
    ) 
}
