import axios from "axios";

export const addBeer = (beer_record, history) => async dispatch => {
    await axios.post("http://localhost:8080/api/coolerinventoryboard", beer_record);
    history.push("/");
}