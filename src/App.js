import './App.css';
import About from './components/About'
import Footer from './components/Footer';
import Project from './components/Project';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('Project');

  function renderPage() {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Project') {
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
