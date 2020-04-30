import { ACTION_TYPE } from '../../resources/const';
import { sortByProperty } from '../../resources/helper';

const INITIAL_STATE = {
    allStates: [],
    casesTimeSeriesChartData: [],
    casesTimeSeriesChartDataConfirmed: []
    
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

        default:
            return state;
    }
}