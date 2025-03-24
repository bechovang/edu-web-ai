// src/lib/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
console.log('API Base URL:', API_BASE_URL); // Thêm dòng này để debug

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 giây
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let errorMessage = 'Lỗi mạng hoặc server không phản hồi';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout - Server không phản hồi kịp thời';
    } else if (error.response) {
      // Server trả về lỗi (4xx, 5xx)
      errorMessage = error.response.data?.message || 
                    `Lỗi server: ${error.response.status}`;
    } else if (error.request) {
      // Request được gửi nhưng không nhận được response
      errorMessage = 'Không thể kết nối tới server';
    }

    console.error(`API Error: ${errorMessage}`, error);
    return Promise.reject(new Error(errorMessage));
  }
);

export default api;