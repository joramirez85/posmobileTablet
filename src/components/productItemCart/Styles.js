import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 7
  },
  containerBtn: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center'
    // backgroundColor: '#00FF00'
  },
  quantityImg: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  thumbnail: {
    width: 35,
    height: 35,
    marginLeft: 5,
    marginRight: 5
  },
  name: {
    fontSize: 14,
    width: 180,
    marginLeft: 5
  },
  price: {
    fontSize: 14,
    width: 40,
    fontWeight: 'bold'
  }
})

export default styles
