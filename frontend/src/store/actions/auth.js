import axios from 'axios';
import { BASE_URL } from '../../util';

export const USER_DETAILS = 'USER_DETAILS';

export const signup = (data) => {
  return async (dispatch, getState) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const userType = data.userType;
    const img = data.img;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('userType', userType);
    formData.append('photo', img);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const res = axios.post(`${BASE_URL}/auth/signup`, formData, config);
    console.log('signup :: res :: ', res);
    
  }
}
export const signin = (data) => {
  return async (dispatch, getState) => {
    const email = data.email;
    const password = data.password;
    const userType = data.userType;

    const res = await axios.post(`${BASE_URL}/auth/signin`, 
    {email, password, userType});
    console.log('signin :: res :: ', res);

  }
}
export const getUserDetails = (data) => {
  return async (dispatch, getState) => {
    const _id = data._id;
    const userType = data.userType;

    const res = await axios.post(`${BASE_URL}/auth/get-user-details`, 
    {_id, userType});
    console.log('getUserDetails :: res :: ', res);
  }
}