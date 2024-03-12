import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="w-[34%] ">
          <div className="text-center shadow-xl py-6 bg-slate-400">
          <h3 className="text-2xl font-bold">bookmarks Blogs: {bookmarks.length}</h3>
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
          
          </div>
           
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array

}

export default Bookmarks;