import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'

const CustomButton = (props) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
