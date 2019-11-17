import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 5
  },
  containerDetails: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 15
  },
  containerPaymentMethod: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  label: {
    fontWeight: 'bold'
  },
  paymentMethod: {
    // backgroundColor: '#FF0000',
    height: 40,
    width: 197
  },
  total: {
    width: 196,
    fontSize: 18,
    textAlign: 'right'
  }
})

export default styles
