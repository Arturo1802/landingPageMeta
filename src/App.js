import {Suspense } from 'react'
import './App.css';
import {Canvas} from '@react-three/fiber'
import Model from './components/Meta.js'
import { OrbitControls } from '@react-three/drei'; 
import VrArea from './components/VrArea';

function App() {
  return (
    <div className='main' >  
      <span className='medio'>Clic derecho: Arrastrar modelo<br/></span>
      <span className='medio'> Clic izquierdo: Rotar modelo<br/></span>
      <span className='medio'>Boton medio: Zoom<br/></span>
      <Canvas className='canvas'> 
        <OrbitControls/>
        <spotLight intensity={0.8} angle={1} penumbra={1} position={[5, 60, 15]} castShadow />
        <Suspense>
        <Model/>
        </Suspense>
      </Canvas>
      <div className='div'>
      <VrArea className="div"/>
      </div>
      <span className='medio'>META LEARNING UNIVERSITY </span>
    </div>
  );
}
 
export default App;
