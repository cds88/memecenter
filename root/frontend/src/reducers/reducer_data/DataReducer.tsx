import { Data, Memes, Meme  } from './Data';
import { DataActionTypes } from './Actions';

import {FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './Actions';
const DataReducerDefaultState:Data={
    memes:{},
    isFetching: true,
 
}

const DataReducer =(
    state= DataReducerDefaultState,
    action:DataActionTypes):Data=>{
        switch(action.type){
            case FETCH_DATA_BEGIN:              
                return {...state, isFetching:true}
            case FETCH_DATA_SUCCESS:
 
                return {...state, isFetching:false,               
                    memes:  action.memes.reduce<Memes>(
                        (result:Memes, meme:Meme)=>{    
                        if(!result[meme.webservice]) result[meme.webservice]=[meme.thumb];
                        else result[meme.webservice].push(meme.thumb)
                        return result
                        
                        }, {}
                        
                                 )     }
            case FETCH_DATA_ERROR:
                return state
            default:
                return state
        }


    }


export {DataReducer}