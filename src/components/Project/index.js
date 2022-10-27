import React from 'react';
import Project from '../Project';
import './style.css';

function Portfolio(props) {

    const workArr = [
        {
            url: 'https://dev-connect-portfolio-sharing.herokuapp.com/',
            title: 'Dev Connect, social media for developers',
            github: 'https://github.com/evanbruce38/dev-connect-portfolio-sharing',
            class: 'big-box-1',
            id: null
        },
        {
            url: 'https://evanbruce38.github.io/Find-a-K-9/',
            title: 'Find a K-9',
            github: 'https://github.com/evanbruce38/Find-a-K-9',
            class: 'big-box-2',
            id: null
        },
        {
            url: 'https://evanbruce38.github.io/Challenge-6-Weather-Dashboard/',
            title: 'Weather Dashboard',
            github: 'https://github.com/evanbruce38/Challenge-6-Weather-Dashboard',
            class: 'half-box',
            id: "half-box1"
        },
        {
            url: 'https://immense-wave-00583.herokuapp.com/',
            title: 'Note Taker Applicaiton',
            github: 'https://github.com/evanbruce38/Note-Taker',
            class: 'half-box',
            id: 'half-box2'
        },
        {
            url: 'https://evanbruce38.github.io/Challenge-3-Password-Generator/',
            title: 'Password Generator application',
            github: 'https://github.com/evanbruce38/Challenge-3-Password-Generator',
            class: 'half-box',
            id: 'half-box3'
        },
        {
            url: 'https://boiling-hollows-44831.herokuapp.com/',
            title: 'Tech-blog application',
            github: 'https://github.com/evanbruce38/Tech-Blog',
            class: 'half-box',
            id: 'half-box4'
        }
    ];

    return (
        <>
        <section className='d-flex justify-content-center' id="header-img-partial"></section>
                <h2 className='d-flex justify-content-center' id="work-title">Portfolio</h2>
            <section id="work">
                <div class="column"></div>
                <div id="work-imgs-container" class="main-section-content">
                    {
                        workArr.map(work => {
                            return <Project work={work}/>
                        })
                    }
                </div>
                    
            </section>
        </>
    );
}

export default Portfolio;