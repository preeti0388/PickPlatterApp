import React from 'react';

class SearchBar extends React.Component{

state = { recipename: ''};

onInputChange = event => {
 
 this.setState({recipename: event.target.value});

};

onFormSubmit = event => {
 // to prevent browser to accidentally submit the form
  event.preventDefault();

  //Callback from parent component

  this.props.OnSearchSubmit(this.state.recipename);
 
}
	render(){

		return (

              <div className="search-bar ui segment" >
              <form onSubmit={this.onFormSubmit} className = "ui form">

              <div className="field">
              <label> Search Recipes </label>
              <input 
              type = "text" 
              value={this.state.recipename}
              onChange={this.onInputChange}
               />
              </div>
              </form>
              </div>
			);
	}
}

export default SearchBar;