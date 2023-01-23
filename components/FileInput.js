import React, { createRef, useContext } from 'react'
import { MdAttachFile } from 'react-icons/md'
import { RootContext } from '../pages'
import styles from '../styles/Fileinput.module.css'

export default function FileInput() {
    const { setMessages, setFilename } = useContext(RootContext)
    const fileInput = createRef()

    const combineMessages = (messages) => {
        const dateReg = /^[0-9]+\/[0-9]+\/[0-9]+/i
        const result = []
        messages.forEach((message) => {
            if (!message[0].match(dateReg)) {
                result[result.length - 1][1] += `\n${message}`
            } else {
                result.push([...message])
            }
        })
        return result
    }
    const getFilename = (filename) => {
        const result = filename
            .replace(/\.txt/i, '')
            .split(' ')
        result.splice(0, 3)
        // result.join(' ')
        setFilename(result)
    }

    const submitFile = async (e) => {
        e.preventDefault()
        try {
            const files = fileInput.current.files[0]
            const reader = new FileReader()

            reader.onload = async (e) => {
                const texts = (e.target.result).replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "").split(/\r?\n/)

                // split text based on dash char and remove empty array
                const splittedTexts = texts.map((text) => (text.split(/ - (.*)/s).filter(item => item)))
                // remove "end-to-end encrypt" text 
                const removeEncryptText = splittedTexts.filter((text, index) => index !== 0 || !text[1].includes('end-to-end'))
                // handle newline chat become array
                const messagesCombined = combineMessages(removeEncryptText)
                // split date, time, username, and chat
                const result = messagesCombined.map((texts) => {
                    const dateTime = texts[0].split(/,\s|\s/i)
                    const usernameChat = texts[1].split(/: (.*)/s).filter(item => item)
                    return { date: dateTime[0], time: dateTime[1], username: usernameChat[0], chat: usernameChat[1] }
                })
                setMessages(result)
            }
            reader.readAsText(files)
            getFilename(files.name)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <form className={styles.file_form} onSubmit={(e) => submitFile(e)}>
                <label className={styles.file_input} htmlFor="file-input">
                    <MdAttachFile /> <span>Select file</span>
                    <input id='file-input' type="file" accept=".txt" ref={fileInput} />
                </label>
                <input type="submit" value="Process" />
            </form>
        </div>
    )
}
