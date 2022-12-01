import './App.css';
import React from 'react';
import Registration from './components/Registration'
import Login from './components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
