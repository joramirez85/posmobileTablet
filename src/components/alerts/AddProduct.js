import { Alert } from 'react-native'

const title = 'Agregar Producto'
const message = 'Deseas agregar este producto a la lista de venta?'

const buildButtons = (onContinue) => [
  { text: 'Cancelar' },
  {
    text: 'Agregar',
    onPress: () => onContinue()
  }
]

export default onContinue => {
  Alert.alert(title, message, buildButtons(onContinue))
}
