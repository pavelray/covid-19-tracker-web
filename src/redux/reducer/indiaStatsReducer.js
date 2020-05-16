import { ACTION_TYPE } from '../../resources/const';

const INITIAL_STATE = {
    allStates: [],
    casesTimeSeriesChartData: [],
    casesTimeSeriesChartDataConfirmed: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.FETCH_INDIA_STATE_SUMMARY:
            let count = 0;
            //state.allStates = action.payload.statewise;
            state.allStates = action.payload.statewise.map((state) => {
                count++;
                return{
                    key: count,
                    ...state
                }
            });

            state.casesTimeSeriesChartDataCategory = action.payload.cases_time_series.map((series)=>{
                return {
                        date: new Date(new Date(series.date).setYear('2020')),
                        confirmed: parseInt(series.totalconfirmed),
                        deaths: parseInt(series.totaldeceased),
                        recovered: parseInt(series.totalrecovered)
                    }
            });

            state.casesTimeSeriesChartDataConfirmed = action.payload.cases_time_series.map((series) => {
                return series.totalconfirmed
            });

            return {
                ...state
            };

        case ACTION_TYPE.FETCH_INDIA_STATE_DETAILS:
            const stateDetailsWithZones = action.payload.stateDetails[0].districtData.map((item,index) => ({
                    key: index,
                    ...item, 
                    ...{
                        ...action.payload.zones.filter(zone => zone.district === item.district).map(zone => ({
                            zone: zone.zone,
                            lastUpdated: zone.lastupdated,
                            zoneSource: zone.source
                        }))[0]
                    }
                })
            );
            state.stateDetails = {...action.payload.stateDetails[0]}
            state.stateDetailsWithZones = stateDetailsWithZones;
            return {...state}

        default:
            return state;
    }
}