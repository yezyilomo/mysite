import React from 'react';
import {Link} from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div class="row m-0 p-0">
            <div class="side-bar sticky-top col-12 col-lg-3">
                <div class="col-12 bg-white text-center">
                    <div class="profile-picture mt-4">
                        <img src="images/yezy.jpg" alt="Picture"/>
                    </div>
                </div>
                <div class="w-100 h-50 col-12 mt-4 bg-white">
                    <ul class="nav-links m-0 p-0">
                        <li><Link to="/home">Home</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/about">About</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/projects">Projects</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/resume">Resume</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/contact">Contact</Link></li>
                        <hr class="line p-0 m-0"/>
                    </ul>

                    <ul class="social-media m-0 p-0 mt-4 pt-2">
                        <li><a href="https://github.com/yezyilomo"><span class="icon icon-github"/></a></li>
                        <li><a href="https://twitter.com/yezyilomo"><span class="icon icon-twitter"/></a></li>
                        <li><a href="https://www.linkedin.com/in/yezy-ilomo-57b76b140"><span class="icon icon-linkedin"/></a></li>
                        <li><a href="https://instagram.com/yezyilomo"><span class="icon icon-instagram"/></a></li>
                    </ul>
                </div>
            </div>

            <div class="contents col-12 col-lg-9 bg-white">
                <About/>
            </div>
        </div>
    );
}

function About(props){
    return (
        <div class="col-12 mt-4 mt-2 about">
            <h1 class="section-title text-dark">About Me</h1>
            <h5 class="mt-5 text-secondary">Hi! My name is Yezileli Ilomo.</h5>
            <p class="mt-2 text-secondary">
            I am software engineer with a demonstrated history of working 
            in the information technology and services industry. I graduated at the University of 
            Dar es Salaam (UDSM) with a Bachelor Degree of Science in Computer Science in 2018. 
            I have a strong passion for APIs and UIs design and development.
            </p>
            <div class="row p-0 m-0 mt-5">
                <div class="col-12 col-lg-6 p-0 m-0">
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-gift"/></div>
                        <div class="col-3 label">Birthday:</div>
                        <div class="col">27th July</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-location"/></div>
                        <div class="col-3 label">Location:</div>
                        <div class="col">Dar es salaam, Tanzania</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-book"/></div>
                        <div class="col-3 label">Study:</div>
                        <div class="col">University Of Dar es salaam</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-mail"/></div>
                        <div class="col-3 label">Mail:</div>
                        <div class="col"><a href=":mail">yezileliilomo@hotmail.com</a></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 p-0 m-0">
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-calendar"/></div>
                        <div class="col-3 label">Age:</div>
                        <div class="col">24</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-console"/></div>
                        <div class="col-3 label">Interests:</div>
                        <div class="col">Swimming, Playing Guitar</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-school"/></div>
                        <div class="col-3 label">Education:</div>
                        <div class="col">Degree</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-phone"/></div>
                        <div class="col-3 label">Phone:</div>
                        <div class="col"><a href=":phone">+255 767 461 707</a></div>
                    </div>
                </div>
            </div>
            <div class="row text-center mt-5">
                <div class="btn btn-primary mx-3">Download CV</div>
                <div class="btn btn-primary ml-5">Send Message</div>
            </div>
        </div>
    );
}

export default App;
