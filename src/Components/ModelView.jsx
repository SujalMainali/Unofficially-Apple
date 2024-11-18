import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Iphone from './Iphone'

const ModelView = (index,gsapType,groupRef,controlRef,setRotationState,item,size) => {
  return (
    
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-gray-700 w-full h-full
        ${index===2}?'right-[-100%]':''`}
    >

      
      <PerspectiveCamera makeDefault={true} position={[0, 0, 4]} />
      <ambientLight intensity={0.5} />

      {/* Directional light to simulate sunlight */}
      <directionalLight
        intensity={1}
        position={[5, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Point light for highlights */}
      <pointLight intensity={0.8} position={[-3, 2, -3]} color="white" />

      {/* SpotLight for focused lighting */}
      <spotLight
        intensity={1.2}
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />


      <OrbitControls></OrbitControls>

      <group ref={groupRef} name={`${index==1}?'small':'large'`} position={[0,0,0]}> 
        <Suspense fallback={<div>Loading...</ div>}>
          <Iphone/>
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView