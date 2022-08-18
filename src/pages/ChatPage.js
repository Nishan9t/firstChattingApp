import React from 'react'
import ContactsComponent from '../components/ContactsComponent'
import MessageComponent from '../components/MessageComponent'

export default function ChatPage() {
  return (
    <div className='flex '>
      <ContactsComponent/>
      <MessageComponent/>
    </div>
  )
}
