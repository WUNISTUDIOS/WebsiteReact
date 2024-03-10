"use client"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls,PivotControls, Html, TransformControls, PerspectiveCamera } from "@react-three/drei"
import { MeshStandardMaterial } from "three"
import { Suspense } from "react"

import { Model } from "./model"
import { ModelBike } from "./modelBike"


export default function BikeTion(){
    // const three = useThree()
    // console.log(useThree)
    // const{camera, gl} = useThree()
    
    return (
        <Canvas >
            <OrbitControls />
            <ambientLight intensity={1.4}/>
            <directionalLight position={[1,2,3]} intensity={4.5}/>

        <Suspense>
            <mesh scale={.5} position={[0,-3,0]}>
                <ModelBike />
            </mesh>
        </Suspense>
        </Canvas>
    ) 
}
