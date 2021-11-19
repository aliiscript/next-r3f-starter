import { useControls } from "leva";
import Scene from "../components/scenes/Scene";
import CanvasLayout from "../components/canvas/index";
import Layout from "../components/layout/Layout";
import GlobalStyles from "../components/GlobalStyles";

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
            <GlobalStyles />
        </>
    );
}
