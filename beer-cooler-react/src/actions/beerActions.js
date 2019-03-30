import axios from "axios";
import { GET_ERRORS, GET_BEER_RECORDS, DELETE_BEER, GET_BEER_RECORD } from "./types"


export const addBeer = (beer_record, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/beer", beer_record);
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
    const res = await axios.get("http://localhost:8080/api/beer/all")
    dispatch({
        type:GET_BEER_RECORDS,
        payload:res.data
    });
};

export const deleteBeer = beer_id => async dispatch => {
    if (
      window.confirm(
        `You are deleting the beer record (ID: ${beer_id}), this action cannot be undone.`
      )
    ) {
      await axios.delete(`http://localhost:8080/api/beer/${beer_id}`);
      dispatch({
        type: DELETE_BEER,
        payload: beer_id
      });
    }
  };
  export const getBeer = (beer_id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/beer/${beer_id}`);
      dispatch({
        type: GET_BEER_RECORD,
        payload: res.data
      });
    } catch (error) {
      history.push("/");
    }
  };

