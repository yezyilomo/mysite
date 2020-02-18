import React from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import './App.scss';


let projects = [
    {title: "Django RESTQL", description: "Turn your API into a GraphQL like API", url: "github..."}
]

let blogs = [
    {title: "Django RESTQL", url: "github..."}
]

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
                        <li><Link to="/">Home</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/about">About</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/projects">Projects</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <hr class="line p-0 m-0"/>
                        <li><Link to="/contact">Contact</Link></li>
                        <hr class="line p-0 m-0"/>
                    </ul>

                    <ul class="social-media m-0 p-0 mt-5 pt-2">
                        <li><a href="https://github.com/yezyilomo"><span class="icon icon-github"/></a></li>
                        <li><a href="https://twitter.com/yezyilomo"><span class="icon icon-twitter"/></a></li>
                        <li><a href="https://www.linkedin.com/in/yezy-ilomo-57b76b140"><span class="icon icon-linkedin"/></a></li>
                        <li><a href="https://instagram.com/yezyilomo"><span class="icon icon-instagram"/></a></li>
                        <li><a href="mailto:yezileliilomo@hotmail.com"><span class="icon icon-mail"/></a></li>
                    </ul>
                </div>
            </div>

            <div class="contents col-12 col-lg-9 p-0 m-0">
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/projects" exact>
                    <Projects/>
                </Route>
                <Route path="/blogs" exact>
                    <Blogs/>
                </Route>
                <Route path="/contact" exact>
                    <Contact/>
                </Route>
            </div>
        </div>
    );
}

function Home(props){
    return (
        <div class="col-12 m-0 p-0 home">
            <div class="col-12 wrap">
                <div class="name">
                    @yezyilomo
                </div>
            </div>

        </div>
    );
}

function Projects(props){
    return (
        <div class="col-12 px-5 pt-4 projects text-secondary">
            <h1 class="section-title text-dark">My Projects</h1>
        </div>
    );
}

function Blogs(props){
    return (
        <div class="col-12 px-5 pt-4 blogs text-secondary">
            <h1 class="section-title text-dark">My Blogs</h1>
        </div>
    );
}

function About(props){
    return (
        <div class="col-12 px-5 pt-4 about text-secondary">
            <h1 class="section-title text-dark">About Me</h1>
            <h5 class="mt-5 text-secondary">Hi! My name is <span class="text-primary">Yezileli Ilomo</span>.</h5>
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
                        <div class="col"><a href="mailto:yezileliilomo@hotmail.com">yezileliilomo@hotmail.com</a></div>
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
                        <div class="col"><a href="tel:+255767461707">+255 767 461 707</a></div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <a href="Yezileli_Ilomo_CV.pdf" class="btn btn-primary mx-3 button">Download CV</a>
                <a href="#" class="btn btn-primary ml-5 button">Send Message</a>
            </div>
        </div>
    );
}



function Contact(props){
    return (
        <div class="col-12 px-5 pt-4 contact text-secondary">
            <h1 class="section-title text-dark">Get in Touch</h1>

            <div class="row p-0 m-0 mt-5">
                <div class="col-12 col-lg-6 p-0 m-0">
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-location"/></div>
                        <div class="col-3 label">Location:</div>
                        <div class="col">Dar es salaam, Tanzania</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-phone"/></div>
                        <div class="col-3 label">Phone:</div>
                        <div class="col"><a href="tel:+255767461707">+255 767 461 707</a></div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-mail"/></div>
                        <div class="col-3 label">Mail:</div>
                        <div class="col"><a href="mailto:yezileliilomo@hotmail.com">yezileliilomo@hotmail.com</a></div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-twitter"/></div>
                        <div class="col-3 label">Twitter:</div>
                        <div class="col">@yezyilomo</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-github"/></div>
                        <div class="col-3 label">GitHub:</div>
                        <div class="col">@yezyilomo</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-instagram"/></div>
                        <div class="col-3 label">Instagram:</div>
                        <div class="col">@yezyilomo</div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-whatsapp"/></div>
                        <div class="col-3 label">WhatsApp:</div>
                        <div class="col"><a href="tel:+255767461707">+255 767 461 707</a></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 p-0 m-0">

                </div>
            </div>
        </div>
    );
}

export default App;
