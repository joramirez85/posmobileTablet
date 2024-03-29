import React, { Component } from 'react'
import { View, SectionList, FlatList, Text } from 'react-native'
import ProductItem from '../../components/productItem/ProductItem'
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import { ScreenOrientation } from 'expo'
import styles from './Styles'
import imageTest from '../../../assets/images/Telephone.png'

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
        <View>
          <View style={styles.productsList} />
          <View>
            <SectionList
              sections={dataSource}
              renderItem={this.renderSection}
              keyExtractor={(item, index) => item + index}
              renderSectionHeader={({ section: { title } }) => (
                <SectionHeader title={title} />
              )}
            />
          </View>
        </View>
      )
    }
}
