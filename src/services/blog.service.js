import axios from 'axios';

const API_URL = '/api/blog';

class BlogService {
    async createBlog(blogData) {
        const response = await axios.post(API_URL, blogData);
        return response.data;
    }

    async getBlogs(query = '') {
        const response = await axios.get(API_URL, { params: { search: query } });
        return response.data;
    }

    async getBlogById(blogId) {
        const response = await axios.get(API_URL + '/'+ blogId);
        return response.data;
    }

    async updateBlog(blogId, blogData) {
        const response = await axios.patch(API_URL + '/'+ blogId, blogData);
        return response.data;
    }

    async deleteBlog(blogId) {
        const response = await axios.delete(API_URL + '/'+ blogId);
        return response.data;
    }
}

export default new BlogService();