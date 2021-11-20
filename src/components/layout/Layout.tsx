import { ReactNode } from 'react';
import styled from 'styled-components';
import Head from "next/head";

interface LayoutProps {
    title: string
    children: ReactNode
}

function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Head>
                <meta name="title" content={`placeholder`} />
                <meta name="description" content={`placeholder`} />
                <meta name="keywords" content="threejs, react, showcase " />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <StyledMain>{children}</StyledMain>
        </>
    )
}

const StyledMain = styled.main`
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
`;

export default Layout;