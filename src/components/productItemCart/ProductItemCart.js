import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './Styles'
import images from '../../common/images'
import imageTest from '../../../assets/images/Telephone.png'

const ProductItemCart = (props) => {
  const { quantity, name, price } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBtn}>
        <Image
          style={styles.quantityImg} 
          source={images.leftArrow}
        />
        <Text>
          {quantity}
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.thumbnail} 
        source={imageTest}
      />
      <Text numberOfLines={2} style={styles.name}>
        {name}
      </Text>
      <Text style={styles.price}>
        {price}
      </Text>
    </View>
  )
}

export default ProductItemCart
