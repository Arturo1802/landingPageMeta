import { VRButton, XR, Controllers } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import Model from './Meta.js'
export default function VrArea() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
           
        </XR>
        <Model/> 
      </Canvas>
    </>
  )
}