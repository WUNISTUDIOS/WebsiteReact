// import {useRef, useState, useEffect} from 'react'
// import motion from 'framer-motion'

// const LazyVideo = ({
//     src,
//     className = '',
//     onClick = null,
//     muted = true,
//     videoRef =  null,
//     threshold = 0.1,
// }) => {
//     const [isInView, setisInView] = useState(false)
//     const [isLoaded, setIsLoaded] = useState(false)
//     const containerRef = useRef(null)


//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry])=>{
//             if (entry.isIntersecting){
//                 setisInView(true)
//                 observer.disconnect()
//             }
//         },{threshold,rootMargin: '100px'})
//         if(containerRef.current){observer.observe(containerRef.current)}
//         return () => observer.disconnect()
//     },[threshold])


//     const handleLoadedData = () => {setIsLoaded(true)}

//     return (
//       <div ref={containerRef} className="relative">
//         {!isInView ? (
//           // Placeholder while not in view
//           <div
//             className={`${className} bg-red-900 opacity-30 flex items-center justify-center`}
//             style={{ aspectRatio: "16/9" }}
//           >
//             <div className="text-white text-sm opacity-50">Loading...</div>
//           </div>
//         ) : (
//           <>
//             {/* Loading overlay */}
//             {!isLoaded && (
//               <div className="absolute inset-0 bg-red-900 opacity-30 flex items-center justify-center z-10">
//                 <div className="text-white text-sm opacity-50">
//                   Loading video...
//                 </div>
//               </div>
//             )}

//             <video
//             //   ref={videoRef}
//               className={className}
//               controlsList="nofullscreen nodownload noremoteplayback"
//               playsInline
//               loop
//               autoPlay={isLoaded}
//               muted={muted}
//               disablePictureInPicture
//               onLoadedData={handleLoadedData}
//               onClick={onClick}
//               preload="metadata"
//             >
//               <source src={src} type="video/mp4" />
//             </video>
//           </>
//         )}
//       </div>
//     );

// }

// export default LazyVideo


import { useRef, useState, useEffect } from 'react'

const LazyVideo = ({
    src,
    className = '',
    onClick = null,
    muted = true,
    videoRef = null,
    threshold = 0.1,
}) => {
    const [isInView, setIsInView] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showControls, setShowControls] = useState(false)
    const containerRef = useRef(null)
    const internalVideoRef = useRef(null)

    const actualVideoRef = videoRef || internalVideoRef

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                observer.disconnect()
            }
        }, { threshold, rootMargin: '100px' })
        if (containerRef.current) { observer.observe(containerRef.current) }
        return () => observer.disconnect()
    }, [threshold])

    // Track playing state
    useEffect(() => {
        const video = actualVideoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)

        return () => {
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
        }
    }, [isLoaded])

    const handleLoadedData = () => {
        setIsLoaded(true)
        const video = actualVideoRef.current
        if (video && !video.paused) {
            setIsPlaying(true)
        }
    }

    const togglePlayPause = (e) => {
        e.stopPropagation()
        const video = actualVideoRef.current
        if (!video) return

        if (video.paused) {
            video.play().catch(() => {
                // Handle play failure silently
            })
        } else {
            video.pause()
        }
    }

    const handleVideoClick = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    const handleMouseEnter = () => {
        setShowControls(true)
    }

    const handleMouseLeave = () => {
        setShowControls(false)
    }

    return (
        <div 
            ref={containerRef} 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {!isInView ? (
                // Placeholder while not in view
                <div
                    className={`${className} bg-red-900 opacity-30 flex items-center justify-center`}
                    style={{ aspectRatio: "16/9" }}
                >
                    <div className="text-white text-sm opacity-50">Loading...</div>
                </div>
            ) : (
                <>
                    {/* Loading overlay */}
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-red-900 opacity-30 flex items-center justify-center z-10">
                            <div className="text-white text-sm opacity-50">
                                Loading video...
                            </div>
                        </div>
                    )}

                    <video
                        ref={actualVideoRef}
                        className={className}
                        controlsList="nofullscreen nodownload noremoteplayback"
                        playsInline
                        loop
                        autoPlay={isLoaded}
                        muted={muted}
                        disablePictureInPicture
                        onLoadedData={handleLoadedData}
                        onClick={handleVideoClick}
                        preload="metadata"
                    >
                        <source src={src} type="video/mp4" />
                    </video>

                    {/* Play/Pause Button */}
                    {isLoaded && (showControls || !isPlaying) && (
                        <button
                            onClick={togglePlayPause}
                            className="absolute inset-0 flex items-center justify-center transition-all duration-200 z-20"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            <div className="bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-3 transition-all duration-200">
                                {isPlaying ? (
                                    // Pause icon
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="white"
                                        className="drop-shadow-lg"
                                    >
                                        <rect x="6" y="4" width="4" height="16" />
                                        <rect x="14" y="4" width="4" height="16" />
                                    </svg>
                                ) : (
                                    // Play icon
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="white"
                                        className="drop-shadow-lg ml-1"
                                    >
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default LazyVideo  