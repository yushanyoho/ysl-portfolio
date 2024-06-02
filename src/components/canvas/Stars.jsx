import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points, Preload } from '@react-three/drei'

import * as random from 'maath/random/dist/maath-random.esm';



const Stars = (props) => {
  // ref: reference to the <Points> component
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  // console.log(sphere);

  useFrame((state, delta) => {
    // delta: time in seconds between frames
    // change the x, y coordinate of the <Points> component
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 5;
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas