import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { About, Home, OrderSummary, Layout } from './pages';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
