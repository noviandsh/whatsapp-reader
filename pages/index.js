import Image from 'next/image'
import { createContext, useState } from 'react'
import Chats from '../components/Chats'
import FileInput from '../components/FileInput'
import Layout from '../components/Layout'
import styles from '../styles/Layout.module.css'

export const RootContext = createContext()
const Provider = RootContext.Provider

export default function Home() {
  const [messages, setMessages] = useState([])
  const [filename, setFilename] = useState('')
  return (
    <Provider value={{ messages, setMessages, filename, setFilename }}>
      <Layout>
        <div className={styles.content}>
          {
            messages.length === 0 ?
              <>
                <div className={styles.logo}>
                  <Image src='/logo.png' alt='WhatsApp Reader Logo' layout='fill' objectFit='contain' />
                </div>
                <FileInput />
              </>
              :
              <Chats messages={messages} />
          }
        </div>
      </Layout>
    </Provider>
  )
}
