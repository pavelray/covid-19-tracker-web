import {combineReducers} from 'redux';
import globalReducer from './globalDataReducer';
import countriesDetailsReducer from './countriesDetailsReducer';

export default combineReducers({
    global: globalReducer ,
    countryDetails : countriesDetailsReducer   
});