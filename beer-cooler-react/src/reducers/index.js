import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import beerRecordReducer from "./beerRecordReducer";

export default combineReducers({
    errors: errorsReducer,
    beer_record: beerRecordReducer
});