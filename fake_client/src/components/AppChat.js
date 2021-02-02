import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/LocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import '../components/AppChat.css'
import '../components/bootstrap.scss'


function AppChat() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <div className='use-bootstrap'>
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
    </div>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default AppChat;