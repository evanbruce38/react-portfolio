import './App.css';
import About from '/.Components/About'
import Footer from './Components/Footer';
import Project from './Components/Project';
import Header from './Components/Header';
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
