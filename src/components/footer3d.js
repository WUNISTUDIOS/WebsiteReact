"use client"
import React, { Suspense } from "react"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei"
import { MeshStandardMaterial } from "three"

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Model } from "./model"
import { ModelBike } from "./modelBike"
import { NoHead } from "./noheadimport"
import { OBModel } from "./OBImport"



export default function Footer3d(){

    const created = ({gl})=>{
        gl.setClearColor('#f9f9f9', 1)
    }
    return(
        <Canvas className="h-[50vh] w-[50vw] mx-auto my-8 p-4 bg-slate-200 rounded-lg shadow-lg"
            // style={{ width: '70%', height: '70%' }} 
            onCreated={created}
            camera={{ fov: 55, position: [-5, 2, 5]}}>``
            <OrbitControls />
            <directionalLight position={ [1,2,4]} intensity={ 4 }/>            
            <ambientLight intensity={ 1}/>

            <Suspense>
                <mesh scale={.3} position={[0,-2,0]}>
                    <Model />
                </mesh>

                <mesh
                    scale={.5} position={[-2, -2, 0]}
                >
                    <ModelBike />
                </mesh>

                <mesh scale={.5} position={[5, -2, -1]}>
                    <NoHead/>
                </mesh>

                <mesh scale={.5} position={[2.5, -2, 0]}>
                    <OBModel/>
                </mesh>

            </Suspense>

        </Canvas>
    )
}