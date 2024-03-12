import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = () => {
            console.log('click bookmark')
  }


  return (
    <>

      <Header></Header>
      <div className='flex container mx-auto p-16'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks ></Bookmarks>
      </div>


    </>
  )
}

export default App
