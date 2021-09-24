import { useControls } from "leva";
import React, { useRef, useState, useEffect } from "react";
import Scene from "../components/scenes/Scene";
import styles from "../styles/home.module.scss";
import CanvasLayout from "../components/canvas/CanvasLayout";
import Layout from "../components/layout/Layout";

export default function Home() {
    const { color, hoverColor } = useControls({
        color: "#bab568",
        hoverColor: "#1b3984",
    });

    return (
        <>
            <Layout title={"First"}>
                <CanvasLayout>
                    <Scene color={color} hoverColor={hoverColor} />
                </CanvasLayout>
            </Layout>
        </>
    );
}
