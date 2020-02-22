import React from 'react';
import {Link} from 'react-router-dom';
import {ToggleLightButton} from '.';
import './SideBar.scss';


function SideBar(props) {
    return (
        <div class={`${props.setting}`}>
            <ToggleLightButton/>
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
                    <li><a href="https://github.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-github"/></a></li>
                    <li><a href="https://twitter.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-twitter"/></a></li>
                    <li><a href="https://www.linkedin.com/in/yezileli-ilomo-57b76b140/" target="_blank" rel="noopener noreferrer"><span class="icon icon-linkedin"/></a></li>
                    <li><a href="https://instagram.com/yezyilomo" target="_blank" rel="noopener noreferrer"><span class="icon icon-instagram"/></a></li>
                    <li><a href="mailto:yezileliilomo@hotmail.com"><span class="icon icon-mail-bold"/></a></li>
                </ul>
            </div>
        </div>
    );
}

export {SideBar}