/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React  from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes } = useGLTF('meta.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0,0,0]} scale={100}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <pointLight intensity={4} decay={4} />
      </group>
    </group>
  )
}

useGLTF.preload('/meta.gltf')
