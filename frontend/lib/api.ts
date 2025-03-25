// src/lib/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://eduweb-backend.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true, // Quan trọng nếu dùng cookie/session
  timeout: 10000,
});

// Interceptor để debug request
api.interceptors.request.use(config => {
  console.log(`Sending ${config.method?.toUpperCase()} to ${config.url}`);
  return config;
});

// Interceptor xử lý lỗi chi tiết
api.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response.data;
  },
  error => {
    let errorMessage = 'Lỗi không xác định';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout - Server không phản hồi';
    } else if (error.response) {
      // Server trả về lỗi (4xx, 5xx)
      errorMessage = error.response.data?.message || 
                    `Lỗi server (${error.response.status})`;
      
      // Xử lý đặc biệt cho CORS
      if (error.response.status === 403 && !error.response.data) {
        errorMessage = 'Lỗi CORS: Không có quyền truy cập';
      }
    } else if (error.request) {
      // Request được gửi nhưng không nhận được response
      errorMessage = 'Không thể kết nối tới server (CORS hoặc mạng)';
    }

    console.error('API Error:', {
      message: errorMessage,
      config: error.config,
      response: error.response
    });
    
    return Promise.reject(new Error(errorMessage));
  }
);

export default api;