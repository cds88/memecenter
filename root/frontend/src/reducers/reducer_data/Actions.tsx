export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"

import {Meme} from './Data';

export interface FetchDataBegin {
    type: typeof FETCH_DATA_BEGIN

}


export interface FetchDataSuccess {
    type: typeof FETCH_DATA_SUCCESS,
    memes: Meme[]

}

export interface FetchDataError {
    type: typeof FETCH_DATA_ERROR

}


export type DataActionTypes =
    | FetchDataBegin
    | FetchDataSuccess
    | FetchDataError



export type AppActions = DataActionTypes;