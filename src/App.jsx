import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "C:/frontend/vite-project/src/assets/pages/home.jsx";
import About from "C:/frontend/vite-project/src/assets/pages/about.jsx";
import Contact from "C:/frontend/vite-project/src/assets/pages/contact.jsx";
import Product from "C:/frontend/vite-project/src/assets/pages/product.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;