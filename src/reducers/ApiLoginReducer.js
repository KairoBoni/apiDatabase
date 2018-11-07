import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin'
initialState = {
    user: null
}

const ApiLoginReducer = async (state = initialState, action) => {
    switch (action.type) {
        case 'GOOGLE_LOGIN':
            GoogleSignin.configure({
            });
            await GoogleSignin.signIn()
                .then(async (data) => {
                    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                    const user = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
                    state = {
                        user: user
                    }
                })
                .catch((error) => {
                    alert(error);
                })
            break;
    }
    return state
};

export default ApiLoginReducer;