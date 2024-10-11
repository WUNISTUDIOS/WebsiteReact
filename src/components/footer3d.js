"use client"
import React, { Suspense } from "react"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei"
import { MeshStandardMaterial } from "three"

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Model } from "./model"

export default function Footer3d(){

    const created = ({gl})=>{
        gl.setClearColor('#f5ffe8', 1)
    }
    return(
        <Canvas onCreated={created}>
            <OrbitControls />
            <directionalLight position={ [1,2,4]} intensity={ 4.5 }/>            
            <ambientLight intensity={ 1.5}/>
      
{/* 
            <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <MeshReflectorMaterial />
            </mesh> */}

            <Suspense>
                <mesh scale={.3} position={[0,-2,0]}>
                    <Model />
                </mesh>
            </Suspense>

        </Canvas>
    )
}