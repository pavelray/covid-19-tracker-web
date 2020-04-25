import {ACTION_TYPE} from '../../resources/const';


export default (state=[],action)=>{
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
                deathRatePercentage
            };
        default:
            return state;
    }
}