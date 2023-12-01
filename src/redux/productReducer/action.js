import axios from "axios"
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType";

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST});
<<<<<<< HEAD
    axios.post("https://ry87m8.sse.codesandbox.io/products", newProduct).then((res) => {
        // console.log(res.data);
=======
    axios.post("https://63987374fe03352a94d1697f.mockapi.io/signup", newProduct).then((res) => {
        console.log(res.data);
>>>>>>> 8a97ab8ef4d39eef47dba0dd24a4ec532625af8b
        dispatch({type: POST_PRODUCT_SUCCESS});
    }).catch((err)=> {
        // console.log(err.message);
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const getProducts = (paramObj) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
<<<<<<< HEAD
    axios.get("https://ry87m8.sse.codesandbox.io/products", paramObj).then((res) => {
=======
    axios.get("https://63987374fe03352a94d1697f.mockapi.io/signup", paramObj).then((res) => {
>>>>>>> 8a97ab8ef4d39eef47dba0dd24a4ec532625af8b
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const editProduct = (id, data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
<<<<<<< HEAD
    return axios.patch(`https://ry87m8.sse.codesandbox.io/products/${id}`, data).then((res) => {
=======
    return axios.patch(`https://63987374fe03352a94d1697f.mockapi.io/signup/${id}`, data).then((res) => {
>>>>>>> 8a97ab8ef4d39eef47dba0dd24a4ec532625af8b
        dispatch({type: PATCH_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})

    let payload = []
<<<<<<< HEAD
    axios.get("https://ry87m8.sse.codesandbox.io/products").then((res)=> {
=======
    axios.get("https://63987374fe03352a94d1697f.mockapi.io/signup").then((res)=> {
>>>>>>> 8a97ab8ef4d39eef47dba0dd24a4ec532625af8b
        payload = res.data.filter((el) => el.id!=id);
        dispatch(getProducts(payload))
    })

<<<<<<< HEAD
    return axios.delete(`https://ry87m8.sse.codesandbox.io/products/${id}`).then((res) => {
=======
    return axios.delete(`https://63987374fe03352a94d1697f.mockapi.io/signup/${id}`).then((res) => {
>>>>>>> 8a97ab8ef4d39eef47dba0dd24a4ec532625af8b
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload})
    }).catch((err) => {
        dispatch({type: PRODUCT_FAILURE})
    })
}
