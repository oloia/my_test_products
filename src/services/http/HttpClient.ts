import axios, { AxiosInstance } from 'axios';
import { HttpClientConfig, HttpClientInterface, HttpRequest } from './types';
import {createApiBaseUrl} from "../../config/api";

class HttpClient implements HttpClientInterface {
    protected axios: AxiosInstance;
    private apiBaseUrl = '';

    constructor(config: HttpClientConfig = {}) {
        const { baseUrl = '', adapter } = config;

        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (adapter) {
            this.axios.defaults.adapter = adapter;
        }
    }

    createEndpoint(url: string): string {
        const baseURL = this.axios.defaults.baseURL;
        if (baseURL) {
            return url;
        }
        if (!this.apiBaseUrl) {
            this.apiBaseUrl = createApiBaseUrl();
        }

        return `${this.apiBaseUrl}${url}`;
    }

    get<TResponse>(url: string, queryParams: any = {}, config: HttpRequest): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.get(endpoint, {
            ...config,
            params: queryParams,
        });
    }

    post<TResponse>(url: string, bodyParams?: any, config: HttpRequest = {}): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.post(endpoint, bodyParams, config);
    }

    upload<TResponse>(url: string, bodyParams?: any, config: HttpRequest = {}): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.post(endpoint, bodyParams, {
            ...config,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }

    patch<TResponse>(url: string, bodyParams?: any, config: HttpRequest = {}): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.patch(endpoint, bodyParams, config);
    }

    async put<TResponse>(url: string, bodyParams?: any, config?: HttpRequest): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.put(endpoint, bodyParams, config);
    }

    async delete<TResponse>(url: string, config?: HttpRequest): Promise<TResponse> {
        const endpoint = this.createEndpoint(url);
        return this.axios.delete(endpoint, config);
    }

    getInstance(): AxiosInstance {
        return this.axios;
    }
}

export default HttpClient;
