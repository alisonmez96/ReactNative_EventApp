import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlayerFormReducer from  './PlayerFormReducer';
import PlayerListReducer from './PlayerListReducer';

export default combineReducers({
    auth: AuthReducer,
    playerForm: PlayerFormReducer,
    playerList: PlayerListReducer
});
