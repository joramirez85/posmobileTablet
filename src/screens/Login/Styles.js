import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerForm: {
    borderColor: Colors.BLACK,
    borderRadius: 10,
    borderWidth: 0.5,
    width: 350,
    height: 350,
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 15
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: 300,
    marginBottom: 15
  }
})

export default styles
