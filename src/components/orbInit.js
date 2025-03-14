// import { useFrame } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import { MathUtils } from "three";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas, Suspense } from "@react-three/fiber";

// import VerterShader from 'raw-loader!glslify-loader!../shaders/vertex.glsl'
// import FragmentShader from 'raw-loader!glslify-loader!../shaders/fragment.glsl'

// const Orb = () => {
//   // This reference will give us direct access to the mesh
// const mesh = useRef();
// const hover = useRef(false);

// const uniforms = useMemo(
// () => ({
//     u_intensity: { value: 0.3,}, 
//     u_time: { value: 0.0,},
// }),[])

// useFrame((state) => {
// const { clock } = state;
// mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime()

// mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
//     mesh.current.material.uniforms.u_intensity.value,
//     hover.current ? 0.85 : 0.15, 0.02
// )
// })

// return (
// <mesh
//     ref={mesh}
//     position={[0, 0, 0]}
//     scale={1.5}
//     onPointerOver={() => (hover.current = true)}
//     onPointerOut={() => (hover.current = false)}
// >
//     <icosahedronGeometry args={[2, 20]} />
//     <shaderMaterial
//     fragmentShader={fragmentShader}
//     vertexShader={vertexShader}
//     uniforms={uniforms}
//     wireframe={false}
//     />
// </mesh>
// )
// }

// export default function OrbCanvas() {
// return (
//     <Canvas>
//     {/* Add suspense to handle async rendering */}
//     <Suspense fallback={null}>
//         <Orb />
//     </Suspense>
//     {/* Controls for interactivity */}
//     <OrbitControls />
//     </Canvas>
// );
// }

