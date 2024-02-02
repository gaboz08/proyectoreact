import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import ItemListContainer from './Components/ItemListContainer.js';
import 'src/Styles/main.css';

function App() {
  return (
    <Router>
      <NavBar />
      <ItemListContainer greeting="Explora nuestra tienda" />
    </Router>
  );
}

export default App;
