import {combineReducers} from 'redux';
import globalReducer from './globalDataReducer';
import indiaStatsReducer from './indiaStatsReducer';

export default combineReducers({
    global: globalReducer ,
    indiaData: indiaStatsReducer,
});