import './App.css';
import MenuList from './Components/MenuList';
import NaviBar from './Components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NaviBar/>
      <MenuList/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;