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
            "_intro": "Lorem ipsum dolor sit amet",
            "_about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Verdiende sultanaat al wellesley ad inzamelen. Terreinen japansche van per hun zin belasting opbrengst daaronder. Al eenig staat en hitte wijze. Tot ten rijk bij kost telt. Hellingen er nu loodrecht zuidgrens ad aanvoeren. Waardoor engeland ze nadering ik planters tusschen af gewonnen in. Zoo ook tronoh kosten goeden. Weerstand en brandhout in perzische vermijden ad gebrachte op kleederen. Even ziet bak per daar hen. ",
            "_sec-title-1": "Education",
            "_sec-title-2": "Work",
        }
    } as ResourceLanguage,
    "nl": {
        "translation": {
            "_name": "Naam",
            "_title":"",
            "_intro": "Verdiende sultanaat al wellesley",
            "_about": "Verdiende sultanaat al wellesley ad inzamelen. Terreinen japansche van per hun zin belasting opbrengst daaronder. Al eenig staat en hitte wijze. Tot ten rijk bij kost telt. Hellingen er nu loodrecht zuidgrens ad aanvoeren. Waardoor engeland ze nadering ik planters tusschen af gewonnen in. Zoo ook tronoh kosten goeden. Weerstand en brandhout in perzische vermijden ad gebrachte op kleederen. Even ziet bak per daar hen.", 
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
