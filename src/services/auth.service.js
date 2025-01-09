import axios from 'axios';

const API_URL = '/api/auth/';

class AuthService {
    async login(email, password) {
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
        return session;
    }

    async logout() {
        localStorage.removeItem('user');
        const response = await axios.get(API_URL + 'logout');
        return response.data;
    }

    async register(formData) {
        const response = await axios.post(API_URL + 'register', {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            gender: formData.gender,
            phone: formData.mobileNumber
        });
        return response.data;
    }
}

export default new AuthService();