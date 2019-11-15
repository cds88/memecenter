
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/MemStyles.scss';

import styled from "styled-components";
import NavleftComponent from './components/component_navleft/NavleftComponent';
import NavtopComponent from './components/component_navtop/NavtopComponent';

import MemesComponent from './components/component_meme/MemesComponent';

import './styles/NavigationStyles.scss';

import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
import { AllAppActions } from './reducers/actions/AllActionsTypes';

import {FetchData} from './reducers/actions/AllActions';
import { AppState } from './reducers/ConfigureStore';
export interface ScreenParameters {
        height: number;
        width: number;
        ratio: number;
}
export interface MasterProps {

}
interface LinkStateToProps{
        isNavbarOpen: boolean;
}
const mapStateToProps=(
        state: AppState,
        ownProps: MasterProps
):LinkStateToProps=>({
                isNavbarOpen: state.InterfaceReducer.isNavbarOpen
})
interface LinkDispatchToProps{
        fetchData:()=>void;
}
const mapDispatchToProps=(
        dispatch: ThunkDispatch<any, any, AllAppActions>,
        ownProps: MasterProps
): LinkDispatchToProps=>({
        fetchData:bindActionCreators(FetchData, dispatch)
})

type Props = MasterProps & LinkDispatchToProps & LinkStateToProps;
const Master =(Props:Props)=>{

 React.useEffect(()=>{
         Props.fetchData();
 },[])
 
        function useWindowSize() {
                const [size, setSize] = React.useState<ScreenParameters>({
                        height: window.outerHeight,
                        width: window.outerWidth,
                        ratio: window.innerWidth / window.innerHeight
                });
                React.useLayoutEffect(() => {
                        function updateSize() {
                                setSize({
                                        height: window.outerHeight,
                                        width: window.outerWidth,
                                        ratio: window.innerWidth / window.innerHeight
                                })
                        }
                        window.addEventListener('resize', updateSize);

                }, []);
                return size
        }

        const screenSize: ScreenParameters = useWindowSize();
        console.log(screenSize)
        const mainWrapper = {
                height:"100vh",
                width:"100%",
                background: "rgb(184, 178, 178)",


        }
        return (
                <>
                <NavtopComponent/>
                        <NavleftComponent />
            
   
                        
                        <div className={`masterWrapper  ${Props.isNavbarOpen ? "marginalizer" : ""}`}>
                       
                 <MemesComponent ScreenParameters={screenSize}/>
                  
                        </div>
                 
     
                        </>
        );
     
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);


 


 