import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
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
                ></Blog>)
         }

        </div>
    );
};

export default Blogs;