import axios from "axios"
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType";

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST});
    axios.post("https://63987374fe03352a94d1697f.mockapi.io/signup", newProduct).then((res) => {
        console.log(res.data);
        dispatch({type: POST_PRODUCT_SUCCESS});
    }).catch((err)=> {
        console.log(err.message);
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const getProducts = (paramObj) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://63987374fe03352a94d1697f.mockapi.io/signup", paramObj).then((res) => {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const editProduct = (id, data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    return axios.patch(`https://63987374fe03352a94d1697f.mockapi.io/signup/${id}`, data).then((res) => {
        dispatch({type: PATCH_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})

    let payload = []
    axios.get("https://63987374fe03352a94d1697f.mockapi.io/signup").then((res)=> {
        payload = res.data.filter((el) => el.id!=id);
        dispatch(getProducts(payload))
    })

    return axios.delete(`https://63987374fe03352a94d1697f.mockapi.io/signup/${id}`).then((res) => {
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}
