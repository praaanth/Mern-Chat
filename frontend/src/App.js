

import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
function App() {
  return (
    <>
    
    <Router>

    <div className="App">
 
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/data" element={<Chat/>} />
    
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
