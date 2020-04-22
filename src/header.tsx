import React from "react";

export const Header = (language: string, 
                       is_dark:boolean,
                       update_language:(new_language:string) => void,
                       toggle_theme:() => void) => (
    
    <div className="header container">
        <div className="header__inner">
            <div className="header__logo header__name">
                <a href="/portfolio" className="header__link" >Dania Abdul.</a>
            </div>
            <div className="header__nav">
                <div className="header__utilities"> 
                    <label className="switch">
                        <input type="checkbox" onChange={toggle_theme} defaultChecked={!is_dark}/>
                        <span className="slider round" />
                    </label>
                </div>
                <ul className="header__nav-list nav">
                    <li className="nav-list__item language-switch ">
                        <button className={`language-switch__button--nl${language.toLowerCase() == "nl" ? "--active" : ""}`} onClick={() => update_language('nl')}>NL</button><span>|</span>
                        <button className={`language-switch__button--en${language.toLowerCase() == "en" ? "--active" : ""}`} onClick={() => update_language('en')}>EN</button>
                    </li>
                    <li className="nav-list__item">
                        <button className="nav-list__print" onClick={() => window.print()}>
                            <svg className="icon--save" width="20px" height="20px">
                                <use xlinkHref="#icon--save" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
) 