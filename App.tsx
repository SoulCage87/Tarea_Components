import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ContactContext from './src/screen/Context/ContactContext'
import ConsumerContacts from './src/screen/Consumer/ConsumerContacts'


export default class App extends Component {
  render() {
    return (
      <View>
        <ContactContext>
          <ConsumerContacts />
        </ContactContext>
      </View>
    )
  }
}