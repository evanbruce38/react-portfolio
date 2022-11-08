import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  function renderPage () {
    if (currentPage === "About") {
    return <About />
  } else if (currentPage === 'Portfolio') {
    return <Portfolio />
  } else if (currentPage === 'Resume') {
    return <Resume />
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