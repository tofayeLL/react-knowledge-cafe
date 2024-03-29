import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const { title, id, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-20 space-y-3'>

            <img className='w-full' src={cover} alt="" />

            <div className='flex justify-between '>

                <div className='flex items-center gap-3'>
                    <div className='w-[10%]'>
                        <img src={author_img} alt="" />
                    </div>

                    <div >
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>

                <div className='flex  items-center space-x-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>

                </div>

            </div>
            <h3 className='text-xl'>{title}</h3>

            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">#{hash}  </a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time, id)} className='text-blue-400 underline'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}



export default Blog;