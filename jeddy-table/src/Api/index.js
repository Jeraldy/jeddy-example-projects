import { actions } from '../reducers/RData';
import axios from 'axios';
import { dispatch } from 'jeddy/jredux';

const { fetchDataSuccess } = actions;

export const GetData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        console.log(error)
    }
};
