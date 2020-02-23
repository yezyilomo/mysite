import React, { useState } from 'react';
import {SideBar, Home, About, Projects, Blogs, Contact, SkillsAndTools} from '.';
import './App.scss';


function App() {
    const [display, setDisplay] = useState(false);
    let toggleSideBar = (e) => {
        setDisplay(!display);
    }

    let getSideBarDisplayClass = () => {
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
                <span class="icon icon-menu" onClick={toggleSideBar} />
            </div>
            <SideBar hideSideBar={hideSideBar} setting={`side-bar fixed-top col-10 col-lg-3 ${getSideBarDisplayClass()}`}/>
            <div class="col-3 d-none d-lg-block"></div>
            <div class="contents col-12 col-lg-9 p-0 m-0" onClick={e=>setDisplay(false)}>
                <Home/>
                <About/>
                <SkillsAndTools/>
                <Projects/>
                <Blogs/>
                <Contact/>
            </div>
        </div>
    );
}


export default App;
