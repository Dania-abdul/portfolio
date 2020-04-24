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
            "_cvAboutText1":" Hello... I am Dania, a front-end developer. I have a passion for designing and creating websites with a knowledge of different technologies. I am currently based in ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " I like to create cool digital projects with creative teams. My main focus is HTML, CSS, JS, and building progressive web apps",
            "_cvAboutText4": " Before doing front-end development and after my graduation in IT-Multimedia (BSC) I worked on honing my skills in a variety of roles in the web industry starting with SEO, marketing and design",
            "_cvAboutText5": " I am originally from the beautiful city ",
            "_cvAboutText6": "  Irbed (Jordan). I lived and worked in ",
            "_cvAboutText7": " Dubai (UAE) before moving to the Netherland",
            "_cvAboutText8": " Starting from working as a trainee in marketing teams in e-commerce companies, I learned the basic knowledge in SEO and analytics. After my experience with SEO I started to focus my career more toward design",
            "_cvAboutText9": " I started with my design journey in a digital agency startup for cloud solutions and progressive Web/App development, with a main focus on e-learning and leaning management systems. In this context I worked on various applications for private and governmental sectors, and helped transitioning projects from their early phase of intensive end-user and client research into fully-functional solutions to serve the right purpose. This was so inspiring for me",
            "_cvAboutText10": " Working in a start-up company brought me a variety of tasks such as working on CSS and HTML. It gave me the opportunity to practice more and more and improve my development skills",
            "_cvAboutText11": "I moved to the Netherlands to start my development career in Hoppinger BV and specialize in front-end development. This gave me the opportunity to sharpen my technical skills to develop semantic well-structured components that can be used by the client to build webpages. I learned to work on code quality and fast prototyping though the use of styleguides.",
            "_cvAboutText12": " Besides work I've always been curious person, I love to travel and see the world. I find comfort in spending quality time with my friends and people in general, I enjoy taking care of my plants, embroider, and foremost lose myself in the Internet.",
            "_cvAboutText13": " NOW--- Scaling up my technical skills (CSS, TypeScript, React), Open for a full/part time as frontend developer",
            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_projects-home__text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam",
            
            "_category_1" : "category-1",
            "_category_2" : "category-2",

            "_post_1_title": "post-1-title-english",
            "_post_1_card_desc": "post_1_card_desc",
            "_post_1_modal_desc" : "post-1 modal long desc english",

            
            "_post_2_title": "Technologies I used to build my portfolio, Technologies I used",
            "_post_2_card_desc": "using different web technologies to build a full responsive website, using different web technologies to build a full responsive website",
            "_post_2_modal_desc" : "post-2 modal long desc english",
            
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_cvTitle": "a Front-end developer with a taste of design",
            "_cvAboutText1": " Hooi... Mijn naam is Dania. Ik ben Frontend developer. Ik ben helemaal weg van het ontwerpen en bouwen van websites en heb kennis van verschillende technologieën. Ik woon momenteel ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " Ik houd ervan hippe, digitale projecten te maken in creatieve teams. Ik richt me vooral op HTML, CSS, JS en het bouwen van Progressive Web Apps.",
            "_cvAboutText4": " Voordat ik me bezighield met frond-end-ontwikkeling en nadat ik was afgestudeerd in IT-Multimedia (met BSC-bachelordiploma) werkte ik aan het verder ontwikkelen van mijn vaardigheden in diverse rollen in de webindustrie, waaronder SEO (zoekmachineoptimalisatie), marketing en design",
            "_cvAboutText5": " Ik kom oorspronkelijk uit de mooie stad ",
            "_cvAboutText6":" Irbid in Jordanië. Voordat ik naar Nederland verhuisde, woonde en werkte ik in ",
            "_cvAboutText7":" Dubai in de Verenigde Arabische Emiraten (UAE)",
            "_cvAboutText8": "Ik begon als stagiaire in marketingteams van e-commerce-bedrijven en verkreeg daar de basiskennis voor SEO en data-analyse (analytics). Na ervaring te hebben opgedaan op het gebied van SEO, is mijn loopbaan meer richting het ontwerpen gegaan",
            "_cvAboutText9": "Mijn ontdekkingsreis op het gebied van ontwerpen begon in een startup die digitale diensten leverde (een digital agency) waaronder cloudoplossingen en PWA's. De meeste aandacht ging uit naar e-learning en LMS-programma's. We bouwden diverse applicaties voor zowel de private als de overheidssector. We waren betrokken bij een project vanaf de allereerste fase, met intensief onderzoek naar klant en eindgebruiker, en bouwden een volledig werkende oplossing die aan het juiste doel beantwoordde. Dat vond ik heel inspirerend",
            "_cvAboutText10": " Het werken in een startup bracht met zich mee dat ik een divers takenpakket had, waaronder werken met CSS en HTML. Het bood mij de gelegenheid om meer en meer ervaring op te doen en mijn programmeervaardigheden te verbeteren",
            "_cvAboutText12": " Als ik niet aan het werk ben, houd ik ervan om met mijn vrienden culinair hoogstaande restaurants uit te proberen, voor mijn planten te zorgen, te borduren, maar vooral op te gaan in het internet",
            "_cvAboutText13": " NOW--- Scaling up my technical skills (CSS, TypeScript, React), Open for a full/part time as frontend developer",
            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ", 

            "_projects-home__text" :"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, li tot Europa usa li sam",

            "_hello" : "helooo",
            "_category_1" : "category-1 dutch",
            "_category_2" : "category-2 dutch",

            "_post_1_title": "post-2-title-dutch",
            "_post_1_card_desc": "post-2 short desc Dutch",
            "_post_1_modal_desc" : "post-2 modal long desc Dutch",
            
            "_post_2_title": "Technologies I used to build my portfolio/NL",
            "_post_2_card_desc": "using different web technologies to build a full responsive website/NL",
            "_post_2_modal_desc" : "post-2 modal long desc dutch",

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
