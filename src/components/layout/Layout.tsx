import { ReactNode } from 'react';
import Meta from './Meta'

import styles from '../../styles/layout.module.scss';

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
            <main className={styles.pagewrapper}>{children}</main>
        </>
    )
}