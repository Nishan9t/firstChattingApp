import React from 'react'
import ContactsComponent from '../components/ContactsComponent'
import MessageComponent from '../components/MessageComponent'

export default function ChatPage() {
  return (
    <div className='flex max-w-7xl mx-auto'>
      <ContactsComponent/>
      <MessageComponent/>
    </div>
  )
}
