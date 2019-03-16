import axios from 'axios';

const KEY = 'AIzaSyCcnXjZI9PCSq02BwA22IUxrJgtnR2JItc';
const ChannelId = 'UC_MvZ9ZXt6_Mx3-b8rBryqQ';

export default axios.create({


	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
        maxResults: 7,
        key: KEY,
        channelId: ChannelId
	}
}
	);