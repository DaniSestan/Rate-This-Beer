import {GET_BEER_RECORDS} from "../actions/types";

const initialState = {
    beer_records: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_BEER_RECORDS:
            return {
                ...state,
                beer_records: action.payload
            }
        default:
            return state;
    }
}