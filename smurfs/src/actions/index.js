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
