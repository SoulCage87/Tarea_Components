import { View, Text } from 'react-native'
import React, {ReactNode, createContext, useState} from 'react'

interface contact {
    name: string,
    phone: string
}

interface ContextProps {
    contacts: contact[],
    addContact: (name: string, phone: string) => void
}

interface ContactProviderProps {
    children: ReactNode
}

export const ContactsContext = createContext<ContextProps>({
    contacts: [],
    addContact: () => {},
  });



export default function ContactContext(props: ContactProviderProps) {
    const [contacts, setContacts] = useState<contact[]>([]);

   const addContact = (name: string, phone: string) => {
    setContacts([...contacts, {name, phone}])
   }


  return (
    <View>
      <ContactsContext.Provider value={{contacts, addContact}}>
          {props.children}
      </ContactsContext.Provider>
    </View>
  )
}


