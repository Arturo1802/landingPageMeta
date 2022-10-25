import {Suspense } from 'react'
import './App.css';
import {Canvas} from '@react-three/fiber'
import Model from './components/Meta.js'
import { OrbitControls } from '@react-three/drei'; 
import VrArea from './components/VrArea';


function App() {
  return (
    <div className='centrado' >  
      <span>Clic derecho: Arrastrar modelo<br/></span>
      <span> Clic izquierdo: Rotar modelo<br/></span>
      <span>Boton centrado: Zoom<br/></span>
      <Canvas className='canvas'> 
        <OrbitControls autoRotate="true" autoRotateSpeed="19"/>
        <spotLight intensity={0.8} angle={1} penumbra={1} position={[15, 60, 0]} castShadow />
        <spotLight intensity={0.8} angle={1} penumbra={1} position={[500, 0, 500]} castShadow />

        <Suspense>
        <Model/>
        </Suspense>
      </Canvas>
      <div >
      <VrArea />
      </div>
      <span>META LEARNING UNIVERSITY </span>
    </div>
  );
}
 
export default App;
