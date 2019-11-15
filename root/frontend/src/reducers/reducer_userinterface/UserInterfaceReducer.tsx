
import {InterfaceActionTypes} from './Actions';
import {UserInterface} from './UserInterface';
import {TOGGLE_NAVBARS} from './Actions';


const InterfaceReducerDefaultState: UserInterface={
     isNavbarOpen:false

};


     const InterfaceReducer=(
state=InterfaceReducerDefaultState,
action:InterfaceActionTypes):UserInterface=>
{
switch(action.type){
     case TOGGLE_NAVBARS:
          return {...state, isNavbarOpen:!state.isNavbarOpen}
     
     default:
          return state
     }


}

export {InterfaceReducer}
