import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingtime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = (time, id) => {
    const newTime = readingtime + time;
    setReadingTime(newTime);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
    


  }
  


  return (
    <>

      <Header></Header>
      <div className='flex container mx-auto p-16'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleReadingTime={handleReadingTime}
         ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>


    </>
  )
}

export default App
