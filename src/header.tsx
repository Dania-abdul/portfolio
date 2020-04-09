import React from "react";

export const Header = (language: string, update_language:(new_language:string) => void) => (
    
    <div className="header">
        <div className="header__inner row">
            <div className="col"> </div>
            <div className="header__logo col">
                <a href="/portfolio" className="header__name header__name--black header__link" >Dania Abdul.</a>
            </div>
            <div className="col">
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