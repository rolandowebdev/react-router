import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import {
  About,
  Home,
  OrderSummary,
  Layout,
  FeaturedProducts,
  NewProducts,
  Users,
  UserDetails,
  Admin,
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
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
