import { ACTION_TYPE } from '../../resources/const';
import { sortByProperty } from '../../resources/helper';

const INITIAL_STATE = {
    allStates: [],
    
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
            })

            return {
                ...state
            };

        default:
            return state;
    }
}