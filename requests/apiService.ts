import {URLS} from './config';
import axios from 'axios';
import {extractSignUpFormType} from '../src/store/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headerData = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + token,
  };
};

const instance = axios.create({
  timeout: 30000,
  headers: headerData(),
});

const responseBody = response => response;

export const errorBody = (err: {
  response: {data: {message: string}; status: number};
  request: string;
  message: string;
}) => {
  if (err.response) {
    // Request made and server responded
    console.log('err.response', err);
    return {
      message: err.response.data.message,
      status: err.response.status,
    };
  } else if (err.request) {
    // The request was made but no response was received
    console.log('err.request', err.request);
    return 'Network Failiure, Please Check your network connection!';
  } else {
    // Something happened in setting up the request that triggered an err
    console.log('err', err.message);
    return err.message;
  }
};

const requests = {
  get: (url: string, headers = {...headerData()}) =>
    instance.get(url, {headers}).then(responseBody).catch(errorBody),
  post: (
    url: string,
    body: {[key: string]: string | number},
    headers = {...headerData},
  ) => instance.post(url, body, {headers}).then(responseBody).catch(errorBody),

  put: (
    url: string,
    body: {[key: string]: string | number},
    headers = {...headerData()},
  ) => instance.put(url, body, {headers}).then(responseBody).catch(errorBody),
};

export const Auth = {
  signIn: (data: {[key: string]: string | number}) =>
    requests.post(`${URLS.SIGN_IN}`, data),

  signUp: (data: {[key: string]: string | number}) =>
    requests.post(`${URLS.SIGN_UP}`, data),
  sendBoothData: (data: {[key: string]: string | number}) =>
    requests.post(`${URLS.SEND_BOOTH_DATA}`, data),
};
