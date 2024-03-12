
import PropTypes from 'prop-types';
import frame from '../../assets/images/Frame.png'
const Blog = ({blog}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>

                <div className='flex items-center gap-3'>
                    <div className='w-[10%]'>
                    <img src={author_img} alt="" />
                    </div>

                    <div >
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>



                <div className='flex  items-center '>
                    <span>{reading_time} min read</span>
                    <button ><img src={frame} alt="" className=''/></button>

                </div>
            </div>
            <h3 className='text-xl'>{title}</h3>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}  </a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}



export default Blog;