import './App.css';
import Header from './components/utils/header/Header';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Homepage from './components/home/hero/homepage';
import Blog from "./components/pages/Blog"
import Footer from './components/utils/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' exact Component={Homepage}/>
      <Route path='/blog/:id' Component={Blog} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
