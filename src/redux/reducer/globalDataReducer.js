import {ACTION_TYPE} from '../../resources/const';
import {sortByProperty} from '../../resources/helper';

const INITIAL_STATE = {
    countries : [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ACTION_TYPE.FETCH_GLOBAL_DATA:

            const confirmed = action.payload.confirmed.value;
            const recovered = action.payload.recovered.value;
            const deaths = action.payload.deaths.value;
            const lastUpdated = `${new Date(action.payload.lastUpdate).toLocaleDateString()} ${new Date(action.payload.lastUpdate).toLocaleTimeString()}`;
            const recoverRatePercentage = `${Math.round((recovered / confirmed) * 100)} % Recoverey Rate`;
            const deathRatePercentage = `${Math.round((deaths / confirmed) * 100)} % Fatality Rate`;

            return {
                confirmed,
                recovered,
                deaths,
                lastUpdated,
                recoverRatePercentage,
                deathRatePercentage,
                ...state
            };

        // eslint-disable-next-line no-duplicate-case
        case ACTION_TYPE.FETCH_ALL_COUNTRY_SUMMARY:

            const countries = action.payload.Countries.map((country) => {
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
            
            state.countries = countries.sort(sortByProperty('confirmed'));
            
        return {...state};

        default:
            return state;
    }
}