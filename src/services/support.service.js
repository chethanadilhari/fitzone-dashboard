
import axios from 'axios';

const API_URL = '/api/support';

class SupportService {
    async createTicket(data) {
        const response = await axios.post(`${API_URL}/ticket`,data);
        return response;
    }

    async getTickets() {
        const response = await axios.get(`${API_URL}/tickets`);
        return response.data;
    }

    async getSingleTicket(ticketId) {
        const response = await axios.get(`${API_URL}/ticket/${ticketId}`);
        return response.data;
    } 

    async updateTicket(ticketId, ticketData) {
        const response = await axios.patch(`${API_URL}ticket/${ticketId}`, ticketData);
        return response.data;
    }

    async replyTicket(ticketId, replyData) {
        const response = await axios.post(`${API_URL}/ticket/${ticketId}/reply`, replyData);
        return response.data;
    }
}

export default new SupportService();