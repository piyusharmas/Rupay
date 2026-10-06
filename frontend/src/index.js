import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import{ Route , BrowserRouter , Routes} from 'react-router-dom'
import SignUp from './landing_page/signup/SignUp'
import ProductPage from './landing_page/products/ProductPage'
import SupportPage from './landing_page/support/SupportPage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import NotFound from './landing_page/NotFound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
)