import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import images from '../../common/images'
import styles from './Styles'

const ModalHeader = (props) => {
  return (
    <View style={styles.containerModalHeader}>
      <TouchableOpacity>
        <Image
          style={styles.modalBtn}
          source={images.closeModal}
        />
      </TouchableOpacity>
      <Text style={styles.titleModal}>
        Selecciona un Cliente
      </Text>
      <TouchableOpacity>
        <Image
          style={styles.modalBtn}
          source={images.addCustomerModal}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ModalHeader
