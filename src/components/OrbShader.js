"use client"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { Camera, MathUtils, PlaneGeometry } from "three"

// import VertexShader from 'raw-loader!glslify-loader!../shaders/vertex.glsl'
// import FragmentShader from 'raw-loader!glslify-loader!../shaders/fragment.glsl'

import VShader from '../shaders/vertex.glsl'
import FShader from '../shaders/fragment.glsl'

function Orb(){
    const mesh = useRef()
    const hover = useRef(false)
    const uniforms = useMemo(
        () => ({
            uTime: {value: 0},
            uIntensity: {value: 0.3},
        }),[])
    useFrame((state) =>{
        const {clock} = state
        if (mesh.current){
            mesh.current.material.uniforms.uTime.value = clock.getElapsedTime(),
            mesh.current.material.uniforms.uIntensity.value = MathUtils.lerp(
                mesh.current.material.uniforms.uIntensity.value,
                hover.current ? 0.85 : 0.15, 0.02)
        }
    })
    return (
            <mesh ref={mesh}
            position={[0, 0, 0]}
            scale={1.5}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
            >
                <planeGeometry args={[30, 10, 100, 100]} />
                <shaderMaterial 
                    vertexShader={VShader}
                    fragmentShader={FShader}
                    uniforms={uniforms}
                    wireframe={false}
                />
            </mesh>
            
    )
}

export default function OrbShader(){
    return (
        <Canvas>
            <PerspectiveCamera fov={30} position={[0,5,5]} makeDefault/>
            {/* <OrbitControls /> */}
            <Orb/>
        </Canvas>
        
    )
}

