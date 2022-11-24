import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto mb-10 px-20'>
            <h2 className='my-5 text-center text-3xl text-blue-400'>Questions :</h2>
            <br />
            <div className='border rounded border-lime-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question: What are the different ways to manage a state in a React application ?</p>
                <p>Answer : There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state, URL state.
                    <br />
                    <br />
                    Local stage : Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    <br />
                    <br />
                    Global stage : Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    Sometimes state we think should be local might become global.
                    <br /><br />
                    Server State : Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    <br />
                    <br />
                    URL Stage : Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>

            </div>
            <br />

            <div className='border rounded border-red-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question: How does prototypical inheritance work? </p>
                <p>Answer : Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype.Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
                </p>
            </div>
            <br />

            <div className='border rounded border-amber-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question: What is a unit test? Why should we write unit tests?</p>
                <p>Answer : A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.A unit can be almost anything it to be -- a line of code, a method, or a class. Generally though, smaller is better. In computer programming, unit testing is a software testing method by which individual units of source code sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures are tested to determine whether they are fit for use.
                    <br />
                    <br />
                 It enable to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. So We should write unit test.
                </p>

            </div>
            <br />

            <div className='border rounded border-indigo-500 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question : What is React vs. Angular vs. Vue?</p>
                <p>Answer : <br />
                    React : React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript. Both React and React Native are ruling the industry and are widely used for mobile and web applications. React allows developers to develop quick, adaptive, and intuitive mobile and web applications. Also, it enables them to automate the designing process. By utilizing its features, ReactJs developers can build whatever they want without adhering to strict rules.
                    <br />
                    <br />
                    Angular : Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.  Angular includes:
                    A component-based framework for building scalable web applications, A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more,
                    A suite of developer tools to help you develop, build, test, and update your code. 
                    <br />
                    <br />
                    Vue : Vue.js is an open-source view model front end JavaScript framework for building user interfaces and single-page applications. Vue is basically developed for frontend development, so it has to deal with a lot of HTML, JavaScript, and CSS files. Vue.js facilitates users to extend HTML with HTML attributes called directives. Vue.js provides built-in directives and a lot of user-defined directives to enhance functionality to HTML applications.
                </p>

            </div>
            <br />
        </div>
    );
};

export default Blogs;
