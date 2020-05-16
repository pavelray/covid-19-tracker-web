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

export const fetchIndiaStateDetails = (stateCode) => async dispatch => {
    const response = await covid19IndiaApi.get('/v2/state_district_wise.json');
    const stateDetails = response.data.filter(state => state.statecode === stateCode);
    
    const zoneResponse = await covid19IndiaApi.get('/zones.json');
    const zones = zoneResponse.data.zones.filter(zone => zone.statecode === stateCode);
    
    dispatch({
        type: ACTION_TYPE.FETCH_INDIA_STATE_DETAILS,
        payload: {stateDetails,zones}
    });

    //fetchStateZoneDetails(stateCode);
}

export const fetchStateZoneDetails = (stateCode) => async dispatch =>{
    const response = await covid19IndiaApi.get('/zones.json');
    const zones = response.data.zones.filter(zone => zone.statecode === stateCode);
    dispatch({
        type: ACTION_TYPE.FETCH_STATE_ZONE_DETAILS,
        payload: zones
    });
}