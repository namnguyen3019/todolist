import axios from 'axios';

const KEY = 'AIzaSyCfuCVACQaFBnyzV5e7kBWf7f-xSpe-ncs';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});