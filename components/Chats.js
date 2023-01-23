import { useEffect, useState } from "react";
import Bubble from "./Bubble";
import style from "../styles/Chats.module.css"

export default function Chats({ messages }) {
    const [subject, setSubject] = useState([])
    const [dateGroup, setDateGroup] = useState([])

    useEffect(() => {
        setSubject([...new Set(messages.map(message => message.username))])
        setDateGroup([...new Set(messages.map(message => message.date))])
    }, [])

    return (
        <div className={style.chat_container}>
            {
                dateGroup.map((date, i) =>
                    <div key={i}>
                        <div className={style.date}><span>{date}</span></div>
                        {
                            messages.map((message, i, arr) =>
                                date === message.date ?
                                    <Bubble
                                        key={i}
                                        cont={(i !== 0 ? arr[i - 1].username : '') === message.username}
                                        subject={subject.indexOf(message.username)}
                                        message={message}
                                    />
                                    :
                                    ''
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
