
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage'
import Flowers from './pages/Flowers'
import Plants from './pages/Plants'
import RedTulips from './pages/RedTulips'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/flowers' element={<Flowers />} />
        <Route path='/plants' element={<Plants />} />
        <Route path='/newflowers/:id' element={<RedTulips />} />
        <Route path='/relevant/:id' element={<RedTulips />} />
        <Route path='/plants/:id' element={<RedTulips />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;