// import { useRef, useState, useEffect } from 'react'

// const LazyVideo = ({
//     src,
//     className = '',
//     onClick = null,
//     muted = true,
//     videoRef = null,
//     threshold = 0.1,
// }) => {
//     const [isInView, setIsInView] = useState(false)
//     const [isLoaded, setIsLoaded] = useState(false)
//     const [isPlaying, setIsPlaying] = useState(false)
//     const [showControls, setShowControls] = useState(false)
//     const containerRef = useRef(null)
//     const internalVideoRef = useRef(null)

//     const actualVideoRef = videoRef || internalVideoRef

//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 setIsInView(true)
//                 observer.disconnect()
//             }
//         }, { threshold, rootMargin: '100px' })
//         if (containerRef.current) { observer.observe(containerRef.current) }
//         return () => observer.disconnect()
//     }, [threshold])

//     // Track playing state
//     useEffect(() => {
//         const video = actualVideoRef.current
//         if (!video) return

//         const handlePlay = () => setIsPlaying(true)
//         const handlePause = () => setIsPlaying(false)

//         video.addEventListener('play', handlePlay)
//         video.addEventListener('pause', handlePause)

//         return () => {
//             video.removeEventListener('play', handlePlay)
//             video.removeEventListener('pause', handlePause)
//         }
//     }, [isLoaded])

//     const handleLoadedData = () => {
//         setIsLoaded(true)
//         const video = actualVideoRef.current
//         if (video && !video.paused) {
//             setIsPlaying(true)
//         }
//     }

//     const togglePlayPause = (e) => {
//         e.stopPropagation()
//         const video = actualVideoRef.current
//         if (!video) return

//         if (video.paused) {
//             video.play().catch(() => {
//                 // Handle play failure silently
//             })
//         } else {
//             video.pause()
//         }
//     }

//     const handleVideoClick = (e) => {
//         if (onClick) {
//             onClick(e)
//         }
//     }

//     const handleMouseEnter = () => {
//         setShowControls(true)
//     }

//     const handleMouseLeave = () => {
//         setShowControls(false)
//     }

//     return (
//         <div 
//             ref={containerRef} 
//             className="relative group"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {!isInView ? (
//                 // Placeholder while not in view
//                 <div
//                     className={`${className} bg-red-900 opacity-30 flex items-center justify-center`}
//                     style={{ aspectRatio: "16/9" }}
//                 >
//                     <div className="text-white text-sm opacity-50">Loading...</div>
//                 </div>
//             ) : (
//                 <>
//                     {/* Loading overlay */}
//                     {!isLoaded && (
//                         <div className="absolute inset-0 bg-red-900 opacity-30 flex items-center justify-center z-10">
//                             <div className="text-white text-sm opacity-50">
//                                 Loading video...
//                             </div>
//                         </div>
//                     )}

//                     <video
//                         ref={actualVideoRef}
//                         className={className}
//                         controlsList="nofullscreen nodownload noremoteplayback"
//                         playsInline
//                         loop
//                         autoPlay={isLoaded}
//                         muted={muted}
//                         disablePictureInPicture
//                         onLoadedData={handleLoadedData}
//                         onClick={handleVideoClick}
//                         preload="metadata"
//                     >
//                         <source src={src} type="video/mp4" />
//                     </video>

//                     {/* Play/Pause Button */}
//                     {isLoaded && (showControls || !isPlaying) && (
//                         <button
//                             onClick={togglePlayPause}
//                             className="absolute inset-0 flex items-center justify-center transition-all duration-200 z-20"
//                             aria-label={isPlaying ? "Pause video" : "Play video"}
//                         >
//                             <div className="bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-3 transition-all duration-200">
//                                 {isPlaying ? (
//                                     // Pause icon
//                                     <svg 
//                                         width="24" 
//                                         height="24" 
//                                         viewBox="0 0 24 24" 
//                                         fill="white"
//                                         className="drop-shadow-lg"
//                                     >
//                                         <rect x="6" y="4" width="4" height="16" />
//                                         <rect x="14" y="4" width="4" height="16" />
//                                     </svg>
//                                 ) : (
//                                     // Play icon
//                                     <svg 
//                                         width="24" 
//                                         height="24" 
//                                         viewBox="0 0 24 24" 
//                                         fill="white"
//                                         className="drop-shadow-lg ml-1"
//                                     >
//                                         <polygon points="5,3 19,12 5,21" />
//                                     </svg>
//                                 )}
//                             </div>
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     )
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
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef(null)
    const internalVideoRef = useRef(null)

    const actualVideoRef = videoRef || internalVideoRef

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
            (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
            setIsMobile(isMobileDevice)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                observer.disconnect()
            }
        }, { 
            threshold, 
            rootMargin: isMobile ? '50px' : '100px' // Smaller margin for mobile
        })
        
        if (containerRef.current) { 
            observer.observe(containerRef.current) 
        }
        return () => observer.disconnect()
    }, [threshold, isMobile])

    // Track playing state
    useEffect(() => {
        const video = actualVideoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)
        const handleCanPlay = () => setIsLoaded(true)

        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)
        video.addEventListener('canplay', handleCanPlay)

        return () => {
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
            video.removeEventListener('canplay', handleCanPlay)
        }
    }, [isInView])

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
            // For mobile, we need to handle play promises properly
            const playPromise = video.play()
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Auto-play was prevented:', error)
                    // On mobile, show controls to let user manually play
                    setShowControls(true)
                })
            }
        } else {
            video.pause()
        }
    }

    const handleVideoClick = (e) => {
        if (onClick) {
            onClick(e)
        } else if (isMobile) {
            // On mobile, clicking should toggle play/pause by default
            togglePlayPause(e)
        }
    }

    const handleMouseEnter = () => {
        if (!isMobile) {
            setShowControls(true)
        }
    }

    const handleMouseLeave = () => {
        if (!isMobile) {
            setShowControls(false)
        }
    }

    const handleTouchStart = () => {
        if (isMobile) {
            setShowControls(!showControls)
        }
    }

    return (
        <div 
            ref={containerRef} 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
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
                        autoPlay={!isMobile && isLoaded} // Disable autoplay on mobile
                        muted={muted}
                        disablePictureInPicture
                        onLoadedData={handleLoadedData}
                        onClick={handleVideoClick}
                        preload={isMobile ? "none" : "metadata"} // Use "none" for mobile to save bandwidth
                        // poster="" // Add a poster image if you have one
                        style={{ 
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Button - Always show on mobile when loaded */}
                    {isLoaded && (showControls || !isPlaying || isMobile) && (
                        <button
                            onClick={togglePlayPause}
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 z-20 ${
                                isMobile ? 'bg-black bg-opacity-20' : ''
                            }`}
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

                    {/* Mobile-specific loading indicator */}
                    {isMobile && isInView && !isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center z-30">
                            <div className="bg-black bg-opacity-60 rounded-full p-4">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default LazyVideo