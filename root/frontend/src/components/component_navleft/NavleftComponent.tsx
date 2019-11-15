import * as React from 'react'

import {connect} from 'react-redux';
import {AppState} from '../../reducers/ConfigureStore';
export interface NavleftProps{

}
interface LinkStateToProps{
    isNavbarOpened: boolean
}

const mapStateToProps=(
    state: AppState,
    ownProps: NavleftProps
)=>({
    isNavbarOpened: state.InterfaceReducer.isNavbarOpen
})

type Props= NavleftProps & LinkStateToProps;
const NavleftComponent=(Props:Props)=> {
    return (
        <div className={`navleft ${Props.isNavbarOpened? ("") : ("leftHidden")}`}>
 




    
        </div>
    )
}


export default connect(mapStateToProps, null)( NavleftComponent);