import React from 'react'
import {
  View,
  Text,
  Picker
} from 'react-native'
import CustomButton from '../customButton/CustomButton'
import Strings from '../../constants/Strings'
import styles from './Styles'
import NumberFormat from 'react-number-format'

const handlePaymentPress = () => {
  console.log('payment button pressed')
}

const Payment = (props) => {
  const {total} = props
  return (
    <View style={styles.container}>
      <View style={styles.containerPaymentMethod}>
        <Text style={styles.label}>Forma de pago: </Text>
        <Picker
          style={styles.paymentMethod}
          onValueChange={(itemValue, itemIndex) =>
            console.log('itemValue: ', itemValue, ' - itemIndex: ', itemIndex)
          }>
          <Picker.Item label="Contado" value="contado" />
          <Picker.Item label="Credito" value="credito" />
        </Picker>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.label}>Total de venta: </Text>
        <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.total}>{value}</Text>} />
      </View>
      <CustomButton
        label={Strings.PAY}
        onPress={handlePaymentPress}
      />
    </View>
  )
}

export default Payment
