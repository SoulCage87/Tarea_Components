import { View, Text, Alert, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContactsContext } from '../Context/ContactContext'

export default function ConsumerContacts() {
const {addContact, contacts} = useContext(ContactsContext)
const [name, setName] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')

const handlerContacts = () => {
  if (name.length < 3) {
    Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres');
    return
  }else if (phoneNumber.length < 8) {
    Alert.alert('Error', 'El numero telefonico debe tener al menos 8 caracteres');
    return 'error'
  }

  addContact(name, phoneNumber);
  setName('')
  setPhoneNumber('')
};

  return (
    <View>
      <TextInput placeholder='Nombre del contacto'
      value={name}
      onChangeText={setName}>
      </TextInput>

      <TextInput placeholder='Numero de contacto'
      value={phoneNumber}
      onChangeText={setPhoneNumber}>
      </TextInput>

      <Button title='Agregar' onPress={handlerContacts}></Button>

      <Text style={{justifyContent: 'center', textAlign: 'center'}}>Contacts:</Text>
      {
        contacts.map((contact, i) => (
          <Text style={{textAlign: 'center'}} key={i}>{contact.name}  {contact.phone}</Text>
        ))
      }
    </View>
  )
}
