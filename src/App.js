import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp ({
            apiKey: "AIzaSyBzLgblp-imMSU0XxNY6NslzDFfAvXcVQQ",
            authDomain: "ehackb-app.firebaseapp.com",
            databaseURL: "https://ehackb-app.firebaseio.com",
            projectId: "ehackb-app",
            storageBucket: "ehackb-app.appspot.com",
            messagingSenderId: "527681347580"
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware( ReduxThunk ));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
