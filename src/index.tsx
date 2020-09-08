import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next, { Resource, ResourceLanguage } from "i18next"


let resources: Resource = {
    "en": {
        "translation": {
            "_cvTitle": "a Front-end developer with a taste of design",
            "_cvAboutText1":" Hello... I am Dania, a Junior front-end developer. I have a passion for designing and creating websites with a knowledge of different technologies. I am currently based in ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " I like to create cool digital projects with creative teams. My main focus is HTML, CSS, JS, and building progressive web apps",
            "_cvAboutText4": " Before doing front-end development and after my graduation in IT-Multimedia (BSC) I worked on honing my skills in a variety of roles in the web industry starting with SEO, marketing and design",
            "_cvAboutText5": " I am originally from the beautiful city ",
            "_cvAboutText6": "  Irbed (Jordan). I lived and worked in ",
            "_cvAboutText7": " Dubai (UAE) before moving to the Netherland",
            "_cvAboutText8": "I moved to the Netherlands to start my development career in Hoppinger BV and specialize in front-end development. This gave me the opportunity to sharpen my technical skills to develop semantic well-structured components that can be used by the client to build webpages. I learned to work on code quality and fast prototyping though the use of styleguides.",
            "_cvAboutText9": "For the last year I've been scalling up my frondend technical skills; Javascript, React, Fabric Ul, Design systems, wordpress theme development, wordpress e-commerce",
            "_cvAboutText10": "I'm quietly confident, naturally curious, and perpetually working on improving my technical skills and design knowledge one at a time.",
            "_cvAboutText11": " NOW--- ",
            "_cvAboutText12": " Self-employed webdeveloper - Freelance",
            "_cvAboutText13": " Scaling up my technical skills (CSS, TypeScript, React), Open for a full/part time as frontend developer",
            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_projects-home__text" :"This is a selection of projects I have worked in the past year, As a self-employed webdeveloper I had a chance to explore some web technologies and frameworks, aside meeting and working with reative clients.",
            
            "_category_1" : "category-1",
            "_category_2" : "category-2",

            "_post_1_title": "Dodici Art Project Webshop",
            "_post_1_card_desc": "Portfolio/webshop built with wordpress CMS and WooCommerce",
            "_post_1_modal_desc" : "post-1 modal long desc english",
            
            "_post_2_title": "POST__2",
            "_post_2_card_desc": "using different web technologies to build a full responsive website, using different web technologies to build a full responsive website",
            "_post_2_modal_desc" : "post-2 modal long desc english",

            "_post_card_tag_php" : "#PHP",
            "_post_card_tag_html" : "#HTML",
            "_post_card_tag_css" : "#SCSS",
            "_post_card_tag_react" : "#REACT",
            "_post_card_tag_js" : "#JS"


            
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_cvTitle": "a Front-end developer with a taste of design",
            "_cvAboutText1":" Hello... I am Dania, a Junior front-end developer. I have a passion for designing and creating websites with a knowledge of different technologies. I am currently based in ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " I like to create cool digital projects with creative teams. My main focus is HTML, CSS, JS, and building progressive web apps",
            "_cvAboutText4": " Before doing front-end development and after my graduation in IT-Multimedia (BSC) I worked on honing my skills in a variety of roles in the web industry starting with SEO, marketing and design",
            "_cvAboutText5": " I am originally from the beautiful city ",
            "_cvAboutText6": "  Irbed (Jordan). I lived and worked in ",
            "_cvAboutText7": " Dubai (UAE) before moving to the Netherland",
            "_cvAboutText8": "I moved to the Netherlands to start my development career in Hoppinger BV and specialize in front-end development. This gave me the opportunity to sharpen my technical skills to develop semantic well-structured components that can be used by the client to build webpages. I learned to work on code quality and fast prototyping though the use of styleguides.",
            "_cvAboutText9": "For the last year I've been scalling up my frondend technical skills; Javascript, React, Fabric Ul, Design systems, wordpress theme development, wordpress e-commerce",
            "_cvAboutText10": "I'm quietly confident, naturally curious, and perpetually working on improving my technical skills and design knowledge one at a time.",
            "_cvAboutText11": " NOW--- ",
            "_cvAboutText12": " Self-employed webdeveloper - Freelance",
            "_cvAboutText13": " Scaling up my technical skills (CSS, TypeScript, React), Open for a full/part time as frontend developer",

            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_projects-home__text" :"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, li tot Europa usa li sam",

            "_hello" : "helooo",
            "_category_1" : "category-1 dutch",
            "_category_2" : "category-2 dutch",

            "_post_1_title": "Dodici Art Project Webshop",
            "_post_1_card_desc": "Portfolio/webshop built with wordpress CMS and WooCommerce",
            "_post_1_modal_desc" : "post-1 modal long desc english",
            
            "_post_2_title": "POST__2",
            "_post_2_card_desc": "using different web technologies to build a full responsive website, using different web technologies to build a full responsive website",
            "_post_2_modal_desc" : "post-2 modal long desc english",

            "_post_card_tag_php" : "#PHP",
            "_post_card_tag_html" : "#HTML",
            "_post_card_tag_css" : "#SCSS",
            "_post_card_tag_react" : "#REACT",
            "_post_card_tag_js" : "#JS"



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
