
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import List from './components/List';
import Navbar from './components/Navbar';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [list, setList] = useState([])
  const [modalShow, setModalShow] = useState('');
  return (
    <>

      <Router >
        <Navbar></Navbar>

        <Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={[<Form list={list} setList={setList} setModalShow={setModalShow}></Form>,<List list={list}></List>]}>

            
          </Route>
        </Routes>

        

      </Router>

    </>
  );
}

export default App;
