
import Bloges from './components/Header/Bloges/Bloges';
import BookMarkes from './components/Header/BookMarkes/BookMarkes';
import Header from './components/Header/Header';

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Bloges></Bloges>
        <BookMarkes></BookMarkes>
      </div>
    </>
  );
}

export default App
