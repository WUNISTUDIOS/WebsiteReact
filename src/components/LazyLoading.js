import {useRef, useState, useEffect} from 'react'
import motion from 'framer-motion'

const LazyVideo = ({
    src,
    className = '',
    onClick = null,
    muted = true,
    videoRef =  null,
    threshold = 0.1,
}) => {
    const [isInView, setisInView] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef(null)
    const internalVideoRef = useRef(null)

    const actualVideoRef = videoRef || internalVideoRef

    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting){
                setisInView(true)
                observer.disconnect()
            }
        },{threshold,rootMargin: '100px'})
        if(containerRef.current){observer.observe(containerRef.current)}
        return () => observer.disconnect()
    },[threshold])

    useEffect(() =>{
        const handleVisibilityChange = () =>{
            if(!document.hidden && actualVideoRef.current && isLoaded){
                const video = actualVideoRef.current
                if(video.paused){
                    video.currentTime = 0
                    video.play().catch(console.log)
                }
            }
        }
        const handlePageShow = (event) => {
            if(event.persisted && actualVideoRef && isLoaded){
                const video = actualVideoRef.current
                video.currentTime = 0
                video.play().catch(console.log)
            }
        }
        const handleWindowFocus = () =>{
            if(actualVideoRef.current && isLoaded){
                const video = actualVideoRef.current
                if(video.paused){
                    video.currentTime = 0
                    video.play().catch(console.log)
                }
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        window.addEventListener('pageshow', handlePageShow)
        window.addEventListener('focus', handleWindowFocus)
        return () =>{
            document.addEventListener('visibilitychange', handleVisibilityChange)
            window.addEventListener('pageshow', handlePageShow)
            window.addEventListener('focus', handleWindowFocus)
        }
    },[isLoaded])


    const handleLoadedData = () => {setIsLoaded(true)}

    return (
      <div ref={containerRef} className="relative">
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
            //   ref={videoRef}
              className={className}
              controlsList="nofullscreen nodownload noremoteplayback"
              playsInline
              loop
              autoPlay={isLoaded}
              muted={muted}
              disablePictureInPicture
              onLoadedData={handleLoadedData}
              onClick={onClick}
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
            </video>
          </>
        )}
      </div>
    );

}

export default LazyVideo