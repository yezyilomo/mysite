import React, { useState } from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import './App.scss';


function SideBar(props) {
    return (
        <div class={`${props.setting}`}>
            <div class="col-12 text-center">
                <div class="profile-picture mt-4">
                    <img src="images/yezy.jpg" alt="Picture" />
                </div>
            </div>
            <div class="col-12 mt-4">
                <ul class="nav-links m-0 p-0">
                    <li><Link to="/" onClick={props.hideSideBar}>Home</Link></li>
                    <hr class="line p-0 m-0" />
                    <li><Link to="/about" onClick={props.hideSideBar}>About</Link></li>
                    <hr class="line p-0 m-0" />
                    <li><Link to="/projects" onClick={props.hideSideBar}>Projects</Link></li>
                    <hr class="line p-0 m-0" />
                    <li><Link to="/blogs" onClick={props.hideSideBar}>Blogs</Link></li>
                    <hr class="line p-0 m-0" />
                    <li><Link to="/contact" onClick={props.hideSideBar}>Contact</Link></li>
                    <hr class="line p-0 m-0" />
                </ul>
            </div>

            <div class="col-12 mt-5">
                <ul class="social-media m-0 p-0 pt-2">
                    <li><a href="https://github.com/yezyilomo"><span class="icon icon-github" /></a></li>
                    <li><a href="https://twitter.com/yezyilomo"><span class="icon icon-twitter" /></a></li>
                    <li><a href="https://www.linkedin.com/in/yezy-ilomo-57b76b140"><span class="icon icon-linkedin" /></a></li>
                    <li><a href="https://instagram.com/yezyilomo"><span class="icon icon-instagram" /></a></li>
                    <li><a href="mailto:yezileliilomo@hotmail.com"><span class="icon icon-mail-bold" /></a></li>
                </ul>
            </div>
        </div>
    );
}

function App() {
    const [display, setDisplay] = useState(false)
    let toggleMenu = (e) => {
        setDisplay(!display);
    }

    let getDisplay = () => {
        if(display){
            return "";
        }
        return "d-none d-lg-block";
    }

    let hideSideBar = () => {
        setDisplay(false);
    }

    return (
        <div class="row m-0 p-0">
            <div class="nav-toggle d-lg-none">
                <span class="icon icon-menu" onClick={toggleMenu} />
            </div>
            <SideBar hideSideBar={hideSideBar} setting={`side-bar fixed-top col-12 col-lg-3 bg-white ${getDisplay()}`}/>
            <div class="col-3 d-none d-lg-block"></div>
            <div class="contents col-12 col-lg-9 p-0 m-0" onClick={e=>setDisplay(false)}>
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
    const fonts = ['Montez', 'Sacramento', 'Grand Hotel'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const fontStyle = {
        "font-family": `'${randomFont}', cursive`
    }
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 home text-secondary">
            <div class="col-12 name text-center" style={fontStyle}>
                <div class="profile-picture ">
                    <img src="images/yezy.jpg" alt="Picture" />
                </div>
                Yezileli Ilomo
            </div>
            <div class="row quotes mt-4">
                <div class="col-12 col-lg-6 mt-3">
                “A language that doesn't affect the way you think about programming is not worth knowing.” 
                </div>
                <div class="col-12 col-lg-6 mt-3">
                “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” 
                </div>
            </div>
        </div>
    );
}


function ProjectDetails(props){
    return (
        <a href={props.project.url} class="project-link">
            <div class="col-12 m-0 p-0 project-details">
                <div class="col-12 m-0 project-header">
                    <span class="icon icon-github"/> {props.project.title}
                </div>
                <div class="col-12 m-0 p-2">
                    {props.project.description}
                </div>
            </div>
        </a>
    );
}

function Projects(props){
    let projects = [
        {
            title: "Django RESTQL", 
            description: "Django RESTQL is a python library which allows you to turn your API made with Django REST Framework(DRF) into a GraphQL like API.", 
            url: "https://github.com/yezyilomo/django-restql"
        },
        {
            title: "GitHub Auto Deployer", 
            description: "This is a tool for automating Deployments from GitHub to any server using GitHub's Webhooks with simple configurations.", 
            url: "https://github.com/yezyilomo/github-auto-deployer"
        },
        {
            title: "Dictfier", 
            description: "Python library to convert/serialize class instances(Objects) both flat and nested into a dictionary data structure. It's very useful in converting Python Objects into JSON format.", 
            url: "https://github.com/yezyilomo/dictfier"
        },
        {
            title: "State Pool", 
            description: "React state management library based on global variables and react hooks. With this there no need for Provider component or using Contex API at all, it works like react state hooks.", 
            url: "https://github.com/yezyilomo/state-pool"
        },
        {
            title: "Odoo REST API", 
            description: "This is a module which expose Odoo ERP as a REST API, You can use this API to integrate Odoo ERP with external services.", 
            url: "https://github.com/yezyilomo/odoo-rest-api"
        },
        {
            title: "Settle", 
            description: "Real Estate Progressive Web App(PWA) written with React + Django. The API is powered by Django REST framework + Django RESTQL.", 
            url: "https://yezyilomo.com/"
        },
    ]
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 projects text-secondary">
            <h1 class="section-title text-dark">My Projects</h1>
            <div class="row p-0 m-0 mt-2 mt-lg-5">
            {projects.map(project =>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 m-0 p-0 my-3 px-1 px-sm-3">
                    <ProjectDetails project={project}/>
                </div>
            )}
            <div class="col-12 p-0 m-0 mt-3">
                <a href="https://github.com/yezyilomo" class=" mx-3 h5">View all projects</a>
            </div>
            </div>
        </div>
    );
}


function BlogDetails(props){
    return (
        <a href={props.blog.url} class="blog-link">
            <div class="col-12 m-0 p-0 blog-details">
                <div class="col-12 m-0 blog-header">
                    <span class="icon icon-quill"/> {props.blog.title}
                </div>
                <div class="col-12 m-0 p-2 pb-4">
                    {props.blog.description}
                </div>
            </div>
        </a>
    );
}

function Blogs(props){
    let blogs = [
        {
            title: "Introducing a Simple React State Manager Based on Hooks.", 
            description: "Redux is a popular state manager in React but despite its popularity it has many problems, the most obvious ones being -Learning curve: Many developers found themselves lost in the Redux world of strange terms, weird entities and the connection between them: thunk, selectors, reducers, actions, middlewares, mapStateToProps, mapDispatchToProps, etc. Learning all this ...",
            url: "https://dev.to/yezyilomo/introducing-a-simple-react-state-manager-based-on-hooks-4bc0"
        },
        {
            title: "REST + Some GraphQL with Django REST Framework.", 
            description: "Since being introduced by Facebook, GraphQL has taken the API world by storm as an alternative to REST APIs. GraphQL fixes many problems that API developers and users have found with RESTful architecture. However, it also introduces a new set of challenges which need to be evaluated. Because GraphQL is not simply a evolutionary replacement for RESTful APIs ...",
            url: "https://dev.to/yezyilomo/rest-some-graphql-with-django-rest-framework-3j25"
        }
    ]

    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 blogs text-secondary">
            <h1 class="section-title text-dark">My Blogs</h1>
            <div class="row p-0 m-0 mt-2 mt-lg-5">
            {blogs.map(blog =>
                <div class="col-12 col-sm-12 col-md-6 m-0 p-0 my-3 px-1 px-sm-3">
                    <BlogDetails blog={blog}/>
                </div>
            )}
            </div>
        </div>
    );
}

function About(props){
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 about text-secondary">
            <h1 class="section-title text-dark">About Me</h1>
            <h5 class="mt-2 mt-lg-5 text-secondary">Hi! My name is <span class="text-primary">Yezileli Ilomo</span>.</h5>
            <p class="mt-2 text-secondary">
            I am software engineer with a demonstrated history of working 
            in the information technology and services industry. I graduated at the University of 
            Dar es Salaam (UDSM) with a Bachelor Degree of Science in Computer Science in 2018. 
            I have a strong passion for APIs and UIs design and development.
            </p>
            <div class="row p-0 m-0 mt-2 mt-lg-5">
                <div class="col-12 col-lg-6 p-0 m-0">
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-birthday"/></div>
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
                        <div class="col"> {getAge('1995-07-27')} </div>
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
            </div>
        </div>
    );
}



function Contact(props){
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 contact text-secondary">
            <h1 class="section-title text-dark">Get in Touch</h1>

            <div class="row p-0 m-0 mt-2 mt-lg-5">
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
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-web"/></div>
                        <div class="col-3 label">Website:</div>
                        <div class="col"><a href="https://yezyilomo.com">yezyilomo.com</a></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 p-0 m-0">

                </div>
            </div>
        </div>
    );
}

export default App;
