 import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import Image from './assets/images/myPhoto_1.jpg'

export type HomeState = {
    counter : number
}

export type HomeProps = {
}

export class HomeComponent extends React.Component <HomeProps, HomeState> {
    constructor(props : HomeProps) {
        super(props);
        this.state = {
            counter : 0
        }
    }
    increase_counter(){
        this.setState(s_old => ({...s_old, counter : s_old.counter + 1}))
        // this.setState({...this.state, counter : this.state.counter + 1})
    }
    render(){
        return <>
                <div className="home-page">
                    <div className="home-page__inner">
                        <div className="home-text home-container-m">
                            <div className="home-text__inner row container-fluid">
                                <div className="col-md-4">
                                    <h3 className="home-text__title"> {i18next.t("_home-text__title")}</h3>
                                </div>
                                <div className="col-md-8">
                                    <p className="home-text__text">
                                        {i18next.t("_home-text__text")} 
                                    </p>
                                    <a href="./blog" className="home-text__link">{i18next.t("_home-text__link")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="code-block home-container-m">
                            <div className="code-block__inner">
                                <div className="code-line">
                                    <div className="comment">{'<About/>'}</div>
                                </div>
                                <div className="code-line">
                                    <p className="method">class</p> 
                                    <span className="propname"> Dania Abdul</span> 
                                </div>
                                <div className="code-line">
                                    <div className="dots">..</div>
                                    <div className="comment">// a  frontend developer  </div>
                                </div>
                                <div className="code-line">
                                    <div className="dots">..</div>
                                    <div className="comment">// able to write great (S)CSS/HTML , and React, TypeScript.</div>
                                </div>
                                <div className="code-line">
                                    <div className="dots">..</div>
                                    <div className="method">constructor</div><p className="symbol">() {'{'}</p>
                                </div>
                                <div className="code-line">
                                    <div className="dots">....</div>
                                    <div className="scope">this</div><p className="symbol">.</p><span className="prop2">name</span><span className="scope"> =</span><span className="string"> ' Dania Abdul '</span>
                                </div>
                                <div className="code-line">
                                    <div className="dots">····</div>
                                    <div className="scope">this</div><p className="symbol">.</p><span className="prop2">dayOfBirthTimestamp</span><span className="scope"> =</span><span className="number"> 29081991</span>
                                </div>
                                <div className="code-line">
                                    <div className="dots">····</div>
                                    <div className="scope">this</div><p className="symbol">.</p><span className="prop2">email</span><span className="scope"> =</span><span className="number"> ' dbashayreh@gmail.com '</span>
                                </div>
                                <div className="code-line">
                                    <p className="symbol">{'}'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    }
}
