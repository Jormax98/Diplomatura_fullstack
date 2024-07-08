import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import EmpresaPage from './pages/EmpresaPage';
import ServiciosPage from './pages/ServiciosPage';
import TrabajosPage from './pages/TrabajosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="empresa" element={<EmpresaPage />} />
          <Route path="trabajos" element={<TrabajosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
