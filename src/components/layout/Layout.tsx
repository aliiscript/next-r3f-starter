import { ReactNode } from 'react';
import Meta from './Meta'

import '../../styles/layout.scss';

interface LayoutProps {
    lessonName: string
    lessonNum: number
    chNum: number
    children: ReactNode
}

export default function Layout({ lessonName, lessonNum, chNum, children }: LayoutProps) {
    return (
        <>
            <Meta
                lessonName={lessonName}
                lessonNum={lessonNum}
                chNum={chNum}
            />
            <main className="page-wrapper">{children}</main>
        </>
    )
}