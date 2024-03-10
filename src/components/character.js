"use client"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls, PivotControls, Html, TransformControls, Float } from "@react-three/drei"
import { Text } from "@react-three/drei"
import { MeshStandardMaterial } from "three"



export default function Experience(){

    const sphereRef =useRef()
    const cubeRef = useRef()
    return (
        <Canvas>
            
        <OrbitControls makeDefault />
        
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
        
        <PivotControls anchor={[0,0,0]}
            depthTest={false}
            lineWidth={1}
            scale={100}
            fixed={true}
        >
            <mesh ref={ sphereRef } position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                {/* <Html
                    position={[1,1,0]}
                    wrapperClass="label"
                    center
                    distanceFactor={8}
                    occlude={[sphereRef, cubeRef]}
                >sphere</Html> */}
            </mesh>
        </PivotControls>

        <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cubeRef} mode='translate'>
        </TransformControls>

        {/* <Suspense>
            <mesh scale={.5} position={0}>
                <Model />
            </mesh>
         </Suspense> */}

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                resolution={512}
            />
        </mesh>

        {/* <Float 
            floatIntensity={1}
        >
        <Text position-y={2}
            font="./bangers-v20-latin-regular.woff"
            color="blue"
            >Quenzil loves 3D
            <meshNormalMaterial />
        </Text>
        </Float> */}
        </Canvas>
    ) 
}
