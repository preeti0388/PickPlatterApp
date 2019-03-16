import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

	state = {videos: [], selectedvideo: null};

	componentDidMount(){
		this.OnRecipeSubmit('veg mayonnaise');

	}

 OnRecipeSubmit = async recipe => {
    
    const response = await youtube.get('/search', {

    	params: {
    		q: recipe
    	}
    });

    this.setState({videos: response.data.items});
 };

 onVideoSelect = (video) => {

   this.setState({selectedvideo: video});
 	
 };


	render() {

		return (
		<div className="ui container"> 
		<div className="ui row"> 
		<SearchBar OnSearchSubmit= {this.OnRecipeSubmit}/> 
		<div className = "ui grid">
		<div className="eleven wide column">
		<VideoDetail video ={this.state.selectedvideo}/>
		</div>
		<div className = "five wide column">
		<VideoList onMySelection = {this.onVideoSelect} videos={this.state.videos} />
		</div>
		</div>
		</div>
		</div>
	);
	}
}

export default App;