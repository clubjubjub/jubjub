import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import SettingsList from 'react-native-settings-list'
import Email from './SettingsModals/Email'
import Name from './SettingsModals/Name'
import PhoneNumber from './SettingsModals/PhoneNumber'
import Password from './SettingsModals/Password'
import Logout from './SettingsModals/Logout'
import ProfilePic from './SettingsModals/ProfilePicture'
import Themes from './SettingsModals/Themes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { asyncStorageLookup, logout } from '../store/auth-reducer'
import { putUserStyle } from '../store/style-reducer'

class Settings extends React.Component {
  constructor() {
    super()
    this.state = {
      emailViz: false,
      phoneViz: false,
      nameViz: false,
      passwordViz: false,
      logoutViz: false,
      profilePicViz: false,
      switchValue: false,
      themesViz: false
    }
  }

  onValueChange = value => {
    console.log('value', value)
    this.setState({ switchValue: value })
    this.props.putStyle('darkMode', this.props.user.id, {
      darkMode: value
    })
  }
  toggleName = () => {
    this.setState({ nameViz: !this.state.nameViz })
  }

  toggleThemes = () => {
    this.setState({ themesViz: !this.state.themesViz })
  }

  toggleEmail = () => {
    this.setState({ emailViz: !this.state.emailViz })
  }

  togglePhone = () => {
    this.setState({ phoneViz: !this.state.phoneViz })
  }

  togglePassword = () => {
    console.log('passsword')
    this.setState({ passwordViz: !this.state.passwordViz })
  }

  toggleLogout = () => {
    this.setState({ logoutViz: !this.state.logoutViz })
  }

  toggleProfilePic = () => {
    this.setState({ profilePicViz: !this.state.profilePicViz })
  }

  componentDidMount() {
    console.log('hey', this.props.styles.darkMode)
    this._StoreData()
    this.setState({ switchValue: this.props.styles.darkMode })
  }
  _StoreData = async () => {
    try {
      console.log(this.props.user.id)
      if (this.props.user.id) {
        const data = await AsyncStorage.setItem(
          'USERID',
          JSON.stringify(this.props.user.id)
        )
        console.log('data', data)
        return data
      }
    } catch (err) {
      console.log('inside the setUserID', err)
    }
  }

  _getProfilePicture = () => {
    if (this.props.user.avatar) {
      return { uri: this.props.user.avatar }
    } else {
      return require('../../assets/fakeuser.png')
    }
  }

  render() {
    const email = this.props.user.email
    const first = this.props.user.firstName
    const last = this.props.user.lastName
    let phone
    let colors = this.props.styles
    // colors.primary = 'red'
    console.log('this is the styles', this.props.styles)
    if (this.props.user.phone) {
      phone = this.props.user.phone
    } else {
      phone = 'Enter your Phone Number'
    }
    return (
      <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: colors.backgroundColor,
            borderColor: colors.border
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
              color: colors.text
            }}
          >
            Settings
          </Text>
        </View>
        <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
          <SettingsList borderColor={colors.border} defaultItemSize={65}>
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              icon={
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 100 / 2
                  }}
                  source={this._getProfilePicture()}
                />
              }
              // title="Profile Picture"
              onPress={() => this.toggleProfilePic()}
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />

            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="account-edit"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Name"
              titleInfo={`${first} ${last}`}
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              //titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.toggleName()}
              titleStyle={{ color: colors.text }}
              backgroundColor={colors.backgroundColor}
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="email-plus-outline"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Email"
              titleInfo={`${email}`}
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              onPress={() => this.toggleEmail()}
              titleStyle={{ color: colors.text }}
              backgroundColor={colors.backgroundColor}
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="lock-plus"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Password"
              titleInfo="***********"
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              onPress={() => this.togglePassword()}
              titleStyle={{ color: colors.text }}
              backgroundColor={colors.backgroundColor}
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="cellphone-basic"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Phone Number"
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              arrowStyle={{ color: colors.text }}
              titleInfo={phone}
              onPress={() => this.togglePhone()}
              titleStyle={{ color: colors.text }}
              backgroundColor={colors.backgroundColor}
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="cellphone-basic"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasSwitch={true}
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              title="Enable Dark Mode"
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="cellphone-basic"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Theme"
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              arrowStyle={{ color: colors.text }}
              onPress={() => this.toggleThemes()}
            />
            <SettingsList.Item
              icon={
                <MaterialCommunityIcons
                  name="logout"
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    marginLeft: 13,
                    marginTop: 24
                  }}
                />
              }
              title="Logout"
              backgroundColor={colors.backgroundColor}
              titleStyle={{ color: colors.text }}
              onPress={() => this.toggleLogout()}
              titleStyle={{ color: colors.text }}
              backgroundColor={colors.backgroundColor}
            />
          </SettingsList>
        </View>
        <Name
          visibility={this.state.nameViz}
          toggle={this.toggleName}
          first={first}
          last={last}
        />
        <Email
          visibility={this.state.emailViz}
          toggle={this.toggleEmail}
          email={email}
        />

        <PhoneNumber
          visibility={this.state.phoneViz}
          toggle={this.togglePhone}
          phone={phone}
        />
        <Password
          visibility={this.state.passwordViz}
          toggle={this.togglePassword}
        />
        <Logout
          visibility={this.state.logoutViz}
          toggle={this.toggleLogout}
          name={first}
        />
        <ProfilePic
          visibility={this.state.profilePicViz}
          toggle={this.toggleProfilePic}
          name={first}
        />
        <Themes
          visibility={this.state.themesViz}
          toggle={this.toggleThemes}
          name={first}
        />

        {/* Navigator buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 15,
            alignItems: 'flex-end'
          }}
        >
          <MaterialCommunityIcons
            name="crosshairs-gps"
            style={{ color: colors.disabledNavButton, fontSize: 36 }}
            onPress={() => this.props.changePage(-2)}
          />

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.changePage(-1)}>
              <MaterialCommunityIcons
                name="circle-outline"
                style={{
                  color: colors.disabledNavButton,
                  fontSize: 60,
                  marginBottom: 5
                }}
              />
            </TouchableOpacity>
            {/* <Icon
                    name="ios-images"
                    style={{ color: 'white', fontSize: 36 }}
                  /> */}
          </View>
          <MaterialCommunityIcons
            name="google-circles-communities"
            style={{ color: colors.primary, fontSize: 36 }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    styles: state.styles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    putStyle: (field, userId, update) =>
      dispatch(putUserStyle(field, userId, update))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
