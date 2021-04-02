import { useControls } from "leva";
import React, { useRef, useState, useEffect } from "react";
import Scene from "../components/Scene";
import "../styles/home.scss";
import CanvasLayout from "../components/CanvasLayout";
import Layout from "../components/Layout";

export default function Home() {
    const { color, hoverColor } = useControls({
        color: "#ff6030",
        hoverColor: "#1b3984",
    });

    return (
        <>
            <Layout lessonName={"First"} lessonNum={0} chNum={1}>
                <CanvasLayout>
                    <Scene color={color} hoverColor={hoverColor} />
                </CanvasLayout>
            </Layout>
        </>
    );
}
