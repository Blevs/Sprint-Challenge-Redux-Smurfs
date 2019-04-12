import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const apiUrl = "http://localhost:3333";


export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  return axios
    .get(apiUrl + "/smurfs")
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, smurfs: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_FAILURE, error: error }));
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  return axios
    .post(apiUrl + "/smurfs", smurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, smurfs: res.data }))
    .catch(error => dispatch({ type: ADD_SMURF_FAILURE, error: error }));
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  return axios
    .delete(apiUrl + "/smurfs/" + id)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, smurfs: res.data }))
    .catch(error => dispatch({ type: DELETE_SMURF_FAILURE, error: error }));
};

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const editSmurf = (smurf) => dispatch => {
  dispatch({ type: EDIT_SMURF_START });
  return axios
    .put(apiUrl + "/smurfs/" + smurf.id, smurf)
    .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, smurfs: res.data }))
    .catch(error => dispatch({ type: EDIT_SMURF_FAILURE, error: error }));
};
