import React from 'react';
import {ToggleLightButton} from '.';
import './SideBar.scss';


function SideBar(props) {
    function scrollToElement(e){
        e.preventDefault();
        props.hideSideBar();
        let id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ 
            behavior: 'smooth' 
        });
        window.history.pushState(null, e.target.innerHTML, id);
    }
    return (
        <div class={`${props.setting}`}>
            <ToggleLightButton/>
            <div class="col-12 text-center">
                <div class="profile-picture mt-4">
                    <span class="lazy-container">
                        <img src="images/yezy.jpg" />
                    </span>
                </div>
            </div>
            <div class="col-12 mt-4">
                <ul class="nav-links m-0 p-0">
                    <li><a href="#home" onClick={scrollToElement}>Home</a></li>
                    <hr class="line p-0 m-0" />
                    <li><a href="#about" onClick={scrollToElement}>About</a></li>
                    <hr class="line p-0 m-0" />
                    <li><a href="#skills-and-tools" onClick={scrollToElement}>Skills & Tools</a></li>
                    <hr class="line p-0 m-0" />
                    <li><a href="#projects" onClick={scrollToElement}>Projects</a></li>
                    <hr class="line p-0 m-0" />
                    <li><a href="#blogs" onClick={scrollToElement}>Blogs</a></li>
                    <hr class="line p-0 m-0" />
                    <li><a href="#contact" onClick={scrollToElement}>Contact</a></li>
                    <hr class="line p-0 m-0" />
                </ul>
            </div>

            <div class="col-12 mt-4">
                <ul class="row social-media m-0 p-0 pt-2">
                    <li class="col p-0 m-0"><a href="https://github.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-github"/></a></li>
                    <li class="col p-0 m-0"><a href="https://twitter.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-twitter"/></a></li>
                    <li class="col p-0 m-0"><a href="https://www.linkedin.com/in/yezileli-ilomo-57b76b140/" target="_blank" rel="noopener noreferrer"><span class="icon icon-linkedin"/></a></li>
                    <li class="col p-0 m-0"><a href="https://instagram.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-instagram"/></a></li>
                    <li class="col p-0 m-0"><a href="mailto:yezileliilomo@hotmail.com"><span class="icon icon-mail"/></a></li>
                </ul>
            </div>
        </div>
    );
}

export {SideBar}