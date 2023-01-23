import styles from '../styles/Layout.module.css'
import { IconContext } from 'react-icons'
import { useContext } from 'react'
import { RootContext } from '../pages'
import HomeActionbar from './HomeActionbar'
import ChatsActionbar from './ChatsActionbar'

export default function Actionbar() {
    const { filename } = useContext(RootContext)
    return (
        <>
            <IconContext.Provider value={{ size: "22px" }}>
                <div className={styles.actionbar}>
                    {
                        filename ?
                            <ChatsActionbar />
                            :
                            <HomeActionbar />
                    }
                </div>
            </IconContext.Provider>
        </>
    )
}
