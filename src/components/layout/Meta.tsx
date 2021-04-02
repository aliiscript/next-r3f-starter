import Head from 'next/head'
import { FC } from 'react'

interface MetaProps {
    lessonName: string
    chNum: number
    lessonNum: number
}

export default function Meta({ lessonName, chNum, lessonNum }: MetaProps) {
    return (
        <Head>
            <meta name="title" content={`${lessonNum}-${lessonName}`} />
            <meta name="description" content={`This is chapter ${chNum} lesson ${lessonNum}`} />
            <meta name="keywords" content="threejs, react, showcase " />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
        </Head>

    )
}