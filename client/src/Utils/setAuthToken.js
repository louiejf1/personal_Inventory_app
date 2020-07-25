import axios from 'axios';

//set global header
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}
console.log(setAuthToken)
export default setAuthToken;