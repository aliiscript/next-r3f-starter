import Head from "next/head";

interface MetaProps {
    title: string;
}

export default function Meta({ title }: MetaProps) {
    return (
        <Head>
            <meta name="title" content={`placeholder`} />
            <meta name="description" content={`placeholder`} />
            <meta name="keywords" content="threejs, react, showcase " />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
        </Head>
    );
}
