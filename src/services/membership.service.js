import axios from 'axios';

const API_URL = '/api/membership/';

class MembershipService {
    async getCurrentMembership() {
        const response = await axios.get(`${API_URL}current`);
        return response.data;
    }

    async subscribeToMembership(data) {
        const response = await axios.post(`${API_URL}subscribe`, data);
        return response.data;
    }

    async getPackages() {
        const response = await axios.get(`${API_URL}packages`);
        return response.data;
    }

    async cancelMembership() {
        const response = await axios.get(`${API_URL}cancel`);
        return response.data;
    }
}

export default new MembershipService();
