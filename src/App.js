import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';
import { Projects, Contact } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;