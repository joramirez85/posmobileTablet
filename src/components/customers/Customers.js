import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import images from '../../common/images'
import styles from './Styles'

const openModal = () => {
  console.log('** openModal')
}

const Customers = (props) => {
  const { customerName } = props
  if (customerName === ''){
    customerName = 'Cliente'
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          openModal()
        }}>
        <Image
          style={styles.customerBtn}
          source={images.findCustomer}
        />
      </TouchableOpacity>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.customerName}>
        {customerName}
      </Text>
    </View>
  )
}

export default Customers
