import { useHelper } from 'drei'
import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, MeshProps, useFrame, useThree } from 'react-three-fiber'
import CameraControls from '../components/CameraControls'
import Scene from '../components/Scene'
import type { Mesh } from 'three'
import '../styles/home.scss'

const Box: React.FC<MeshProps> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'red'} />
    </mesh>
  )
}

export default function Home() {
  // Window Variables
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [pixelRatio, setPixelRatio] = useState(0)

  useEffect(() => {
    const canvas = document.querySelector('.webgl')

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setPixelRatio(window.devicePixelRatio)

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // FullScreen Logic
    window.addEventListener('dblclick', () => {
      // Have yet to find a solution to stop complaining 
      // about element not having the property webkitFullscreenElement

      const document: any = window.document
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

      if (!fullscreenElement) {
        if (canvas?.requestFullscreen) {
          canvas.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.exitFullscreen()
        }
      }
    })

  }, []);

  const sizes = {
    width: typeof window !== undefined ? width : undefined,
    height: typeof window !== undefined ? height : undefined
  }

  return (
    <div className="page-wrapper">
      <Head>
        <title>Create Next r3f App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Canvas
        className="webgl"
        style={{ width: sizes.width, height: sizes.height }}
        pixelRatio={pixelRatio}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
