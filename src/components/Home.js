import React from 'react';
import './Home.scss';


function Home(props){
    const fonts = ['Montez', 'Sacramento', 'Grand Hotel'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const fontStyle = {
        "font-family": `'${randomFont}', cursive`
    }
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 home">
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

export {Home}