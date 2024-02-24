import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS, 
    ORDER_DETAILS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_RESET,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,
    CLEAR_ERRORS,
} from "../constants/orderConstants";

import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.post("http://localhost:4000/api/v1/order/new", order, config);
       dispatch({ type: CREATE_ORDER_SUCCESS, payload: data }); 
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.get("http://localhost:4000/api/v1/orders/me", config);
       dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders }); 
    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ORDERS_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.get("http://localhost:4000/api/v1/admin/orders", config);
       dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders }); 
    } catch (error) {
        dispatch({
            type: ALL_ORDERS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const updateOrder = (id, order) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ORDER_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.put(`http://localhost:4000/api/v1/admin/order/${id}`, order, config);
       dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success }); 
    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ORDER_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.delete(`http://localhost:4000/api/v1/admin/order/${id}`,config);
       dispatch({ type: DELETE_ORDER_SUCCESS, payload: data }); 
    } catch (error) {
        dispatch({
            type: DELETE_ORDER_FAIL,
            payload: error.response.data.message,
        })
    }
}


// get order details
export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };
       const { data } = await axios.get(`http://localhost:4000/api/v1/order/${id}`, config);
       dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order }); 
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}