import React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import SettingsList from 'react-native-settings-list'
import Email from './SettingsModals/Email'
import Name from './SettingsModals/Name'
import PhoneNumber from './SettingsModals/PhoneNumber'

class Settings extends React.Component {
  state = {
    emailViz: false,
    phoneViz: false,
    nameViz: false,
    passwordViz: false,
    logoutViz: false
  }
  toggleName = () => {
    this.setState({ nameViz: !this.state.nameViz })
  }

  toggleEmail = () => {
    this.setState({ emailViz: !this.state.emailViz })
  }

  togglePhone = () => {
    this.setState({ phoneViz: !this.state.phoneViz })
  }

  togglePassword = () => {
    this.setState({ passwordViz: !this.state.passwordViz })
  }

  togglePassword = () => {
    this.setState({ logoutViz: !this.state.logoutViz })
  }

  render() {
    var bgColor = '#DCE3F4'
    return (
      <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: '#f7f7f8',
            borderColor: '#c8c7cc'
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 50
            }}
          />
        </View>
        <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              icon={
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 10,
                    marginBottom: 10
                  }}
                  source={require('../../assets/fakeuser.png')}
                />
              }
              title="Profile Picture"
              onPress={() => alert('Route to Picture Page')}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />

            <SettingsList.Item
              icon={
                <Image
                //style={styles.imageStyle}
                //source={require('./images/wifi.png')}
                />
              }
              title="Name"
              titleInfo="Auto Populate UserName"
              //titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.toggleName()}
            />
            <SettingsList.Item
              icon={
                <Image
                //style={styles.imageStyle}
                //source={require('./images/cellular.png')}
                />
              }
              title="Email"
              titleInfo="Auto Populate Email"
              onPress={() => this.toggleEmail()}
            />
            <SettingsList.Item
              icon={
                <Image
                //style={styles.imageStyle}
                //source={require('./images/cellular.png')}
                />
              }
              title="Password"
              titleInfo="***********"
              onPress={() => this.togglePassword()}
            />
            <SettingsList.Item
              icon={
                <Image
                //style={styles.imageStyle}
                //source={require('./images/cellular.png')}
                />
              }
              title="Phone Number"
              titleInfo="Auto Populate Number"
              onPress={() => this.togglePhone()}
            />
            <SettingsList.Item
              icon={
                <Image
                //style={styles.imageStyle}
                //source={require('./images/cellular.png')}
                />
              }
              title="Logout"
              onPress={() => alert('Route To Logout Page')}
            />
          </SettingsList>
        </View>
        <Name visibility={this.state.nameViz} toggle={this.toggleName} />
        <Email visibility={this.state.emailViz} toggle={this.toggleEmail} />
        <PhoneNumber
          visibility={this.state.phoneViz}
          toggle={this.togglePhone}
        />
        <PhoneNumber
          visibility={this.state.passwordViz}
          toggle={this.togglePassword}
        />
      </View>
    )
  }
  onValueChange(value) {
    this.setState({ switchValue: value })
  }
}

export default Settings
