import React, {Component} from 'react'
import {
  Text,
  View
} from 'react-native'
import stylesCustomers from './StylesCustomers'
import ModalHeader from '../common/ModalHeader'
import Separator from '../separator/Separator'

const CustomerModal = (props) => {
  return (
    <View style={stylesCustomers.container}>
      <ModalHeader />
      <Separator />
    </View>
  )
}

export default CustomerModal
