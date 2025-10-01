import axios from 'axios';
import CONFIG from '@/config/config';

const base = CONFIG.API_BASE_URL || '';

// create instance for explicit usage
export const api = axios.create({
  baseURL: base,
  withCredentials: true,
});

// also set defaults so existing `import axios from 'axios'` usages use the same base
axios.defaults.baseURL = base;
axios.defaults.withCredentials = true;

export default api;
