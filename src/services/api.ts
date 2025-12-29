// src/services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "https://validator.rewardsplus.io:9082/Neoteric/V1", // backend base URL
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request Interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add Idempotency-Key only for POST, PUT, DELETE
        const method = config.method?.toUpperCase();

        if (method && ["POST", "PUT", "DELETE"].includes(method)) {
          config.headers["Idempotency-Key"] = uuidv4();
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.get(url, config);
  }

  post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.api.post(url, data, config);
  }

  put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.api.put(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.delete(url, config);
  }
}

export default new ApiService();
