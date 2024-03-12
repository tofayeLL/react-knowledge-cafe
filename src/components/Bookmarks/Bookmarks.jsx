import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks, readingtime}) => {
    
    return (
        <div className="w-[34%] ">
            <div className="mb-3 p-5 shadow-xl rounded-lg text-center">
                <h3 className="text-blue-400 text-xl font-semibold">Spend Time On Read: {readingtime} min</h3>
            </div>
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
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number

}

export default Bookmarks;