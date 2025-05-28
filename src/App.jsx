import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/orcamento" element={<Calculator />} />
        </Routes>
      </main>
    </>
  )
}

export default App
