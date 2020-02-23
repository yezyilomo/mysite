import React from 'react';
import './Contact.scss';


function Contact(props){
    return (
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 contact" id="contact">
            <h1 class="section-title">Get in Touch</h1>

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
                        <div class="col-1 label-icon"><span class="icon icon-linkedin"/></div>
                        <div class="col-3 label">LinkedIn:</div>
                        <div class="col"><a href="https://www.linkedin.com/in/yezileli-ilomo-57b76b140/" target="_blank" rel="noopener noreferrer">@yezileli-ilomo</a></div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-twitter"/></div>
                        <div class="col-3 label">Twitter:</div>
                        <div class="col"><a href="https://twitter.com/yezyilomo" target="_blank" rel="noopener noreferrer">@yezyilomo</a></div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-github"/></div>
                        <div class="col-3 label">GitHub:</div>
                        <div class="col"><a href="https://github.com/yezyilomo" target="_blank" rel="noopener noreferrer">@yezyilomo</a></div>
                    </div>
                    <div class="row m-0 p-0 mt-4">
                        <div class="col-1 label-icon"><span class="icon icon-instagram"/></div>
                        <div class="col-3 label">Instagram:</div>
                        <div class="col"><a href="https://instagram.com/yezyilomo" target="_blank" rel="noopener noreferrer">@yezyilomo</a></div>
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

export {Contact}