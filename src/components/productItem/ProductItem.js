import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './Styles'
import AddProduct from '../alerts/AddProduct'

const addProductToCart = () => {
  console.log('adding to shopping cart')
}

const ProductItem = (props) => {
  const { name, price, image } = props
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => AddProduct(addProductToCart.bind(this))}
    >
      <View style={styles.containerImg}>
        <Image source={image} />
      </View>
      <Text style={styles.productName}>
        {name}
      </Text>
      <Text style={styles.productPrice}>
        {price}
      </Text>
    </TouchableOpacity>
  )
}

export default ProductItem
