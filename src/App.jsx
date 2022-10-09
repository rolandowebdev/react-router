import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import {
  About,
  Home,
  OrderSummary,
  Layout,
  FeaturedProducts,
  NewProducts,
} from './pages';
import { NotFound } from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
