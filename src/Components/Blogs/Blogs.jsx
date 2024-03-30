import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setblogs] = useState();

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))

    }, [])


    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mb-2">Blogs: </h1>
            {
                blogs.map(blog =><Blog blog={blog} key={blog.id} handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blogs;