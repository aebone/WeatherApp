import axios from 'axios';
import React from 'react';

class IndexService extends React.Component {

    constructor(props) {
        super(props);

        const API_KEY = '7e7b9573de93e70e9b7311e9180bcadc';
        const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
        const url = ROOT_URL + '&q=' + props + ',us';

        return axios.get(url);
    }
}

export default IndexService;