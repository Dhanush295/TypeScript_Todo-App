import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Todo from './components/users.tsx';


import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ={"/"} element={<Todo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
