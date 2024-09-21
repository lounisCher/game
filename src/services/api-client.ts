import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:'2688813ce6934e0eb492a38d107ebeb5'
    }
})

