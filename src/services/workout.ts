import { HTTP } from '../helpers/http';
import axios from 'axios';

export default class Workout {

  static circuitSets(token) {
    HTTP
    .get('/circuit-sets?populate=%2A', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        console.log('Data: ', response.data);
    })
    .catch(this.handleError);
  }

  static handleError(error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return { message: error.message };
    } else {
      console.log('unexpected error: ', error);
      return { message: 'An unexpected error occurred' };
    }
  }
}