
import { useState } from 'react';
import Bloges from './components/Header/Bloges/Bloges';
import BookMarkes from './components/Header/BookMarkes/BookMarkes';
import Header from './components/Header/Header';

function App() {
  const [bookMarks, setBookMarkes] = useState([]);

  const handelBookMark = (blog) =>{
     const newBlog = [...bookMarks, blog];
     setBookMarkes(newBlog)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-4 p-4">
        <Bloges handelBookMark={handelBookMark}></Bloges>
        <BookMarkes bookMarks={bookMarks}></BookMarkes>
      </div>
    </>
  );
}

export default App
