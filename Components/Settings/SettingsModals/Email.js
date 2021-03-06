import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { putUser } from '../../store/auth-reducer'

class Email extends React.Component {
  state = {
    email: this.props.email
  }

  putEmail = () => {
    this.props.updateEmail('email', this.state)
    this.props.toggle()
  }

  emailChangeHandler = event => {
    this.setState({
      email: event
    })
  }

  render() {
    return (
      <Modal visible={this.props.visibility}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={this.state.email}
              placeholderTextColor="black"
              value={this.state.email}
              onChangeText={this.emailChangeHandler}
              keyboardType="email-address"
              returnKeyType="next"
              textContentType="emailAddress"
              autoFocus={true}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={this.props.toggle}
                style={styles.cancelButtonContainer}
              >
                <View>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.putEmail}
                disabled={this.state.email && !this.state.email.includes('@')}
                style={styles.submitButtonContainer}
              >
                <View>
                  <Text style={styles.buttonText}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.space} />
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: '100%'
  },
  input: {
    height: 30,
    width: '70%',
    fontSize: 15,
    backgroundColor: 'white',
    color: '#2f95dc',
    paddingLeft: 10
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'center'
  },
  inputLabel: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  submitButtonContainer: {
    height: 40,
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#32FA8F',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2
  },
  cancelButtonContainer: {
    height: 40,
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF4C4C',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2
  },
  space: {
    height: '40%',
    backgroundColor: '#2f95dc'
  }
})

// const mapStateToProps = state => {
//   return {
//     email: state.user.email
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    updateEmail: (field, email) => dispatch(putUser(field, email))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Email)
