/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 three.gltf --transform
Author: Fyrestar (https://sketchfab.com/mevedia)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/threejs-60320862bf904b7ab0e032c27daf7c7c
Title: Three.js
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Three(props) {
  const { nodes, materials } = useGLTF('/three-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/three-transformed.glb')
