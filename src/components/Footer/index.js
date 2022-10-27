import React from 'react';

function Footer(props) {
    return (
        <div class="footer-basic" id="contact-me">
            <footer>
              <div class="column"></div>
                <div class="social"><a href="https://www.linkedin.com/in/evan-bruce-896043138/" target="_blank" rel='noreferrer'><i class="icon ion-social-linkedin"></i></a><a href="https://github.com/evanbruce38" target="_blank" rel='noreferrer'><i class="icon ion-social-github"></i></a></div>
                <ul class="list-inline">
                    <li><a href="mailto:evanbruce19@gmail.com">Email</a></li>
                </ul>
                <p class="copyright">Evan Bruce's Portfolio © 2022</p>
                
            </footer>
        </div>
    );
}

export default Footer;