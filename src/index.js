// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// importing custom CSS style sheet
import './index.css';

// importing components
import Jumbotron from './components/Jumbotron';
import Table from './components/Table';


// renders the entire site
ReactDOM.render(
  <React.StrictMode>

    {/* Jumbotron component - includes Search component */}
    <Jumbotron/>

    {/* Table component - includes and recieves data from TableData component */}
    <Table/>
    
  </React.StrictMode>,
  document.getElementById('root')
);