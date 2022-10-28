import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Footer from './components/Footer';
import Project from './components/Project';
import Header from './components/Header';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  function renderPage () {
    if (currentPage === "About") {
    return <About />
  } else {
    return <Project />
  }
}

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
