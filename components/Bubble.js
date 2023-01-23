import style from '../styles/Chats.module.css'

export default function Bubble({ cont, subject, message }) {
    const { time, username, chat } = message
    return (
        <div className={`${style.bubble_container} ${subject ? style.receiver : style.sender}`}>
            <div className={`${style.chat_bubble} ${subject ? style.receiver : style.sender} ${cont ? style.continue : ''}`}>
                {cont ? '' : <span className={style.username}>{username}</span>}
                {chat}
                <span className={style.time}>{time}</span>
                {/* <button onClick={() => console.log(subject)}>cek</button> */}
            </div >
        </div>
    )
}
