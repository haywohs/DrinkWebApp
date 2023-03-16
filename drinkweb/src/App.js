import Home from "./pages/HomePage.jsx"
import ProductList from "./pages/ProductList.jsx"
import Product from "./pages/ProductPage.jsx"
import Login from "./pages/Login.jsx"
import "./app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
