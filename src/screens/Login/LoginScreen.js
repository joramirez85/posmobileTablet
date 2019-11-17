import React, { Component } from 'react'
import { Image, View } from 'react-native'
import CustomButton from '../../components/customButton/CustomButton'
import FormTextInput from '../../components/formTextInput/FormTextInput'
import imageLogo from '../../../assets/images/logo.png'
import styles from './Styles'
import Strings from '../../constants/Strings'
import { ScreenOrientation } from 'expo'

export default class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  handleEmailChange = (email) => {
    this.setState({
      email
    })
  }

  handlePasswordChange = (password) => {
    this.setState({
      password
    })
  }

  handleLoginPress = () => {
    console.log('Login button pressed')
    this.props.navigation.navigate('SalesScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Image source={imageLogo} style={styles.logo} />
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={Strings.EMAIL_PLACEHOLDER}
            />
            <FormTextInput
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={Strings.PASSWORD_PLACEHOLDER}
            />
            <CustomButton
              label={Strings.LOGIN}
              onPress={this.handleLoginPress}
            />
          </View>
        </View>
      </View>
    )
  }
}
