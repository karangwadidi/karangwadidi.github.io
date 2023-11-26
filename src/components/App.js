import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";



class App extends React.Component{

    state={images:[]};

    onSearchSubmit=async(term)=>{
      const response= await  unsplash.get('/search/photos',{
        params: {query:term},   
                
         })
         // this is a possibility instead of using async on the function(we chose here the async approche)
         //.then(response=>{
        //   console.log(response.data.results);
        // })
        //console.log(response.data.results); rather than printing the results,we want to update(set the state) the state with setState methode
        this.setState({images:response.data.results});
    }

    render(){
    return (
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
    </div>
    )
  }
}

export default App;