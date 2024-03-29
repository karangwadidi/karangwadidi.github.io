import React from "react";

class SearchBar extends React.Component{
   state={term:''};

   onFormSubmit=(event)=>{
     event.preventDefault(); // this fuction is used often!!!
     this.props.onSubmit(this.state.term);
     
   }

    render(){
        return(
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div>
               <label>Afbeelding Zoeken</label>
              <input type="text" value= {this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/> 
               </div>

            </form>
        </div>
        )
    }
}
export default SearchBar;