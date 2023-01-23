import styles from '../styles/Layout.module.css'
import { MdBattery90, MdSignalCellularAlt } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

export default function Notifbar() {
    return (
        <>
            <IconContext.Provider value={{ size: "14px" }}>
                <div className={styles.notifbar}>
                    <div className={styles.notif}>
                        <span>10:29</span>
                        <RiWhatsappFill />
                    </div>
                    <div className={styles.icon}>
                        <MdSignalCellularAlt />
                        <MdSignalCellularAlt />
                        <span>94%</span>
                        <MdBattery90 />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}
