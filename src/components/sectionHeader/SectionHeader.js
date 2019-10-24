import React from 'react'
import { Text } from 'react-native'
import styles from './Styles'

const SectionHeader = (props) => {
    const { title } = props
    return (
        <Text style={styles.header}>
            {title}
        </Text>
    )
} 

export default SectionHeader
