import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next, { Resource, ResourceLanguage } from "i18next"


let resources: Resource = {
    "en": {
        "translation": {
            "_cvTitle": "Front-end developer",
            "_cvAboutText1":" Hello... I am Dania, a front-end developer ",
            "_cvAboutText2": " based in Rotterdam, Netherlands",
            "_cvAboutText3": "I enjoy designing and creating web applications, utilizing my knowledge of various technologies, and thrive in collaborative teams, working on innovative digital projects.",
            "_cvAboutText4": "My main expertise lies in building progressive and responsive web apps with JavaScript, CSS, and relevant frameworks such as React, Material-UI, and Bootstrap. ",
            "_cvAboutText5": "Prior to my career in front-end development, and after after graduating with a BSC degree in IT-Multimedia. I honed my skills through diverse roles in the web industry, including SEO, marketing, and design.",
            "_cvAboutText6": "Over the past two year, I have been working as a frontend developer at LeQuest, where I have contributed to various projects. I have played a role in improving frontend applications using JavaScript, CSS, and frameworks like React, Material-UI, and Bootstrap. Additionally, I have actively participated in implementing a scalable design system, enhancing internal workflows and documenting application architecture.",

            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_projects-home__text" :"This is a selection of projects I have worked in the past year, As a self-employed webdeveloper I had a chance to explore some web technologies and frameworks, aside meeting and working with creative clients.",
            
            "_category_development" : "Development",
            "_category_wordpress" : "Wordpress",
// ----------- dodici
            "_post_dodici_title": "Dodici Art Project Webshop",
            "_post_dodici_short_desc": "Art project Portfolio/webshop built with wordpress CMS and WooCommerce",
            "_post_dodici_long_desc" : "post long desc english",
            
            "_post_dodici_text_1_title" : "About",
            "_post_dodici_text_1" : "Dodici is a street art project, a website focused on the lead Artist Portfolio, Art work Gallery and a webshop for selling products and services",
            "_post_dodici_text_2" : "Dodiciartproject only started up recently, which meant there was freedom to decide everything in terms of colour and style. Also the artist provided me a cool set of illustrations, That made it a really nice project to work on",
            "_post_dodici_text_3_title" : "Why Wordpress",
            "_post_dodici_text_3" : "WordPress was quickly identified as the ideal solution because of the ability to allow client to add/edit their own content, while also creating our own theme, in additional to easy installation of",

            "_post_2_title": "Projects post building blocks",
            "_post_2_short_desc": "using different web technologies to build responsive and reusable components for generic posts",
            "_post_2_long_desc" : "post-2 modal long desc english",
           
            "_post_2_quote" : "If one really loves nature, one will find beauty everywhere.",
           
            "_post_2_text_1_title" : "Block of text",
            "_post_2_text_1" : "Most simply the inside pages of a book.  More precisely, the block of paper formed by the cut and stacked pages of a book.  Collectively, the bound pages of a book as distinct from its covers, boards, end papers, dust jacket or other accoutrements.",

            "_post_text_big" : "It’s a reminder that every technology we take for granted today was once forbidding and unfamiliar.",
// ----------- esse
            "_post_esse_title": "Esse Floral Studio",
            "_post_esse_short_desc": "Flower Studio Portfolio/webshop built with wordpress CMS and WooCommerce",
            "_post_esse_long_desc" : "post-2 modal long desc english",
           
            "_post_esse_text_1_title" : "About ",
            "_post_esse_text_1" : "Flower studio website and webshop for selling flower bouquets, plants and floral services",
// ----------- grandeomega
            "_post_go_title": "Grande Omega Education",
            "_post_go_short_desc": "GrandeOmega is a digital teaching assistant that improves the quality of teaching programming",
            "_post_go_long_desc" : "GrandeOmega is a web application that runs in the browser, and which facilitates learning programming within a higher education institution such as a college or a university",

            "_post_go_text_1_title" : "About Grande Omega",
            "_post_go_text_1" : "Flower studio website and webshop for selling flower bouquets, plants and floral services",
// ----------- dummy
            "_post_4_title" : "Dummy post",
            "_post_4_short_desc": "This post is for development testing purpose",

            "_post_card_tag_php" : "#PHP",
            "_post_card_tag_html" : "#HTML",
            "_post_card_tag_css" : "#SCSS",
            "_post_card_tag_react" : "#REACT",
            "_post_card_tag_js" : "#JS",
            "_post_card_tag_fluentui" : "#FluentUI",
            "_post_card_tag_wp" : "#WORDPRESS",
// -----------
            
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_cvTitle": "Front-end developer",
            "_cvAboutText1":" Hello... I am Dania, a front-end developer,",
            "_cvAboutText2": " based in Rotterdam, Netherlands",
            "_cvAboutText3": "I enjoy designing and creating web applications, utilizing my knowledge of various technologies, and thrive in collaborative teams, working on innovative digital projects.",
            "_cvAboutText4": "My main expertise lies in building progressive and responsive web apps with JavaScript, CSS, and relevant frameworks such as React, Material-UI, and Bootstrap. ",
            "_cvAboutText5": "Prior to my career in front-end development, and after after graduating with a BSC degree in IT-Multimedia. I honed my skills through diverse roles in the web industry, including SEO, marketing, and design.",
            "_cvAboutText6": "Over the past two year, I have been working as a frontend developer at LeQuest, where I have contributed to various projects. I have played a role in improving frontend applications using JavaScript, CSS, and frameworks like React, Material-UI, and Bootstrap. Additionally, I have actively participated in implementing a scalable design system, enhancing internal workflows and documenting application architecture.",

            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_projects-home__text" :"Dit is een selectie van projecten die ik het afgelopen jaar heb gewerkt. Als zelfstandige webdeveloper had ik de kans om enkele webtechnologieën en frameworks te verkennen, naast het ontmoeten en werken met creatieve klanten.",

            "_hello" : "helooo",
            "_category_development" : "Development",
            "_category_2" : "category-2 dutch",

            // ----------- dodici
            "_post_dodici_title": "Dodici Art Project Webwinkel",
            "_post_dodici_short_desc": "Portfolio / Webwinkel gebouwd met wordpress CMS en WooCommerce",
            "_post_dodici_long_desc" : "post long desc nl",
            
            "_post_dodici_text_1_title" : "Over",
            "_post_dodici_text_1" : "Dodici is een street art-project, een website gericht op de lead Artist Portfolio, Art Work Gallery en een webshop voor het verkopen van producten en diensten",
            "_post_dodici_text_2" : "Dodiciartproject is pas recent opgestart, wat betekende dat er vrijheid was om alles te beslissen qua kleur en stijl. Ook zorgde de kunstenaar voor een coole set illustraties, dat maakte het een heel leuk project om aan te werken",
            "_post_dodici_text_3_title" : "Waarom Wordpress",
            "_post_dodici_text_3" : "WordPress werd snel geïdentificeerd als de ideale oplossing vanwege de mogelijkheid om de klant in staat te stellen zijn eigen inhoud toe te voegen / te bewerken, terwijl we ook ons eigen thema konden maken, naast de eenvoudige installatie van",

            "_post_2_title": "Projecten posten building blocks",
            "_post_2_short_desc": "verschillende webtechnologieën gebruiken om responsieve en herbruikbare componenten voor algemene berichten te bouwen",
            "_post_2_long_desc" : "post-2 modal long desc english",
            
            "_post_2_quote" : "Als iemand echt van de natuur houdt, vindt men overal schoonheid.",
            
            "_post_2_text_1_title" : "Blok tekst",
            "_post_2_text_1" : "Gewoonlijk de binnenpagina's van een boek. Om precies te zijn, het blok papier gevormd door de gesneden en gestapelde pagina's van een boek. Gezamenlijk de gebonden pagina's van een boek in tegenstelling tot de omslagen, planken, schutbladen, stofomslag of andere uitrusting.",
           
            "_post_text_big" : "HET IS EEN HERINNERING DAT ELKE TECHNOLOGIE DIE WE VANDAAG TOEKENNEN EENMAAL VERBODEN EN ONBEKEND WAS.",
            // ----------- esse
            "_post_esse_title": "Esse Floral Studio",
            "_post_esse_short_desc": "Flower Studio Portfolio/webshop built with wordpress CMS and WooCommerce",

            "_post_esse_text_1_title" : "Over",
            "_post_esse_text_1" : "Bloemenatelier website en webshop voor verkoop van bloemboeketten, planten en bloemservices",
// ----------- grandeomega
            "_post_go_title": "Grande Omega Education",
            "_post_go_short_desc": "GrandeOmega is a digital teaching assistant that improves the quality of teaching programming",
            "_post_go_long_desc" : "GrandeOmega is a web application that runs in the browser, and which facilitates learning programming within a higher education institution such as a college or a university",

            "_post_go_text_1_title" : "About Grande Omega",
            "_post_go_text_1" : "Flower studio website and webshop for selling flower bouquets, plants and floral services",


// ----------- grandeomega
            "_post_4_title" : "Pop post",
            "_post_4_short_desc": "Dit bericht is bedoeld voor het testen van ontwikkeling",
            "_post_4_quote" : "Als iemand echt van de natuur houdt, vindt men overal schoonheid.",

            "_post_card_tag_php" : "#PHP",
            "_post_card_tag_html" : "#HTML",
            "_post_card_tag_css" : "#SCSS",
            "_post_card_tag_react" : "#REACT",
            "_post_card_tag_js" : "#JS",
            "_post_card_tag_wp" : "#WORDPRESS",
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
