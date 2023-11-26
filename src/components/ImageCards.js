//the purpose of this is to show one image at time the we can use css(with react) to adjust to the size of the image wish me luck!!!
// we will be using a class based component$$$
import React from "react";

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state={spans:0};

        this.imageRef=React.createRef();
        //Dom component specific
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpansFortheGrid);
        // everytime an image is displayed on the screen(and was succesfully downloaded),this load event is emited(js/html normal event) and there is also a callback()as we can see
    }
    setSpansFortheGrid=()=>{
      //console.log(this.imageRef.current);// here we kunnen in plaats van current (results.height) proberen
     const height=this.imageRef.current.clientHeight;
     const spans=Math.ceil(height/10);
     this.setState({spans});
    }

render(){
    const {description,urls}=this.props.image;
    return(
        <div style={{gridRowEnd:`span ${this.state.spans}`}}>
           <img 
           ref={this.imageRef}
           alt={description}
           src={urls.regular}
           /> 
        </div>
    )
}

}
export default ImageCard;