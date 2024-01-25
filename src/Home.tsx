import React from 'react';
import './css/Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import PaperList from './PaperList';

function Home() {
  return (
    <div className="Home">
      <Sidebar/>
      <Header/>
      <PaperList/> 
    </div>
  );
}

export default Home;
