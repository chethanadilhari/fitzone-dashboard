import axios from 'axios';

const API_URL = '/api/auth/';

class AuthService {
    async login(email: string, password: string) {
        const response = await axios.post(API_URL + 'login', {
            email,
            password
        });
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    async session() {
        const session = await axios.get(API_URL + 'session');
        return session.data;
    }

    async logout() {
        localStorage.removeItem('user');
        const response = await axios.get(API_URL + 'logout');
        return response.data;
    }

    async register(name: string, email: string, password: string) {
        const response = await axios.post(API_URL + 'register', {
            name,
            email,
            password
        });
        return response.data;
    }
}

export default new AuthService();