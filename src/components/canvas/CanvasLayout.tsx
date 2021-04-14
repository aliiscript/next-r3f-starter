import { ReactNode } from "react"
import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf";

interface CanvasLayoutProps {
    children: ReactNode
}

export default function CanvasLayout({ children }: CanvasLayoutProps) {
    // Window Variables
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [pixelRatio, setPixelRatio] = useState(0)

    useEffect(() => {
        const canvas = document.querySelector('.webgl')

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setPixelRatio(window.devicePixelRatio)

        // Resizing
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
            setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // FullScreen Logic
        // window.addEventListener('dblclick', () => {
        //     // Have yet to find a solution to stop complaining 
        //     // about element not having the property webkitFullscreenElement

        //     const document: any = window.document
        //     const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

        //     if (!fullscreenElement) {
        //         if (canvas?.requestFullscreen) {
        //             canvas.requestFullscreen()
        //         }
        //     } else {
        //         if (document.exitFullscreen) {
        //             document.exitFullscreen()
        //         } else if (document.webkitExitFullscreen) {
        //             document.exitFullscreen()
        //         }
        //     }
        // })

    }, []);

    // Size
    const sizes = {
        width: typeof window !== undefined ? width : undefined,
        height: typeof window !== undefined ? height : undefined
    }
    // Aspect
    let aspectRatio = width/height

    return (
        <>
            <Canvas
                className="webgl"
                style={{ width: sizes.width, height: sizes.height }}
                // pixelRatio={pixelRatio}
                camera={{
                    position: [0, 0, 3],
                    aspect: aspectRatio,
                    near: 0.1,
                    far: 100,
                }}
            >
                {children}
               
                {/* <Perf position={"bottom-right"} /> */}
            </Canvas>
        </>
    );

}