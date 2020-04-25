import {ACTION_TYPE} from '../../resources/const';

const INITIAL_STATE = {
    countries: [],
    summary: {},
    details: []
}

export default (state=INITIAL_STATE ,action)=>{
    switch (action.type){
        case ACTION_TYPE.FETCH_ALL_COUNTRIES_NAME:
            const data = action.payload;
            const countries =  data.countries.map((country)=>{
                return {
                    text: country.name,
                    key: country.iso2,
                    value: country.iso3,
                    flag: country.iso2 ? country.iso2.toLowerCase() : ''
                }
            });

            state.countries=[...countries]
            
            return {...state};

        case ACTION_TYPE.FETCH_COUNTRY_SUMMARY:
            const confirmed = action.payload.confirmed.value;
            const recovered = action.payload.recovered.value;
            const deaths = action.payload.deaths.value;
            const lastUpdated = `${new Date(action.payload.lastUpdate).toLocaleDateString()} ${new Date(action.payload.lastUpdate).toLocaleTimeString()}`;
            const recoverRatePercentage = `${Math.round((recovered / confirmed) * 100)} % Recoverey Rate`;
            const deathRatePercentage = `${Math.round((deaths / confirmed) * 100)} % Fatality Rate`;

            state.summary ={
                    confirmed,
                    recovered,
                    deaths,
                    lastUpdated,
                    recoverRatePercentage,
                    deathRatePercentage
                }
            return {...state};

        case ACTION_TYPE.FETCH_COUNTRY_DETAILS:
            const details =  action.payload.map((country)=>{
                return {
                    combinedKey: country.combinedKey,
                    confirmed: country.confirmed,
                    active: country.active,
                    deaths: country.deaths,
                    incidentRate: country.incidentRate ? country.incidentRate.toFixed(2) : 0,
                    lastUpdate: new Date(country.lastUpdate).toLocaleDateString()
                }
            });

            state.details = details;

            return {...state};
        default:
            return {...state};
    }
}