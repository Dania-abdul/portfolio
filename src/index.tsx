import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next, { Resource, ResourceLanguage } from "i18next"


let resources: Resource = {
    "en": {
        "translation": {
            "_name": "Name",
            "_title": "",
            "_intro": "a developer with a taste of design",
            "_aboutText1": "Hi..I'am Dania, a front-end developer, I have passion for designing and creating websites with a knowledge in a lot of different technologies, currently based in ",
            "_aboutText2": " Rotterdam, Netherlands",
            "_aboutText3": " I like to create cool digital projects with creative teams",
            "_aboutText4": " Before doing Front-end development, and after my graduation in IT-Multimedia (BSC) I worked on honing my skills in variety of roles in the web industry starting with SEO, marketing and design",
            "_aboutText5": " I lived and worked in ",
            "_aboutText6":" Dubai (UAE) for 20years, I am originaly from the beautiful city ",
            "_aboutText7":" Irbed (Jordan)",
            "_aboutText8": "Starting from working as a trainee in marketing teams in e-commerce companies, I learned the basic knowledge in SEO and analytics. After my experience as SEO I started to focus my career more toward design",
            "_aboutText9": "I started with my design journey in a digital agency startup for cloud solution and progressive Web/App development, with a main focus on e-learning and leaning management systems, building variant applications for private and governmental sectors, taking a project from its early phase of intensive end-user and client research to building a full functional solution to serve the right purpose was so inspiring for me",
            "_aboutText10": " for the nature demand of working in a start-up company is being involved in variety of tasks as working on CSS and HTML which gave me the opportunity to practice it more and improve my development skills",
            "_aboutText12": " I ",
            "_aboutText11": " when I am not working, I love to try gastronomic restaurants with my friends, taking care of my plants, embroder, and foremost lose myself in the Internet",
            "_sec-title-1": "Education",
            "_sec-title-2": "Experience ",
            "_test" : "test test test tessss",
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_name": "Naam",
            "_title":"",
            "_intro": "Front-end Developer",
            "_aboutText1": "Hi, i am Dania, a front-end developer with a knowledge in a lot of different technologies, based in Rotterdam, Netherlands",
            "_aboutText2": " I like to create cool digital projects with creative teams",
            "_aboutText3": " ",
            "_sec-title-1": "Opleiding",
            "_sec-title-2": "Werkervaring",

        }
    }
}


i18next.init({
    lng: "en",
    fallbackLng: "en",
    ns: ["translations"],
    resources: resources,
    keySeparator: '.',
}, (err, t) => {
    ReactDOM.render(<App />, document.getElementById('root'))
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
