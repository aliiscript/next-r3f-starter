import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

interface SceneProps {
    color: string;
    hoverColor: string;
}

interface BoxProps {
    color: string;
    hoverColor: string;
}

const Box = (props: BoxProps) => {
    let color = props.color;
    let hoverColor = props.hoverColor;
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>();

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current)
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? hoverColor : color} />
        </mesh>
    );
};

function Scene(props: SceneProps) {
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box color={props.color} hoverColor={props.hoverColor} />
            <OrbitControls />
        </>
    );
}

export default Scene;