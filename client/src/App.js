import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SearchClientSide from './pages/SearchClientSide'
import SearchServerSide from './pages/SearchServerSide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='client' element={<SearchClientSide />}/>
        <Route path='server' element={<SearchServerSide />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
