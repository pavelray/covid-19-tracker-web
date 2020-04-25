import country from "../../apis/country.api";
import covid19Global from '../../apis/covid19.api';
import {ACTION_TYPE} from '../../resources/const'

import _ from 'lodash';


// export const fetchGlobalData = () => async (dispatch, getState) => {
//     await dispatch(fetchPost());

//     const userIds = _.uniq(_.map(getState().posts,'userId'));
//     userIds.forEach(id=> dispatch(fetchUser(id)));
// }

export const fetchGlobalData = () => async dispatch =>{
    const response = await covid19Global.get('/');
    dispatch({type:ACTION_TYPE.FETCH_GLOBAL_DATA, payload: response.data});
}

export const fetchCountrySummary = (selectedCountry) => async dispatch =>{
    const response = await covid19Global.get(`/countries/${selectedCountry}`);
    dispatch({type:ACTION_TYPE.FETCH_COUNTRY_SUMMARY, payload: response.data});
}

export const fetchCountryDetails = (selectedCountry) => async dispatch =>{
    const response = await covid19Global.get(`/countries/${selectedCountry}/confirmed`);
    dispatch({type:ACTION_TYPE.FETCH_COUNTRY_DETAILS, payload: response.data});
}

export const fetchAllCountries = () => async dispatch =>{
    const response = await covid19Global.get('/countries');
    dispatch({type:ACTION_TYPE.FETCH_ALL_COUNTRIES_NAME, payload: response.data});
}

