import React, { Component } from 'react'
import { View, SectionList, FlatList, Text } from 'react-native'
import ProductItem from '../../components/productItem/ProductItem'
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import Customers  from '../../components/customers/Customers'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
import Separator from '../../components/separator/Separator'
import VerticalSeparator from '../../components/separator/VerticalSeparator'
import Payment from '../../components/payment/Payment'
import { ScreenOrientation } from 'expo'
import styles from './Styles'
import imageTest from '../../../assets/images/Telephone.png'
import Modal from "react-native-modal"
import CustomerModal from '../../components/modals/CustomersModal'

const dataSource = [
  {
    title: 'Salas',
    data: [
      {
        list: [
          { name: 'Telefono1', price: '$300', image: imageTest },
          { name: 'Telefono2', price: '$300', image: imageTest },
          { name: 'Telefono3', price: '$300', image: imageTest }
        ]
      }
    ]
  },
  {
    title: 'Refrigeradores',
    data: [
      {
        list: [
          { name: 'Telefono1', price: '$300', image: imageTest },
          { name: 'Telefono2', price: '$300', image: imageTest },
          { name: 'Telefono3', price: '$300', image: imageTest }
        ]
      }
    ]
  },
  {
    title: 'Comedores',
    data: [
      {
        list: [
          { name: 'Telefono1', price: '$300', image: imageTest },
          { name: 'Telefono2', price: '$300', image: imageTest },
          { name: 'Telefono3', price: '$300', image: imageTest }
        ]
      }
    ]
  },
  {
    title: 'Ventiladores',
    data: [
      {
        list: [
          { name: 'Telefono1', price: '$300', image: imageTest },
          { name: 'Telefono2', price: '$300', image: imageTest },
          { name: 'Telefono3', price: '$300', image: imageTest }
        ]
      }
    ]
  }
]

const dataSourceCart = [
  { name: 'Telefono1 telephone iphone XS', price: '$300', quantity: 1 },
  { name: 'Telefono2', price: '$300', quantity: 1 },
  { name: 'Telefono3', price: '$300', quantity: 1 }
]

export default class SalesScreen extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  renderSection = ({ item }) => {
    return (
      <FlatList
        data={item.list}
        numColumns={3}
        renderItem={itemData => (
          <ProductItem
            name={itemData.item.name}
            price={itemData.item.price}
            image={itemData.item.image}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Modal isVisible={true}>
          <CustomerModal />
        </Modal>
        <View style={styles.containerProductsList}>
          <SectionList
            sections={dataSource}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderSection}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
              <SectionHeader title={title} />
            )}
          />
        </View>
        <VerticalSeparator />
        <View style={styles.containerRightSide}>
          <Customers
            customerName={'Jesus Omar Ramirez Aguilar'}
          />
          <Separator />
          <ShoppingCart
            items={dataSourceCart}
          />
          <Payment
            total={1500}
          />
        </View>
      </View>
    )
  }
}
