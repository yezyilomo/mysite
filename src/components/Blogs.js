import React from 'react';
import './Blogs.scss';


function BlogDetails(props){
    return (
        <a href={props.blog.url} class="window-as-link" target="_blank" rel="noopener noreferrer">
            <div class="col-12 m-0 p-0 window">
                <div class="row col-12 m-0 window-header">
                    <div class="col-10 p-0 m-0">
                        <span class="icon icon-quill"/> {props.blog.title}
                    </div>
                    <div class="col-2 p-0 m-0 text-right">
                        <span class="dot-1-container"><div class="window-dot dot-1"></div></span>
                        <span class="dot-2-container"><div class="window-dot dot-2"></div></span>
                    </div>
                </div>
                <div class="col-12 m-0 window-body">
                    {props.blog.description} &nbsp;&nbsp;
                    <a href={props.blog.url} target="_blank" rel="noopener noreferrer"> Read more →</a>
                </div>
            </div>
        </a>
    );
}

function Blogs(props){
    let blogs = [
        {
            title: "Global state management in React with global variables and hooks.", 
            description: "The concept of managing states comes from the concept of variables which is very basic in all programming languages. In managing state we have local and global states which corresponds to local and global variables in the concept of variables. In both concepts the aim of global(state & variable) is to be able to share it among entities which might be functions ...",
            url: "https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c"
        },
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
        <div class="col-12 px-3 px-lg-5 pt-4 pb-4 blogs" id="blogs">
            <h1 class="section-title">My Blogs</h1>
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


export {Blogs}