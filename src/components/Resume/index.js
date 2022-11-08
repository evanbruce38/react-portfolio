import React from 'react';
import './style.css';
import resume from '../../assets/Resume.pdf';

function Resume() {
    return (
        <>
            <section id="header-img-partial"></section>

            <div className="container resume-container">
                <a href={resume} target="_blank" rel='noreferrer'><button className="btn btn-success btn-lg mt-5 mb-5">Link to Resume</button></a>
                <h1 className='d-flex justify-content-center profs mb-5'>Proficiencies</h1>
                    <div className='ul-container d-flex justify-content-between'>
                        <ul className='mt-3 mb-5 ml-5'>
                            <li>HTML</li>
                            <li>CSS/Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Web APIs</li>
                            <li>Third-Party APIs</li>
                            <li>Server-Side APIs</li>
                        </ul>
                        <ul className='mt-3 mb-5 ml-5'>
                            <li>Node.js</li>
                            <li>Object-Oriented Programming</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>Object-Relational Mappiing</li>
                            <li>Model-View-Controller</li>
                        </ul>
                        <ul className='mt-3 mb-5 ml-5'>
                            <li>GraphQL</li>
                            <li>NoSQL</li>
                            <li>MongoDB</li>
                            <li>React</li>
                            <li>MERN</li>
                            <li>State</li>
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Resume;