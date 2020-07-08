import React from 'react';
import './App.css';
import Header from "./components/Header";
import NewsletterList from './components/NewsletterList';
import Subscribe from './components/Subscribe';


function App() {
  return (
    <div>

    <Header/>
     <NewsletterList/>
      <Subscribe/>
    </div>

  );
}

export default App;


