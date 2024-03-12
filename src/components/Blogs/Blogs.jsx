import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
          fetch('blog.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-[60%] bg-green-200">
         <h3 className="text-xl font-semibold">Blogs: {blogs.length}</h3>
         {
            blogs.map(blog => <Blog
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleReadingTime={handleReadingTime}
                ></Blog>)
         }

        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;