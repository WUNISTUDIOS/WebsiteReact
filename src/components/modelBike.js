
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ModelBike(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/oyle8_2_ani.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.web_stationary_bike.play()
    actions.web_bike_ride.play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="drew_bones">
          <group name="body_subdivision">
            <skinnedMesh
              name="Cube004"
              geometry={nodes.Cube004.geometry}
              material={materials.main_body}
              skeleton={nodes.Cube004.skeleton}
            />
            <skinnedMesh
              name="Cube004_1"
              geometry={nodes.Cube004_1.geometry}
              material={materials.shirt}
              skeleton={nodes.Cube004_1.skeleton}
            />
          </group>
          <primitive object={nodes.ROOT} />
          <primitive object={nodes.CTRl_FOOTL} />
          <primitive object={nodes.CTRl_FOOTR} />
        </group>
        <mesh
          name="chain"
          castShadow
          receiveShadow
          geometry={nodes.chain.geometry}
          material={materials["Material.003"]}
          position={[0.039, 2.715, 0.132]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.024, 0.022, 0.02]}
        />
        <group
          name="bike_main_control"
          position={[0, 2.716, 0.134]}
          scale={4.546}
        >
          <primitive object={nodes.main_master_} />
        </group>
        <group
          name="Circle"
          position={[0.038, 2.716, 0.134]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.793}
        />
        <group
          name="Circle001"
          position={[0, 2.716, 0.134]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.793}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/oyle8_2_ani.gltf");

