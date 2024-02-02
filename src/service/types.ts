import { AxiosRequestConfig } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
    [key: string]: unknown;
  }

interface ApiServiceOptions {
    method: 'get' | 'post' | 'patch' | 'put' | 'delete';
    url: string;
    data?: { [key: string]: unknown } | unknown;
    config?: RequestConfig;
    params?: {
      [k: string]: string;
    };
  }

  export type {ApiServiceOptions, RequestConfig}