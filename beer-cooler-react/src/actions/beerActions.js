import axios from "axios";
import { GET_ERRORS, GET_BEER_RECORDS } from "./types"


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

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/coolerinventoryboard/beer")
    dispatch({
        type:GET_BEER_RECORDS,
        payload:res.data
    })
}