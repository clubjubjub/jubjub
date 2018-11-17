import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native'

class ResultModal extends Component {
  state = {}
  render() {
    console.log('inside Result Modal', this.props)
    let name
    let rating
    let address
    if (this.props.data) {
      name = this.props.data.name
      rating = this.props.data.rating
      if (this.props.data.location) {
        address = this.props.data.location.display_address
      }
    }

    return (
      <Modal visible={this.props.visibility}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB'
          }}
        >
          <Text>Hey this is the modal. hope it renders...</Text>
          <Text>Name: {name}</Text>
          <Text>Rating: {rating}</Text>
          <Text>Address: {address}</Text>
          <TouchableOpacity onPress={this.props.closeModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

export default ResultModal
