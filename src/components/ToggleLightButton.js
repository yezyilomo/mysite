import React, { useState, useEffect } from 'react';
import './ToggleLightButton.scss';


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function setThemeCookie(theme = false) {
    let intStates = new Map();
    intStates.set(false, 0);
    intStates.set(true, 1);
    theme = intStates.get(theme);
    var d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000); // in milliseconds
    document.cookie = `theme=${theme};path=/;expires=${d.toGMTString()};SameSite=Lax;`;
}

function getThemeCookie() {
    let theme = getCookie('theme');
    if (theme === null) {
        return null;
    }
    theme = parseInt(theme, 10);
    theme = Boolean(theme);
    return theme;
}


function ToggleLightButton(props) {
    let themeStates = new Map();
    themeStates.set(false, { bulbClassName: 'light-on', bodyClassName: 'app-light'});
    themeStates.set(true, { bulbClassName: 'light-off', bodyClassName: 'app-dark'});

    let savedTheme = getThemeCookie();
    if (savedTheme === null) {
        setThemeCookie(false);
        savedTheme = false;
    }

    let [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        if(theme){
            metaThemeColor.setAttribute("content", "rgb(0, 132, 137)");
        }
        else{
            metaThemeColor.setAttribute("content", "white)");
        }
        let container = document.getElementsByTagName("body")[0];
        container.className = themeStates.get(theme).bodyClassName;
    }, [theme]);

    let handleButtonToggle = (event) => {
        setThemeCookie(!theme);
        setTheme(!theme);
    }

    return (
        <div class="toggle-light-button" onClick={handleButtonToggle}>
            <div class={`string string-${themeStates.get(theme).bulbClassName}`}/>
            <span class={`icon icon-idea ${themeStates.get(theme).bulbClassName}`}/>
        </div>
    );
}

export {ToggleLightButton}