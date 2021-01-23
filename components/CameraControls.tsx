import React, { useRef, useEffect } from 'react'
import { extend, ReactThreeFiber, MeshProps, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
extend({ OrbitControls })

export default function CameraControls() {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const { camera, gl, invalidate } = useThree()
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef<OrbitControls>();

    useFrame((state) => { if (controls.current) { controls.current.update() } })
    useEffect(() => void controls.current?.addEventListener('change', invalidate), [])
    // if ts error states " 'orbitControls' does not exist on type 'JSX.IntrinsicElements'"
    // go to  node_modules/react-three-fiber/three-types.d.ts
    // and under interface IntrinsicElements add 
    // orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>
    return <orbitControls
        enableDamping
        dampingFactor={0.1}
        ref={controls}
        args={[camera, gl.domElement]}
    />;
}