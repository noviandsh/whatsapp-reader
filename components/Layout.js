import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Notifbar from './Notifbar'
import Actionbar from './Actionbar'
import Navbar from './Navbar'
import { useContext } from 'react'
import { RootContext } from '../pages'

export default function Layout({ children }) {
    const { filename } = useContext(RootContext)
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={styles.main}>
                <div className={`${styles.container} ${filename ? styles.phone : styles.tab}`}>
                    <div className={styles.screen}>
                        <div className={styles.camera}></div>
                        <Notifbar />
                        <Actionbar />
                        {/* <Navbar /> */}
                        {children}
                    </div>
                </div >
            </main>
        </>
    )
}
