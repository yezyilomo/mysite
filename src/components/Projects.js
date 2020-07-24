import React from 'react';
import './Projects.scss';


function ProjectDetails(props){
    return (
        <a href={props.project.url} class="window-as-link" target="_blank" rel="noopener noreferrer">
            <div class="col-12 m-0 p-0 window">
                <div class="row col-12 m-0 window-header">
                    <div class="col-10 p-0 m-0">
                        <span class="icon icon-github"/> {props.project.title}
                    </div>
                    <div class="col-2 p-0 m-0 text-right">
                        <span class="dot-1-container"><div class="window-dot dot-1"></div></span>
                        <span class="dot-2-container"><div class="window-dot dot-2"></div></span>
                    </div>
                </div>
                <div class="col-12 m-0 window-body">
                    {props.project.description} &nbsp;&nbsp;
                    <a href={props.project.url} target="_blank" rel="noopener noreferrer">See more →</a>
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
            title: "Settle", 
            description: "Real Estate Progressive Web App(PWA) written with React + Django. The API is powered by Django REST framework + Django RESTQL.", 
            url: "https://settle.yezyilomo.com/"
        },
        {
            title: "GitHub Deployer", 
            description: "This is a tool for automating Deployments from GitHub to any server using GitHub Webhooks API with simple configuration.", 
            url: "https://github.com/yezyilomo/github-auto-deployer"
        },
        {
            title: "State Pool", 
            description: "React state management library based on global variables and react hooks. With this there's no need for Provider component or using Contex API at all, it works like react state hooks.", 
            url: "https://github.com/yezyilomo/state-pool"
        },
        {
            title: "Odoo REST API", 
            description: "This is a module which expose Odoo ERP as a REST API with some features of GraphQL, You can use this API to integrate Odoo ERP with external services.", 
            url: "https://github.com/yezyilomo/odoo-rest-api"
        },
        {
            title: "Dictfier", 
            description: "Python library to convert/serialize class instances(Objects) both flat and nested into a dictionary data structure. It's very useful in converting Python Objects into JSON format.", 
            url: "https://github.com/yezyilomo/dictfier"
        },
    ]
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 projects" id="projects">
            <h1 class="section-title">My Projects</h1>
            <div class="row p-0 m-0 mt-2 mt-lg-5">
            {projects.map(project =>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 m-0 p-0 my-3 px-1 px-sm-3">
                    <ProjectDetails project={project}/>
                </div>
            )}
            <div class="col-12 p-0 m-0 mt-3">
                <a href="https://github.com/yezyilomo" target="_blank" rel="noopener noreferrer" class=" mx-2 mx-sm-3 h5">View all projects</a>
            </div>
            </div>
        </div>
    );
}

export {Projects}