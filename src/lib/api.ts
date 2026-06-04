import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactApi = {
  submit: (data: { name: string; phone: string; email?: string; subject?: string; message: string }) =>
    api.post('/api/v1/contact', data),
  newsletter: (email: string) => api.post('/api/v1/newsletter', { email }),
  inscription: (data: {
    full_name: string;
    phone: string;
    email?: string;
    course_type: string;
    course_name: string;
    level?: string;
    payment_method?: string;
    message?: string;
  }) => api.post('/api/v1/inscriptions', data),
};

export default api;
