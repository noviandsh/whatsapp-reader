import styles from '../styles/Layout.module.css'
import { MdArrowBack, MdMoreVert, MdSearch } from 'react-icons/md'
import { useContext } from 'react'
import { RootContext } from '../pages'

export default function ChatsActionbar() {
    const { filename, setFilename, setMessages } = useContext(RootContext)
    const resetFile = () => {
        setFilename('')
        setMessages([])
    }
    return (
        <>
            <div className={styles.filename}>
                <button onClick={resetFile}><MdArrowBack /></button>
                <span>{filename.join(' ')}</span>
            </div>
            {/* <div>
                <span>WhatsApp Viewer</span>
            </div>
            <div className={styles.button_group}>
                <button title='Just a dummy button!!!'><MdSearch /></button>
                <button title='Just a dummy button!!!'><MdMoreVert /></button>
            </div> */}
        </>
    )
}
