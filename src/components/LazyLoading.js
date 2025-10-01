import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const LazyVideo = ({
    src,
    className = '',
    onClick = null,
    muted = true,
    videoRef = null,
    threshold = 0.1,
    isAnimated = false,
    customButton = null,
}) => {
    const [isInView, setIsInView] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(muted)
    const containerRef = useRef(null)
    const internalVideoRef = useRef(null)

    const actualVideoRef = videoRef || internalVideoRef

    useEffect(() =>{
        if (actualVideoRef.current){
            if(isAnimated){
                setIsMuted(false)
                actualVideoRef.current.muted = false
            }else{
                setIsMuted(true)
                actualVideoRef.current.muted = true
            }
        }
    }, [isAnimated])

    useEffect(() => {
        const video = actualVideoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)

        setIsPlaying(!video.paused)

        return () => {
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
        }
    }, [isLoaded, isInView])

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
                window.innerWidth <= 768 ||
                (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
            setIsMobile(isMobileDevice)
        }
        
        checkMobile()
    }, [])

    // Desktop lazy loading logic
    useEffect(() => {
        if (isMobile) {
            // Skip lazy loading on mobile - load immediately
            setIsInView(true)
            setIsLoaded(true)
            return
        }

        // Desktop lazy loading with Intersection Observer
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                observer.disconnect()
            }
        }, { threshold, rootMargin: '100px' })

        if (containerRef.current) { 
            observer.observe(containerRef.current) 
        }
        return () => observer.disconnect()
    }, [threshold, isMobile])

    // Desktop loading detection
    useEffect(() => {
        if (!isMobile && isInView && actualVideoRef.current) {
            const video = actualVideoRef.current
            
            const handleLoadedData = () => setIsLoaded(true)
            video.addEventListener('loadeddata', handleLoadedData)
            
            return () => {
                video.removeEventListener('loadeddata', handleLoadedData)
            }
        }
    }, [isInView, isMobile])

    const togglePlayPause = (e) => {
        e.stopPropagation()
        const video = actualVideoRef.current
        if (video.paused) {
            video.play()
        }else{
            video.pause()
        }
    }

    const toggleMute = (e) =>{
        e.stopPropagation()
        if (actualVideoRef.current){
            const newMutedState = !isMuted
            setIsMuted(newMutedState)
            actualVideoRef.current.muted = newMutedState
        }
    }

    const VideoControls = () => (
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
                onClick={togglePlayPause}
                className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
                onClick={toggleMute}
                className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>
    )

    const CustomButtonOverlay = () => customButton ? (
        <div className = "absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {customButton}
        </div>
    ) : null

    // Mobile: render video directly without lazy loading
    if (isMobile) {
        return (
            <div ref={containerRef} className="relative group">
                <video
                    ref={actualVideoRef}
                    className={className}
                    controlsList="nofullscreen nodownload noremoteplayback"
                    playsInline
                    loop
                    autoPlay
                    muted={isMuted}
                    disablePictureInPicture
                    onClick={onClick}
                    preload="metadata"
                >
                    <source src={src} type="video/mp4" />
                </video>
                <VideoControls />
            </div>
        )
    }
    // Desktop: use lazy loading
    return (
        <div ref={containerRef} className="relative group">
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
                        muted={isMuted}
                        disablePictureInPicture
                        onClick={onClick}
                        preload="metadata"
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                    <VideoControls />
                    <CustomButtonOverlay />
                </>
            )}
        </div>
    )
}

export default LazyVideo