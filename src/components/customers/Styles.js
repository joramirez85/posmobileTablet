import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: 15,
    marginBottom: 15,
    height: 50,
    // height: 1,
    // alignItems: 'center',
    // backgroundColor: Colors.BLACK
  },
  customerName: {
    // backgroundColor: Colors.TORCH_RED,
    width: 260,
    height: 45,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  customerBtn: {
    width: 45,
    height: 45
  }
})

export default styles
