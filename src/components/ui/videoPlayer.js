import {useRef, useState } from 'react'
import {motion} from 'framer-motion'

const ClickToPlayVideo = ({
    src,
    className = '',
    onAnimationTrigger = null,
}) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const handleVideoClick = () => {
        const videoRef = videoRef.current

        if(!video) return

        if(isPlaying){
            video.pause()
            setIsPlaying(false)
        }else{
            video.play()
            video.muted = false
            setIsMuted(false)
            setIsPlaying(true)

            if (onAnimationTrigger){
                onAnimationTrigger(true)
            }
        }
    }

    return (
    <motion.div
        layout
        animate={{ scale: isPlaying ? 1.05 : 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className={`relative cursor-pointer ${className}`}
        onClick={handleVideoClick}
        whileInView={{ "--rounded": "5%" }}
        initial={{ "--rounded": "20%" }}
        viewport={{ amount: 0.5 }}
    >
        <video
            ref={videoRef}
            className="w-full"
            controlsList="nofullscreen nodownload noremoteplayback"
            playsInline
            loop
            muted={isMuted}
            disablePictureInPicture
            preload="metadata"
            autoPlay
        >
        <source src={src} type="video/mp4" />
        </video>
    </motion.div>
    )
}

export default ClickToPlayVideo