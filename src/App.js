import {Suspense } from 'react'
import './App.css';
import {Canvas} from '@react-three/fiber'
import Model from './components/Meta.js'
import { OrbitControls } from '@react-three/drei'; 
import VrArea from './components/VrArea';


function App() {
  return (
    <div className='bg-dark'>  
       
      <p className=''>Clic derecho: Arrastrar modelo<br/></p>
      <p> Clic izquierdo: Rotar modelo<br/></p>
      <p>Boton centrado: Zoom<br/></p>
       
      
      <Canvas className='canvas'> 
        <OrbitControls autoRotate="true" autoRotateSpeed="4"/>
        <spotLight intensity={0.8} angle={1} penumbra={1} position={[15, 60, 0]} castShadow />
        <spotLight intensity={0.8} angle={1} penumbra={1} position={[500, 0, 500]} castShadow />

        <Suspense>
        <Model/>
        </Suspense>
      </Canvas>
      <div >
      <VrArea />
      </div>
      <p>META LEARNING UNIVERSITY </p>
    </div>
  );
}
 
export default App;
