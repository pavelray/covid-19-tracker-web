import {ACTION_TYPE} from '../../resources/const';
import {sortByProperty,percentageCalculator} from '../../resources/helper';

const INITIAL_STATE = {
    global: {},
    countries: [],
    recoverRatePercentage: '',
    deathRatePercentage: '',
    lastUpdated: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.FETCH_GLOBAL_DATA:
            const data = action.payload.Global;
            const global = {
                newConfirmed: data.NewConfirmed,
                totalConfirmed: data.TotalConfirmed,
                newDeaths: data.NewDeaths,
                totalDeaths: data.TotalDeaths,
                newRecovered: data.NewRecovered,
                totalRecovered: data.TotalRecovered
            }

            state.recoverRatePercentage = `${percentageCalculator(global.totalRecovered,global.totalConfirmed)} % Recoverey Rate`;
            state.deathRatePercentage = `${percentageCalculator(global.totalDeaths,global.totalConfirmed)} % Fatality Rate`;
            state.lastUpdated = `${new Date(action.payload.Date).toLocaleDateString()} ${new Date(action.payload.Date).toLocaleTimeString()}`;
            state.global = global

            const countries = action.payload.Countries.map((country) => {
                return{
                        name: country.Country,
                        code: country.CountryCode,
                        slug: country.Slug,
                        confirmed:  country.TotalConfirmed,
                        recovered: country.TotalRecovered,
                        deaths: country.TotalDeaths,
                        percentageNumber: ((country.TotalConfirmed / action.payload.Global.TotalConfirmed) * 100).toFixed(2),
                        percentage: `${((country.TotalConfirmed / action.payload.Global.TotalConfirmed) * 100).toFixed(2)} %`
                    }
            });
            
            state.countries = countries.sort(sortByProperty('confirmed'));

            return {
                ...state
            };

       
        case ACTION_TYPE.FETCH_ALL_COUNTRY_SUMMARY:

            const countriesList = action.payload.Countries.map((country) => {
                return{
                        name: country.Country,
                        code: country.CountryCode,
                        slug: country.Slug,
                        confirmed:  country.TotalConfirmed,
                        recovered: country.TotalRecovered,
                        deaths: country.TotalDeaths,
                        percentage: `${((country.TotalConfirmed / action.payload.Global.TotalConfirmed) * 100).toFixed(2)} %`
                    }
            });
            
            state.countries = countriesList.sort(sortByProperty('confirmed'));
            
        return {...state};

        default:
            return state;
    }
}