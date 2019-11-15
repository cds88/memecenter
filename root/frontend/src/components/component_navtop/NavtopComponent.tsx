import * as React from 'react'

import {connect} from 'react-redux';
import {AppState} from '../../reducers/ConfigureStore';
export interface NavtopProps{
    
}
interface LinkStateToProps{
    isNavbarOpened:boolean
}
const mapStateToProps=(
    state:AppState,
    ownProps: NavtopProps
):LinkStateToProps=>({
    isNavbarOpened: state.InterfaceReducer.isNavbarOpen
})

type Props = NavtopProps & LinkStateToProps;
const NavtopComponent=(Props:Props)=> {
    return (
        <div className={`navtop ${Props.isNavbarOpened? "" : "topHidden"} `}>
      
                <h1>UNDER CONSTRUCTION</h1>
        </div>
    )
}
export default connect(mapStateToProps, null)(NavtopComponent)