import axios from "axios";
import { GET_ERRORS } from "./types"


export const addBeer = (beer_record, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/coolerinventoryboard", beer_record);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};