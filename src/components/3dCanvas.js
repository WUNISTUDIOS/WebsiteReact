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

    const created = ({gl})=>{
        gl.setClearColor('#fffff', 1)
    }
    
    return (
        <Canvas className="w-full max-w-4xl mx-auto my-8 p-4 bg-slate-200 rounded-lg shadow-lg"
        camera={{ fov: 75, position: [-5, 0, 10]}}
        // onCreated={created}
        >
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
