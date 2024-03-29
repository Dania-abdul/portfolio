 import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { data} from '../projects-data';


import Image1 from '../assets/images/intro-photo.jpg';
// import Image3 from './assets/images/intro-photo.jpg' ;


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
                    <div className="home-intro">
                        <div className="home-intro__content">
                            <div className="home-intro__content-inner">
                                <p className="intro__text">
                                    I'm a Front-end developer, currently based in Rotterdam, Netherlands <br/>
                                    I like to design and code beautifully simple things, using different web technologies, and I love what I do.                                </p>
                                <p className="intro__text">
                                    Besides development...<br/>
                                    I care of many plants, I read, embroider, and enjoy life
                                </p>
                                <ul className="home-intro__list list-social">
                                    <li><a href="https://github.com/Dania-abdul" className="list-social__item">Git</a></li>
                                    <li><a href="https://www.linkedin.com/in/dania-abdul/" className="list-social__item">Ln</a></li>
                                    <li><a href="https://www.behance.net/DaniaAb" className="ilist-social__item">Be</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="home-intro__visual">
                            <img className="home-intro__img" aria-label="impressive picture of me" alt="Responsive image" src={Image1} data-lazy-type="image" data-src="//via.placeholder.com/350x150" />
                            <span>Amsterdam 2018</span>
                        </div>

                    </div>
                        <div className="home-about">
                            <header className="home-sec-header">
                                <span>ABOUT</span>
                            </header>
                            <div className="code-block">
                                <div className="code-block__inner home-container-m">
                                    <div className="code-line">
                                        <div className="comment">{'<About/>'}</div>
                                    </div>
                                    <div className="code-line">
                                        <p className="control">export </p>
                                        <p className="method">class</p> 
                                        <span className="propname"> Dania Abdul</span> 
                                    </div>
                                    <div className="code-line">
                                        <div className="dots">..</div>
                                        <div className="comment">//  frontend developer  </div>
                                    </div>
                                    {/* <div className="code-line">
                                        <div className="dots">..</div>
                                        <div className="comment">// able to write great (S)CSS/HTML </div>
                                    </div> */}
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
                                        <div className="scope">this</div><p className="symbol">.</p><span className="prop2">email</span><span className="scope"> =</span><span className="number"> ' dania.abdul91@gmail.com '</span>
                                    </div>
                                    <div className="code-line">
                                        <div className="dots">..</div>
                                        <p className="symbol">{'}'}</p> 
                                    </div>
                                    <div className="code-line">
                                         <div className="dots">..</div>
                                         <span className="propname"> skills</span><p className="symbol">() {'{'}</p>
                                    </div>
                                    <div className="code-line">
                                        <div className="dots">····</div>
                                        <p className="control">return</p><p className="symbol"> [</p> <span className="string"> 'JS/React',  'ECS' , 'Design Systems', 'HTML5/CSS4/JS' , 
                                        'Bootstrap/Material UI/Fluent UI' ,'styled-component' , 'Webpack/Gulp' , 'npm/yarn' , 'Github/gitlab' , 'W3C/ARIA/WCAG' , 
                                        'Wordpress ', 'Photoshop/Illustrator', 'Sketch/Figma/Adobe XD' , 'UI/UX', 'Email templates'</span> 
                                        <p className="symbol"> ]</p>
                                        
                                    </div>
                                    <div className="code-line">
                                        <div className="dots">..</div>
                                        <p className="symbol"> {'}'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="home-projects">
                            <header className="home-sec-header">
                                <span>PROJECTS</span>
                            </header>
                            <div className="home-projects__inner">
                                {
                                data.map(card => <div className="home-projects__post">
                                    <a href={card.url}>
                                        <div className="home-projects__visual">
                                            <img className="home-projects__img" src={card.image_url} alt=""/>
                                        </div>
                                        <div className="home-projects__content">
                                            <h3 className="home-projects__title ">{i18next.t(card.post_title)}</h3>
                                            <p className="home-projects__text">{i18next.t(card.post_short_description)}</p>
                                            <ul className="home-projects__list tag__list">
                                                <li className="tag__item">{i18next.t(card.post_card_tag_1)}</li>
                                                <li className="tag__item">{i18next.t(card.post_card_tag_2)}</li>
                                                <li className="tag__item">{i18next.t(card.post_card_tag_3)}</li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>)
                                }
{/*                                 
                                <div className="home-projects__post">
                                    <a href="">
                                        <div className="home-projects__visual">
                                            <img className="home-projects__img" src={Image2} alt=""/>
                                        </div>
                                        <div className="home-projects__content">
                                            <h3 className="home-projects__title ">Mary Jhun - Artist</h3>
                                            <p className="home-projects__text">Mary Jhun is a Philippine-born artist who has become a staple of the vibrant San Diego arts scene.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="home-projects__post">
                                    <a href="">
                                        <div className="home-projects__visual">
                                            <img className="home-projects__img" src={Image2} alt=""/>
                                        </div>
                                        <div className="home-projects__content">
                                            <h3 className="home-projects__title ">Mary Jhun - Artist</h3>
                                            <p className="home-projects__text">Mary Jhun is a Philippine-born artist who has become a staple of the vibrant San Diego arts scene.</p>
                                        </div>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
    }
}
