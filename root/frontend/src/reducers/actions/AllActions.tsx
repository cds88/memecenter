
import {
    CREATE_USER_BEGIN, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
    LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
    LOGOUT_USER_BEGIN, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR
} from '../reducer_authorization/Actions';

import {TOGGLE_NAVBARS} from '../reducer_userinterface/Actions';
import {FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from '../reducer_data/Actions';

import { AllAppActions } from './AllActionsTypes';
 

import axios from 'axios';
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from '../ConfigureStore';

import {Meme} from '../reducer_data/Data';

export const ToggleNavbars=():AllAppActions=>({
    type: TOGGLE_NAVBARS
})
export const CreateUserBegin = (): AllAppActions => ({
    type: CREATE_USER_BEGIN
})

export const CreateUserSuccess = (username: string, token: string): AllAppActions => ({
    type: CREATE_USER_SUCCESS,
    username,
    token


})
export const CreateUserError = (): AllAppActions => ({
    type: CREATE_USER_ERROR
})

export const LoginUserBegin = (): AllAppActions => ({
    type: LOGIN_USER_BEGIN
})
export const LoginUserSuccess = (username: string, token: string): AllAppActions => ({
    type: LOGIN_USER_SUCCESS,
    username,
    token
})
export const LoginUserError = (): AllAppActions => ({
    type: LOGIN_USER_ERROR
})

export const LogoutUserBegin = (): AllAppActions => ({
    type: LOGOUT_USER_BEGIN
})
export const LogoutUserSuccess = (): AllAppActions => ({
    type: LOGOUT_USER_SUCCESS
})
export const LogoutUserError = (): AllAppActions => ({
    type: LOGOUT_USER_ERROR
})


export const FetchDataBegin=():AllAppActions=>({
    type: FETCH_DATA_BEGIN
})
export const FetchDataSuccess = (memes:Meme[]): AllAppActions => ({
    type: FETCH_DATA_SUCCESS,
    memes
})
export const FetchDataError = (): AllAppActions => ({
    type: FETCH_DATA_ERROR
})

export const FetchData=()=>{
    return(dispatch: Dispatch<AllAppActions>, getState:()=>AppState)=>{
        dispatch(FetchDataBegin());
        axios('/data/all').then(
            e=> {return e.data})
            .then(e=>
                    {dispatch(FetchDataSuccess(e)) })
    }
}

const getCSRFToken = () => {
    var token = document.cookie.split(';')[0];
    token = token.split('=')[1];
    return token
}
export const LoginUser = (username: string, password: string) => {


    return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {

        dispatch(LoginUserBegin());
        fetch('/accounts/login/', {
            method: 'post',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()

            },
            body: JSON.stringify({
                'username': username,
                'password': password,

            })



        })
            .then(response => {
                if (response.status >= 500) {
                    console.log("server error");
                    throw response
                }
                if (response.status >= 400 && response.status < 500) {
                    console.log("auth error");
                    throw response
                }
                else { return response }
            }).then(response => {
                if (response.status >= 200 && response.status <= 300) { return response.json() }
            })
            .then(e => { dispatch(LoginUserSuccess(username, e.token)) })




    }
}

export const LogoutUser = () => {
    return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {
        const token = getState().AuthorizationReducer.token
        dispatch(LogoutUserBegin());
        fetch('/accounts/logout/', {
            method: 'get',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            }

        })
            .then(e => dispatch(LogoutUserSuccess()))
            .catch(e => dispatch(LogoutUserError()))

    }
}


export const CreateUser = (username: string, password1: string, password2: string) => {
    return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {
        dispatch(CreateUserBegin())
        fetch('/accounts/register/', {
            method: 'post',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()

            },
            body: JSON.stringify({
                'username': username,
                'password': password1,
                'password2': password2
            })



        })
            .then(e => e.json())
            .then(e => dispatch(CreateUserSuccess(username, e.token)))
            .catch(error => dispatch(CreateUserError()))

    }
}