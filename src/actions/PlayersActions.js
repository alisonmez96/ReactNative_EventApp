import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import { PLAYER_UPDATE, PLAYER_CREATE, PLAYERS_FETCH_SUCCESS } from './types';

export const playerUpdate = ({ prop, value }) => {
    return {
        type: PLAYER_UPDATE,
        payload: { prop, value }
    };
};

export const playerCreate = ({ name, nickname, email, game }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/games`)
            .push({name, nickname, email, game})
            .then(() => {
                dispatch({ type: PLAYER_CREATE });
                Actions.blog()
            });
    };
};

export const playerFetch = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/games`)
            .on('value', snapshot => {
                dispatch({ type: PLAYERS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const playerDelete = ( ) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/games/`)
            .remove()
            .then(() => {
                Actions.blog()
            });
    };
};
