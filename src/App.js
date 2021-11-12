import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from "./components/layout/Header";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import 'antd/dist/antd.css';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
