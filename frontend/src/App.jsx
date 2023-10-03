import { Component, useState } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Todo from '../components/Todo';


import './App.css'

function App() {
  

  return (
    <div style={{width:"100vw",height:"99vh" ,backgroundColor:"#ebeff3"}}>
      <Router>
        <Routes>
          <Route path ={"/todo"} element={<Todo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
