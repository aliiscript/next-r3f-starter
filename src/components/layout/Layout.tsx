import { ReactNode } from 'react';
import Meta from './Meta'

import '../../styles/layout.scss';

interface LayoutProps {
    title: string
    children: ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Meta
                title={title}
                
            />
            <main className="page-wrapper">{children}</main>
        </>
    )
}