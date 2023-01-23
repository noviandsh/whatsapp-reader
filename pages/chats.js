import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'

export default function chats() {
  const router = useRouter()
  console.log(router.state)
  return (
    <Layout>
      <div>
        <h1>ChatList</h1>
      </div>
    </Layout>
  )
}
