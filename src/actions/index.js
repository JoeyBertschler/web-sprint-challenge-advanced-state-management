import axios from 'axios';

export const SMURFS_LOADING = "SMURFS_LOADING"
export const SMURFS_SUCCESS = "SMURFS_SUCCESS"
export const SMURFS_FAIL = "SMURFS_FAIL"
export const SMURFS_ADD = "SMURFS_ADD"
export const SMURFS_ERRORS = "SMURFS_ERRORS"

export const fetchSmurfs = () => (dispatch) => {
    dispatch( {type: SMURFS_LOADING})
    axios.get("http://localhost:3333/smurfs")
         .then(res=> {
             dispatch( {type: SMURFS_SUCCESS, payload: res.data}) // just res not enough, need one level deeper
             console.log(res.data)
             console.log(res)
         })
         .catch(err=> {
            //  dispatch( {type:SMURFS_FAIL, payload: 'Error: ', err})
            dispatch( {type:SMURFS_FAIL, payload: err})
         })
}


export const addSmurf = (name, nickname, position, summary) => (dispatch) => {
    const newSmurf= {
        name: name,
        nickname: nickname,
        position: position,
        summary: summary
    }
    dispatch( {type: SMURFS_ADD, payload: newSmurf})
}

export const setError = (err) => (dispatch) => {
    dispatch( {type: SMURFS_ERRORS, payload: err })
}

// //Task List:
// //1. Add a thunk action called fetchSmurfs
//  that triggers a loading status display in our application,
//   performs an axios call to retreive smurfs from our server,
//    saves the result of that call to our state and shows an error if one is made.
// //2. Add a standard action that allows us to
//  add new smurf (including the name, nickname, position, summary)
// //3. Add a standard action that allows us to 
// set the value of the error message slice of state.