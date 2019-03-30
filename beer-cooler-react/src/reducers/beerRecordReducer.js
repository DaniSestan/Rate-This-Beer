import {GET_BEER_RECORDS, DELETE_BEER} from "../actions/types";

const initialState = {
    beer_records: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_BEER_RECORDS:
            return {
                ...state,
                beer_records: action.payload
            };
        case DELETE_BEER:
            return {
                ...state,
                beer_records: state.beer_records.filter( 
                    beer_record => beer_record.id != action.payload)
            }
        default:
            return state;
    }
}