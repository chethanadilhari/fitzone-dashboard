import React, { useState, useEffect } from 'react';
import BlogService from '../../services/blog.service';
import { useParams, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

const UpdateBlog = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('DRAFT');

    const Navigate = useNavigate();

    const handleEditorChange = (content, editor) => {
        setContent(content);
        console.log("Content was updated:", content);
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await BlogService.getBlogById(id);
                setTitle(data.title);
                setFeaturedImage(data.featured_image);
                setDescription(data.description);
                setContent(data.content);
                setStatus(data.status);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogData = {
            title,
            featured_image: featuredImage,
            description,
            content,
            status,
        };
        try {
            await BlogService.updateBlog(id, blogData);
            alert('Blog Updated successfully');
            Navigate('/blog');
        } catch (error) {
            console.error('Error creating blog:', error);
            alert('Failed to Update blog');
        }
    };

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="bg-black/90 p-10 font-sairaCondensed border text-lg tracking-widest text-white border-bronze shadow-lg">
                    <h1 className="text-3xl text-bronze uppercase font-bold mb-6">Edit Blog Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2">Title</label>
                                <input
                                    type="text"
                                    className="w-full bg-customDarkGrey border border-bronze p-3 rounded"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-white mb-2">Feature Image</label>
                            <input
                                type="text"
                                className="w-full bg-customDarkGrey border border-bronze p-3 rounded"
                                value={featuredImage}
                                onChange={(e) => setFeaturedImage(e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <label className="block text-white mb-2">Description</label>
                            <textarea
                                className="w-full bg-customDarkGrey border border-bronze p-3 rounded"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <label className="block text-white mb-2">Content:</label>

                            <Editor
                                tinymceScriptSrc="/tinymce/tinymce.min.js" 
                                value={content}
                                init={{
                                    height: 400,
                                    menubar: true,
                                    plugins: [
                                        "advlist autolink lists link image charmap print preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount",
                                    ],
                                    toolbar:
                                        "undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | link | removeformat | help",
                                    skin: "oxide-dark", // Set to the dark theme
                                    content_css: "dark", // Use the dark content styles
                                }}
                                onEditorChange={handleEditorChange}
                            />
                            <div className="my-10">
                                <label className="block text-white mb-2">Editor Output:</label>
                                <div className="w-full bg-customDarkGrey border  min-h-48 h-auto border-bronze p-3 rounded">
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button
                                type="submit"
                                className="bg-bronze text-white px-4 py-2 rounded"
                                onClick={() => setStatus('PUBLISHED')}
                            >
                                Publish
                            </button>
                            <button
                                type="submit"
                                className="bg-bronze text-white px-4 py-2 rounded"
                                onClick={() => setStatus('DRAFT')}
                            >
                                Draft
                            </button>
                            <button
                                type="button"
                                className="bg-bronze text-white px-4 py-2 rounded"
                                onClick={() => {
                                    setTitle('');
                                    setFeaturedImage('');
                                    setDescription('');
                                    setContent('');
                                    setStatus('DRAFT');
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateBlog;