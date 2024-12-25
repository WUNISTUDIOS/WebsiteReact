import React from "react"

export default function YoutubeEmbed() {
    return (
        <div className="w-full max-w-4xl mx-auto my-8 p-4 bg-slate-200 rounded-lg shadow-lg">
            <div className="relative overflow-hidden pb-[56.25%] h-0">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/5-4HYlv3iEk?si=u3W3swjjn3Wmp79S"
                    title="Lov3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
