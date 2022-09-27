import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { About, Home, OrderSummary, Layout } from './pages';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>
    </Layout>
  );
}

export default App;
