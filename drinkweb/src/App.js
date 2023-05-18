import Home from "./pages/HomePage.jsx"
import ProductList from "./pages/ProductList.jsx"
import Product from "./pages/ProductPage.jsx"
import Login from "./pages/Login.jsx"
import "./app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register.jsx"
import QA from "./pages/QA.jsx"
import Cart from "./pages/Cart.jsx"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productList' element={<ProductList />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/question' element={<QA />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
