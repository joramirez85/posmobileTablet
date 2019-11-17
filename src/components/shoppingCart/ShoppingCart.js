import React from 'react'
import { FlatList, View } from 'react-native'
import ProductItemCart from '../productItemCart/ProductItemCart'
import Separator from '../separator/Separator'
import styles from './Styles'

const ShoppingCart = (props) => {
  const { items } = props
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        ItemSeparatorComponent={() => (<Separator />)}
        renderItem={itemData => (
          <ProductItemCart
            quantity={itemData.item.quantity}
            name={itemData.item.name}
            price={itemData.item.price}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

export default ShoppingCart
