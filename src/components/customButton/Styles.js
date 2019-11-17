import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center',
    height: 22
  }
})

export default styles
