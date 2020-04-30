import covid19Api from '../../apis/api.covid19api';
import covid19IndiaApi from '../../apis/api.covid19India';
import {ACTION_TYPE} from '../../resources/const'

import _ from 'lodash';


export const fetchGlobalData = () => async dispatch =>{
    const response = await covid19Api.get('/summary');
    dispatch({type:ACTION_TYPE.FETCH_GLOBAL_DATA, payload: response.data});
}

export const fetchIndiaStateSummary = () => async dispatch =>{
    const response = await covid19IndiaApi.get('/data.json');
    dispatch({
        type: ACTION_TYPE.FETCH_INDIA_STATE_SUMMARY,
        payload: response.data
    });
}

