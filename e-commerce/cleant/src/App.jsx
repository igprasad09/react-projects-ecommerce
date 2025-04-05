import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import About from './components/About'
import Contact from './components/Contact'
import Products from './contents/Products'
import Cart from '../src/contents/Cart'

function App() {
  
  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/collection' element={<Collection/>}/>

         <Route path={`/product/:id`} element={ <Products/>}/>
             
         <Route path='/cart' element={<Cart/>}/>
        

      </Routes>
    </>
  )
}

export default App
