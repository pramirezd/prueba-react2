import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import PizzaProvider from './contexts/PizzaContext'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'
import PizzaInfo from './views/PizzaInfo'
import NotFound from './views/NotFound'

function App() {

  return (
    <PizzaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/pizza/:id' element={<PizzaInfo />} />   
          <Route path='*' element={<NotFound />} />       
        </Routes>
      </Router>
    </PizzaProvider>
  )
}

export default App
