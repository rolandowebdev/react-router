import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { About, Home, Layout } from './pages';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
