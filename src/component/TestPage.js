import React from 'react';
import { View, TextInput, Button, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { setData } from '../actions/databaseAction'
import { googleLogin } from '../actions/loginAction';


class TestPage extends React.Component {
  state = {
    collection: "",
    someKey: "",
    value: ""
  }



  setData = () => {
    console.log(this.props);
    this.props.setData(this.state.collection, this.state.someKey, this.state.value)
  }

  googleLogin = () => {
    console.log(this.props)
    this.props.googleLogin();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You can use the camera")
      } else {
        alert("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <View>
        <TextInput placeholder={"Collection"} onChangeText={(collection) => this.setState({ collection })} value={this.state.collection} />
        <TextInput placeholder={"key"} onChangeText={(someKey) => this.setState({ someKey })} value={this.state.someKey} />
        <TextInput placeholder={"value"} onChangeText={(value) => this.setState({ value })} value={this.state.value} />
        <Button title={"Submit"} onPress={this.setData} />
        <Button title={'Login with Google'} onPress={this.googleLogin} />
        <Button title={'Camera Permissions'} onPress={this.requestCameraPermission} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    database: state.ApiDatabaseReducer,
    login: state.ApiLoginReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (collection, someKey, value) => {
      dispatch(setData(collection, someKey, value))
    },

    googleLogin: () => {
      dispatch(googleLogin());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);