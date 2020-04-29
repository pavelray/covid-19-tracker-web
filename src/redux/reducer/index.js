import {combineReducers} from 'redux';
import globalReducer from './globalDataReducer';
import countriesDetailsReducer from './countriesDetailsReducer';
import indiaStatsReducer from './indiaStatsReducer';

export default combineReducers({
    global: globalReducer ,
    countryDetails : countriesDetailsReducer,
    indiaData: indiaStatsReducer,
});