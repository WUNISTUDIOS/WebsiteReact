"use client"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei"
import { MeshStandardMaterial } from "three"


export default function Footer3d(){
    return(
        <Canvas>
            <OrbitControls />
            <ambientLight />
            <mesh>
                <boxGeometry/>
                <meshStandardMaterial />
            </mesh>

            <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </Canvas>
    )
}