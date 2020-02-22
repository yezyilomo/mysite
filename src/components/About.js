import React from 'react';
import './About.scss';


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
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 about">
            <h1 class="section-title">About Me</h1>
            <h5 class="mt-2 mt-lg-5">Hi! My name is <span class="my-name">Yezileli Ilomo</span>.</h5>
            <p class="mt-2">
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


export {About}