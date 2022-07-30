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
        username: 'ck_8dd2a2f10cc7d11664c47dd2b4af2f4de97b4123',
        password: 'cs_4252a5047577d86258300728e6935c0b11948855'
      }
  });
  return instance;
}

export default useAxios;
