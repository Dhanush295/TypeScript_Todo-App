import { Component, useState } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Todo from '../components/Todo';


import './App.css'

function App() {
  

  return (
    <div style={{width:"100vw",height:"99vh",backgroundColor:"#c2c2d6"}}>
      <Router>
        <Routes>
          <Route path ={"/"} element={<Todo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
