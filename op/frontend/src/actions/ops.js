import { FETCH_OPS, CREATE_OP, DELETE_OP, } from './types'
import axiosInstance from "./axiosApi";

export const fetchOps = id => dispatch => (
    axiosInstance.get('/ops/', {
        authors: id
    })
    .then(response => {
        return dispatch({
        type: FETCH_OPS,
        payload: response.data
        })
    })
    )

export const createOp = data => dispatch => (
    axiosInstance.post('/ops/', {
        authors: data.id,
        medium: data.medium,
        title: data.title,
        description: data.description,
        is_public: 'False'
    })
    .then(response => {
        return dispatch({
        type: CREATE_OP,
        payload: response.data
        })
    })
    )

    export const deleteOp = data => dispatch => (
        axiosInstance.delete('/ops/', {
            id: data
            
        })
        .then(response => {
            return dispatch({
            type: DELETE_OP,
            payload: response.data
            })
        })
        )

    export const updateOp = data => dispatch => (
        axiosInstance.patch('/ops/', {
        authors: data.id,
        medium: data.medium,
        title: data.title,
        description: data.description,
        is_public: 'False'
            
        })
        .then(response => {
            return dispatch({
            type: PATCH_OP,
            payload: response.data
            })
        })
        )