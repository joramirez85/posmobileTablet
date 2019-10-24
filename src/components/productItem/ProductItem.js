import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'

const ProductItem = (props) => {
    const { name, price, image } = props
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={ image } />
            </View>
            <Text style={styles.productName}>
                {name}
            </Text>
            <Text style={styles.productPrice}>
                {price}
            </Text>
        </View>
    )
} 

export default ProductItem
