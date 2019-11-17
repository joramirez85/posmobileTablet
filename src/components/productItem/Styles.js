import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.BLACK,
    borderRadius: 4,
    borderWidth: 0.5,
    width: 170,
    margin: 7,
    height: 190
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DODGER_BLUE,
    marginLeft: 10
  },
  productPrice: {
    fontSize: 14,
    color: Colors.TORCH_RED,
    marginLeft: 10,
    marginBottom: 5
  },
  containerImg: {
    alignItems: 'center'
  }
})

export default styles
