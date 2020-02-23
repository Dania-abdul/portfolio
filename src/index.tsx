import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next, { Resource, ResourceLanguage } from "i18next"


let resources: Resource = {
    "en": {
        "translation": {
            "_cvTitle": "a developer with a taste of design",
            "_cvAboutText1":" Hello... I am Dania, a front-end developer. I have a passion for designing and creating websites with a knowledge of different technologies. I am currently based in ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " I like to create cool digital projects with creative teams. My main focus is HTML, CSS, JS, and building progressive web apps",
            "_cvAboutText4": " Before doing front-end development and after my graduation in IT-Multimedia (BSC) I worked on honing my skills in a variety of roles in the web industry starting with SEO, marketing and design",
            "_cvAboutText5": " I am originally from the beautiful city ",
            "_cvAboutText6": "  Irbed (Jordan). I lived and worked in ",
            "_cvAboutText7": " Dubai (UAE) before moving to the Netherland",
            "_cvAboutText8": " Starting from working as a trainee in marketing teams in e-commerce companies, I learned the basic knowledge in SEO and analytics. After my experience with SEO I started to focus my career more toward design",
            "_cvAboutText9": " I started with my design journey in a digital agency startup for cloud solutions and progressive Web/App development, with a main focus on e-learning and leaning management systems, building various applications for private and governmental sectors, taking a project from its early phase of intensive end-user and client research to building a full functional solution to serve the right purpose. This was so inspiring for me",
            "_cvAboutText10": " Working in a start-up company brought me a variety of tasks such as working on CSS and HTML. It gave me the opportunity to practice more and more and improve my development skills",
            "_cvAboutText11": " When I am not at work, I love to try gastronomic restaurants with my friends, taking care of my plants, embroider, and foremost lose myself in the Internet",
            "_cvAboutText12": " NOW--- LOOKING FOR A FULL/PART TIME AS FRONTEND DEVELOPER",
            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ",

            "_blog-home__text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam",
            
            "_post-title-1": "post-1-title-english",

            "_home-text__text":"There is a lot to be done..in the meantime you can visit my blog",
            "_home-text__link": "Here",

            "post-title-1": "1 - Some title in english",
            "post_modal_1": "1 - Some modal text in english",
            "post_description_1": "1 -Some post description text in english",

            "post-title-2": "2 - Some title in english",
            "post_modal_2": "2 - Some modal text in english",
            "post_description_2": "2 - Some post description text in english"

            
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_cvTitle": "a developer with a taste of design",
            "_cvAboutText1": " Hooi... Mijn naam is Dania. Ik ben front-end-ontwikkelaar. Ik ben helemaal weg van het ontwerpen en bouwen van websites en heb kennis van verschillende technologieën. Ik woon momenteel ",
            "_cvAboutText2": " Rotterdam, Netherlands",
            "_cvAboutText3": " Ik houd ervan hippe, digitale projecten te maken in creatieve teams. Ik richt me vooral op HTML, CSS, JS en het bouwen van Progressive Web Apps.",
            "_cvAboutText4": " Voordat ik me bezighield met frond-end-ontwikkeling en nadat ik was afgestudeerd in IT-Multimedia (met BSC-bachelordiploma) werkte ik aan het verder ontwikkelen van mijn vaardigheden in diverse rollen in de webindustrie, waaronder SEO (zoekmachineoptimalisatie), marketing en design",
            "_cvAboutText5": " Ik kom oorspronkelijk uit de mooie stad ",
            "_cvAboutText6":" Irbid in Jordanië. Voordat ik naar Nederland verhuisde, woonde en werkte ik in ",
            "_cvAboutText7":" Dubai in de Verenigde Arabische Emiraten (UAE)",
            "_cvAboutText8": "Ik begon als stagiaire in marketingteams van e-commerce-bedrijven en verkreeg daar de basiskennis voor SEO en data-analyse (analytics). Na ervaring te hebben opgedaan op het gebied van SEO, is mijn loopbaan meer richting het ontwerpen gegaan",
            "_cvAboutText9": "Mijn ontdekkingsreis op het gebied van ontwerpen begon in een startup die digitale diensten leverde (een digital agency) waaronder cloudoplossingen en PWA's. De meeste aandacht ging uit naar e-learning en LMS-programma's. We bouwden diverse applicaties voor zowel de private als de overheidssector. We waren betrokken bij een project vanaf de allereerste fase, met intensief onderzoek naar klant en eindgebruiker, en bouwden een volledig werkende oplossing die aan het juiste doel beantwoordde. Dat vond ik heel inspirerend",
            "_cvAboutText10": " Het werken in een startup bracht met zich mee dat ik een divers takenpakket had, waaronder werken met CSS en HTML. Het bood mij de gelegenheid om meer en meer ervaring op te doen en mijn programmeervaardigheden te verbeteren",
            "_cvAboutText11": " Als ik niet aan het werk ben, houd ik ervan om met mijn vrienden culinair hoogstaande restaurants uit te proberen, voor mijn planten te zorgen, te borduren, maar vooral op te gaan in het internet",
            "_cvAboutText12": " NOW--- LOOKING FOR A FULL/PART TIME AS FRONTEND DEVELOPER",
            "_cvSecTitle-1": "Education",
            "_cvSecTitle-2": "Experience ", 

            "_blog-home__text" :"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, li tot Europa usa li sam",

            "_post-title-1": "post-1-title-dutch",

            "_home-text__text":"Er is veel te doen..bezoek ondertussen mijn blog",
            "_home-text__link": "Hier",

            
            "post-title-1": "1 - Some title in dutch",
            "post_modal_1": "1 - Some modal text in dutch",
            "post_description_1": "1 -Some post description text in dutch",

            "post-title-2": "2 - Some title in dutch",
            "post_modal_2": "2 - Some modal text in dutch",
            "post_description_2": "2 - Some post description text in dutch"

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
