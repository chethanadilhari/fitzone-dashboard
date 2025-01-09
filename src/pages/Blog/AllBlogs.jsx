import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import blogService from '../../services/blog.service';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await blogService.getBlogs();
                setBlogs(response);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await blogService.getBlogs(search);
            setBlogs(response);
        } catch (error) {
            console.error('Error searching blogs:', error);
        }
    }

    const handleDelete = async (blogId) => {
        const confirmed = window.confirm('Are you sure you want to delete this blog post?');
        if (confirmed) {
            try {
                await blogService.deleteBlog(blogId);
                setBlogs(blogs.filter(blog => blog.id !== blogId));
            } catch (error) {
                if (error.response.status === 403) {
                    alert('You are not authorized to delete blogs');
                    return;
                }
                console.error('Error deleting blog:', error);
            }
        }
    };

    return (
        <section className="">
            <div className="pt-5 pb-20">
                <div className="bg-darkBrown/70 font-sairaCondensed tracking-widest text-customGrey py-10 px-10 border border-bronze container mx-auto">
                    <h1 className="text-3xl uppercase font-bold mb-4">All Blog posts</h1>
                    <div className="w-full items-center py-5 gap-5 flex ">
                        <label className="font-bold text-lg">Search by:</label>
                        <select className="bg-customDarkGrey border border-bronze text-white w-1/4 p-2 rounded mr-2">
                            <option value="all">Select the type</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search by Title or Author..."
                            className="border border-bronze w-1/2 bg-customDarkGrey p-2 mr-2 rounded"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={handleSearch} className="text-white font-bold tracking-widest bg-bronze py-2 px-6 mr-2 rounded">Search</button>
                    </div>
                    <div className="items-center py-5 gap-5 flex">
                        <label className="font-bold text-lg">Filter by Status:</label>
                        <select className="bg-customDarkGrey border border-bronze text-white w-1/4 p-2 rounded mr-2">
                            <option value="all">All</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>
                    <div className="py-5 text-right">
                        <Link to='/blog/new'>
                        <button className="text-white font-bold tracking-widest bg-bronze py-2 px-6 rounded">
                            Add New Post
                        </button>
                        </Link>
                    </div>
                    <table className="min-w-full text-left bg-black text-white">
                        <thead>
                            <tr className="h-12">
                                <th className="py-2 px-4 border-b border-bronze">Post ID</th>
                                <th className="py-2 px-4 border-b border-bronze">Title</th>
                                <th className="py-2 px-4 border-b border-bronze">Author</th>
                                <th className="py-2 px-4 border-b border-bronze">Date</th>
                                <th className="py-2 px-4 border-b border-bronze">Status</th>
                                <th className="py-2 px-4 border-b border-bronze">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="bg-black hover:bg-customDarkGrey h-20 text-white">
                                    <td className="py-2 px-4 border-b border-bronze">{blog.id}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{blog.title}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{`${blog.author.f_name} ${blog.author.l_name}`}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{new Date(blog.created_at).toLocaleString()}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{blog.status}</td>
                                    <td className="py-2 px-4 border-b border-bronze">
                                        <Link to={`/blog/${blog.id}`}> <button className="hover:text-bronze px-2"><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
                                        <button className="hover:text-bronze px-2" onClick={() => handleDelete(blog.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center py-10">
                        <nav className="inline-flex space-x-2">
                            <button className="bg-bronze text-white py-2 px-4 rounded" disabled>
                                1
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                2
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                3
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                4
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                5
                            </button>
                            <span className="text-white py-2 px-4">...</span>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                10
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllBlogs;