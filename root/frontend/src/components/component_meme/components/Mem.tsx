import * as  React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; 
import {Meme} from '../../../reducers/reducer_data/Data';

import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';
import {AllAppActions} from '../../../reducers/actions/AllActionsTypes';
import {ToggleNavbars} from '../../../reducers/actions/AllActions';
import { bindActionCreators} from 'redux';
import {ScreenParameters} from '../../../Master';
 
export interface MemProps{
   webservice:string;
   memes: string[];
   isNavbarOpened: boolean;
   ScreenParameters: ScreenParameters
}

interface LinkDispatchToProps{
   toggleNavbars : ()=>void
}
const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    onwProps: MemProps
):LinkDispatchToProps=>({
    toggleNavbars: bindActionCreators(ToggleNavbars, dispatch)
})
type Props= MemProps & LinkDispatchToProps;
const  Mem=(Props: Props) =>{
    var imagesGallery = Props.memes.map(
        (image, index) => {
            return (
                <div className="galleryImageWrapper" key={index}>
                    <img src={image} alt="" />
                </div>
            )
        }
    )
    let imageGallery: any = null;
    const handlePrev=()=>{
        imageGallery.slickPrev();
    }
    const handleNext = () => {
        imageGallery.slickNext();
     }
     const handleNavbars =()=>{
         Props.toggleNavbars()
     }
   
    return (
           
                <div  >
                    <div className="titleWrapper">
<h1 className="memeTitle">{Props.webservice}</h1>
            </div>
             
             <div className="sliderWrapper">
                 <div className="slider">
                 <Slider
                    centerMode={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                    arrows={false}
                    ref={slider=>imageGallery=slider}
                  >

                    {imagesGallery}
                </Slider>    
                </div>
            </div>
              
        
            <div className="paginationButtonContainer">
                <button
                className="paginationButton" 
                onClick={handlePrev}>Prev</button>
                 <button 
                    className="paginationButton" 
                 onClick={handleNext}>Next</button>
            </div>
          
            <button className="memorizer" onClick={handleNavbars}>
                {Props.isNavbarOpened? "Close" : "Open"}
            </button>
           


            </div>
       
    )
}

export default connect(null, mapDispatchToProps)(Mem);