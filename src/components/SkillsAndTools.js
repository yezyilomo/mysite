import React from 'react';
import './SkillsAndTools.scss';


function SkillDetails(props) {
    return (
        <div class="col-12 m-0 p-0 skill-details">
            <div class="row col-12 m-0 skill-header">
                <div class="col-10 p-0 m-0">
                    <span class="icon icon-code"/>  {props.skill.title}
                </div>
                <div class="col-2 p-0 m-0 text-right">
                    <span class="dot-1-container"><div class="window-dot dot-1"></div></span>
                    <span class="dot-2-container"><div class="window-dot dot-2"></div></span>
                </div>
            </div>
            <div class="col-12 m-0 p-2 tools">
                <ul class="p-0 m-0">
                    {props.skill.tools.map(tool =>
                        <li>- {tool} </li>
                    )}
                </ul>
            </div>
        </div>
    );
}


function SkillsAndTools(props) {
    let skills = [
        { title: "Frontend", tools: [
            "JavaScript", 
            "ReactJS", 
            "HTML5", 
            "CSS3 & Sass", 
            "Bootstrap"
        ] },
        { title: "Backend", tools: [
            "Python", 
            "Django", 
            "Django REST Framework", 
            "Flask"
        ] },
        { title: "Databases", tools: [
            "PostgreSQL", 
            "MySQL"
        ] },
        { title: "Dev Tools", tools: [
            "Bash",
            "Git", 
            "GitHub", 
            "BitBucket", 
            "JIRA & Confluence"
        ] },
        { title: "Web Servers", tools: [
            "Nginx", 
            "Apache"
        ] },
        { title: "Other Skills", tools: [
            "Making Documentations", 
            "Test Driven Development(TDD)", 
            "API Design & Development"
        ] }
    ]
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 skills-and-tools" id="skills-and-tools">
            <h1 class="section-title">My Skills & Tools</h1>

            <div class="row p-0 m-0 mt-2 mt-lg-5">
                {skills.map(skill =>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 m-0 p-0 my-3 px-1 px-sm-3">
                        <SkillDetails skill={skill} />
                    </div>
                )}
            </div>

        </div>
    );
}

export {SkillsAndTools}