import {BrowserRouter, Routes, Route} from 'react-router-dom';
import{ Header} from "./components/Header";
import { Footer } from "./components/Footer";
import { Recipe } from './pages/Recipe';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {NotFound} from './pages/NotFound';
import { Category } from './pages/Category';

function App() {
  return (
  <>
<BrowserRouter basename='/React-Restaurant'>
  <Header/>
  <main className="container content">

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="category/:name" element={<Category />}/>
    <Route path='meal/:id' element={<Recipe />}/>
    <Route element={<NotFound />}/>
  
  </Routes>
  </main>
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
