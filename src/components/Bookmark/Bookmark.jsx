
import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-4 m-4 space-y-2 shadow-xl rounded-md bg-white'>
            <h3 className='text-base'>{title}</h3>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;