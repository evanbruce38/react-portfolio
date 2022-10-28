import React from 'react';
import './style.css';
import profilePic from '../../assets/profile-pic.jpg';

function About(props) {
    return (
        <>
            <section id="header-img">
                <h2>
                    Welcome to my page!
                </h2>
            </section>

            <section id="about">
                <div className='about-pic'>
                    <h2 id="about-title">About Me</h2>
                    <img src={profilePic} alt='profile-pic' className='profile-pic'/>
                </div>
                <div class="column">

                </div>
                <div class="main-section-content">
                    <p class="about-p">
                    Front-end web developer leveraging sales background to build a more interactive user experience on the web. Currently working towards a certificate in full stack development from the University of Miami, with newly developed skills in Javascript, HTML, CSS, Node.js, React, and SQL. Problem-solver with a hard-nosed attitude perfect for completing difficult assignments and projects. Excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;