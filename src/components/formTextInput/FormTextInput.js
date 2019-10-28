import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styles from './Styles'

const FormTextInput = (props) => {
  const { style, ...otherProps } = props
  return (
    <TextInput
      style={[styles.textInput, style]}
      {...otherProps}
    />
  )
}

export default FormTextInput
