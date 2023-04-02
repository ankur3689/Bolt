import React from 'react';
import axios from 'axios';
import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

function useAxios() {
  const instance = axios.create({
    baseURL: 'https://del-web.hiecor.biz/wp-json/wc/v2/',
    timeout: 60000,
    auth: {
        username: 'ck_d518b2d8ba31a0901f5425c619703bdd5985b79e',
        password: 'cs_a7212cdf6ccfdf2a70d38aabf23fec7ec222cd1c'
      }
  });
  // instance.interceptors.request.use(request => {
  //   console.log('Starting Request', JSON.stringify(request, null, 2))
  //   return request
  // })
  
  // instance.interceptors.response.use(response => {
  //   console.log('Response:', JSON.stringify(response, null, 2))
  //   return response
  // })
  return instance;
}

export default useAxios;
