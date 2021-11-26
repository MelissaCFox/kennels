import './index.css';
import React from "react"
import ReactDOM from "react-dom"
import { Kennel } from "./components/Kennel"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Kennel />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
