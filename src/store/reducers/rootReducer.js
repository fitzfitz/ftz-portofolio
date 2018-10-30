import authReducer from './authReducer'
import portofolioReducer from './portofolioReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    portofolio: portofolioReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer