import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()

    const setActiveLink = (page) => router.pathname === page ? styles.active : ''
    return (
        <>
            <IconContext.Provider value={{ size: "30px" }}>
                <div className={styles.tabbar}>
                    <ul className={styles.links}>
                        <li>
                            <Link href='/' className={setActiveLink('/')}>Home</Link>
                        </li>
                        <li>
                            <Link href='/chats' className={setActiveLink('/chats')}>Chats</Link>
                        </li>
                    </ul>
                    <div className={styles.indicator}></div>
                </div>
            </IconContext.Provider>
        </>
    )
}
