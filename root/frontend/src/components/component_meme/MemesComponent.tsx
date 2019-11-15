import * as React from 'react'

import Mem from './components/Mem';
import {connect} from 'react-redux';
import {AppState} from '../../reducers/ConfigureStore';
import {Memes}  from '../../reducers/reducer_data/Data';
import { CSSProperties } from 'styled-components';
import NavleftComponent from '../component_navleft/NavleftComponent';
import {ScreenParameters} from '../../Master';
export interface MemesProps{

    ScreenParameters: ScreenParameters
}

interface LinkStateToProps{
    memes:Memes;
    isFetching: boolean;
    isNavbarOpened: boolean;
} 

const mapStateToProps=(
    state: AppState,
    ownProps: MemesProps
):LinkStateToProps=>({
    memes: state.DataReducer.memes,
    isFetching: state.DataReducer.isFetching,
    isNavbarOpened: state.InterfaceReducer.isNavbarOpen
})

type Props = MemesProps & LinkStateToProps;
const MemesComponent=(Props: Props)=> {
    
    if(Props.isFetching){
        return (<div className="fetchWrapper"> <h1>FETCHING DATA</h1></div>)
    }
 
console.log(Object.keys(Props.memes));

const results = Object.keys(Props.memes).map(
    (el)=>{
        console.log(Props.memes[el])
        return <Mem ScreenParameters={Props.ScreenParameters} webservice={el}  memes={Props.memes[el]} isNavbarOpened={Props.isNavbarOpened}/>  
    }
    )
 const memesWrapper ={
     height: "100%",
     width: "100%",
     display: "grid",
     justifyContent: "center",
     alignItems: "center",
     gridTemplateColumns: "repeat(1, 1fr)" 
 } as CSSProperties
    return (
        <div className={`memesWrapper`}>
          
            {/* <Mem webservice={Object.keys(Prop s.memes)[0]} 
                memes={Props.memes[Object.keys(Props.memes)[0]]} 
            isNavbarOpened={Props.isNavbarOpened} />  */}
            {results}
        </div>
    )
}


export default connect (mapStateToProps, null)(MemesComponent);