import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import Image from './assets/images/myPhoto_1.jpg';
import Image1 from './assets/images/photo-bw.png';

export type CvState = {
    counter : number
}

export type CvProps = {
}

export class CvComponent extends React.Component <CvProps, CvState> {
    constructor(props : CvProps) {
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
            <section className="cv-about">
         	        <div className="cv-about__content-top">
                         <div className="cv-about__content-top-inner">
                             <h1 className="cv-about__header">{i18next.t("_cvTitle")}</h1> 
                             <p className="cv-about__label">’s-Gravenland, North Holland Province, Netherlands </p> 
                             <p className="cv-about__label">29.08.1991</p>
                             <p className="cv-about__label">dania.abdul91@gmail.com</p>
                             <p className="cv-about__label print--comment">online version: <a href="https://dania-abdul.github.io/portfolio/cv" className="link">https://dania-abdul.github.io/portfolio/cv</a></p>
                         </div>
                         {/* <img className="cv-aboutimg img-fluid" aria-label="impressive picture of me" alt="Responsive image" src="//via.placeholder.com/200x200" data-lazy-type="image"/> */}
                         <img className="cv-about__img img-fluid" aria-label="impressive picture of me" alt="Responsive image" src={Image1} data-lazy-type="image" data-src="//via.placeholder.com/350x150" />

                     </div>
                    <p className="cv-about__text styled">{i18next.t("_cvAboutText1")}</p>
                    <p className="cv-about__text styled--city">{i18next.t("_cvAboutText2")}</p>
                    <p className="cv-about__text">{i18next.t("_cvAboutText3")}</p>
                    <p className="cv-about__text ">{i18next.t("_cvAboutText4")}</p>
                    <p className="cv-about__text styled">{i18next.t("_cvAboutText5")}</p>
                    <p className="cv-about__text">{i18next.t("_cvAboutText6")}</p>

            </section>
            <section className="cv">
                <div id="education" className="cv-section">
                    <h3 className="cv-section__title">{i18next.t("_cvSecTitle-1")}</h3>    
                    <div className="cv-section__inner">
                        <table className="cv-table" role="table" aria-label="CV Elements">
                            <tbody>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">2010</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">BSC IT-Multimedia | Computer Science</p>
                                        <p className="cell cell--desc">University of Sharajh, United Arab Emirates</p>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="experience" className="cv-section">
                    <h3 className="cv-section__title">{i18next.t("_cvSecTitle-2")}</h3>    
                    <div className="cv-sectiom__item">
                        <table className="cv-table">
                            <tbody>
                                <tr className="row" role="row" >
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Active</p>
                                        <p className="tot-period">2 years</p>
                                    </td>

                                    <td className="cv-table__content col-10">
                                        <p className="cell--title">Frontend Developer</p>
                                        <p className="cell--desc">LeQuest - Netherlands, Rotterdam </p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc0" role="button" aria-expanded="false" aria-controls="jobDesc0">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc0">
                                            <div className="card card-body">
                                                <ul className="post-list--custom">
                                                    <li> Developed frontend applications using JavaScript, CSS, and relevant frameworks such as React, Material-UI, and Bootstrap. </li>
                                                    <li> Improved the main application using JavaScript and created JSON file formats for defining game data and configurations </li>
                                                    <li> Implemented a scalable design system using Storybook, HTML custom components, Material-UI, following practices such as ITCS methodology, and BEM naming convention for consistent UI development. </li>
                                                    <li>Contributed to planning and improving internal workflow/processes, considering inter-team dependencies, to optimize process efficiency and enhance team productivity.</li>
                                                    <li>Gained a deep understanding of frontend implementation, created wireframes, documented the application architecture, component/module relationships, and facilitated the onboarding process for new team members.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        

                                    </td>
                                </tr>
                                <tr className="row" role="row" >
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Active</p>
                                    </td>

                                    <td className="cv-table__content col-10">
                                        <p className="cell--title">Self-employed webdeveloper</p>
                                        <p className="cell--desc">Remote work for startups and small companies </p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc0" role="button" aria-expanded="false" aria-controls="jobDesc0">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc0">
                                            <div className="card card-body">
                                                <p>Development of online applications, websites, working on HTML5, CSS, JS, PHP, Wordpress and e-commerce</p> 
                                                <ul className="post-list--custom">
                                                    <li> Developing and designing HTML/CSS </li>  
                                                    <li> Creating wordpress custom themes </li>
                                                    <li> Creating e-commerce custom shops </li>
                                                    <li> Side projects on Fabric UI and React </li>
                                                    <li> projects list <a href="https://dania-abdul.github.io/portfolio/projects">here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        

                                    </td>
                                </tr>
                                <tr className="row" role="row" >
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Sep 2019</p>
                                        <p className="tot-period">1 year</p>
                                    </td>

                                    <td className="cv-table__content col-10">
                                        <p className="cell--title">Frontend Developer</p>
                                        <p className="cell--desc">Hoppinger BV - Netherlands, Rotterdam</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc">
                                            <div className="card card-body">
                                                <p>Development of online applications, working on HTML5, CSS, JS.</p> 
                                                <ul className="post-list--custom">
                                                    <li> Development of online applications, working on HTML5 and React </li>  
                                                    <li> Developing and designing HTML/CSS building blocks </li> 
                                                    <li> Cross-Browser Testing. </li>
                                                    <li> Creating projects’ styleguide </li> 
                                                    <li>Ensuring consistent/responsive Cascading style sheets (CSS) across all browsers and platforms </li>
                                                </ul>
                                            </div>
                                        </div>
                                        

                                    </td>
                                </tr>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Aug 2018</p>
                                        <p className="tot-period">2 years</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">UI/UX Designer - Product Owner</p>
                                        <p className="cell cell--desc">AppsIntegra - UAE, Dubai</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc2" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse " id="jobDesc2">
                                            <div className="card card-body">
                                                <ul className="post-list--custom">
                                                    <li> Gathering and evaluating user requirements, in collaboration with product managers and developers.</li>  
                                                    <li> Illustrating design ideas using storyboards, process ﬂows and sitemaps.</li> 
                                                    <li> Designing graphic user interface elements, like menus, tabs and widgets. </li>
                                                    <li> Identify and troubleshoot UX problems. </li> 
                                                    <li> Conduct layout adjustments based on user feedback.</li>
                                                    <li> Communicate with clients to understand their business goals and objectives.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Jul 2016</p>
                                        <p className="tot-period">5 months</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">SEO - Digital Marketing Executive</p>
                                        <p className="cell cell--desc">Home Bazar</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc3" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc3">
                                            <div className="card card-body">
                                                <ul className="post-list--custom">
                                                    <li> Optimizing landing pages for search engine optimization.</li>  
                                                    <li> Performing ongoing keyword research including discovery and expansion of keyword opportunities. </li> 
                                                    <li> Researching and implementing content recommendations for organic SEO success.</li>
                                                    <li> Cascading style sheets (CSS) consistent across all browsers and platforms. </li> 
                                                    <li> Working on User-centered wireframes based on pure marketing analytic.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Feb 2016</p>
                                        <p className="tot-period">2 months</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">SEO internship</p>
                                        <p className="cell cell--desc">Pixel Pure Hat - UAE, Dubai</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc4" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc4">
                                            <div className="card card-body">
                                                <ul className="post-list--custom">
                                                    <li> Design, build and maintain social media presence, and advertising campaigns (Facebook, Twitter, instagram...etc.). </li>  
                                                    <li> Work with editorial and marketing teams to drive SEO in content creation and content programming.</li> 
                                                    <li> On-page SEO.</li>
                                                    <li> Ability to analyse and improve results. </li> 
                                                    <li> Develop and implement link building strategy.</li>
                                                    <li> Research and analyze competitor advertising links.</li>
                                                    <li> Track, report, and analyze website analytics and PPC initiatives and campaigns.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Dec 2014</p>
                                        <p className="tot-period">7 months</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">Web Developer internship</p>
                                        <p className="cell cell--desc">ComGuard FZ LLC. - UAE, Dubai</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc5" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc5">
                                            <div className="card card-body">
                                                <ul className="post-list--custom">
                                                    <li> Responsible for maintaining, expanding, and scaling the company website.</li>  
                                                    <li> Gather and reﬁne speciﬁcations and requirements based on technical needs. </li> 
                                                    <li> Create and maintain software documentations..  </li>
                                                    <li>  Graphic Visualizer: Cooperate with web designers to match visual design intent. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row" role="row">
                                    <td className="cv-table__date col-2">
                                        <p className="end-date">Jun 2015</p>
                                        <p className="tot-period">1 yr 10 mos</p>
                                    </td>
                                    <td className="cv-table__content col-10">
                                        <p className="cell cell--title">Graphic Designer</p>
                                        <p className="cell cell--desc">University of Sharjah - UAE, Sharjah</p>
                                        <a className="cell--link" aria-label="more about the job" data-toggle="collapse" href="#jobDesc6" role="button" aria-expanded="false" aria-controls="jobDesc">more about the job...</a>
                                        <div className="collapse multi-collapse" id="jobDesc6">
                                            <div className="card card-body">
                                                <p>Part time student graphic designer for the Deanship of students affairs During my University time.</p> 
                                                <ul className="post-list--custom">
                                                    <li>Working in deferent forms of layouts as (ﬂayers, advertisements, cards, logos, charts, folding) </li>  
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
{/*                 
                <div className="test-function">
                    <div>{this.state.counter}</div>
                    <p>hello the dark side {i18next.t("_name")}</p>
                    <button className="btn btn-primary" onClick={this.increase_counter.bind(this)}>Inc counter</button>
                </div>
                <button onClick={() => this.setState(s_old => ({...s_old, counter : s_old.counter + 1}))}>Inc counter</button> */}


            </section>
            <div className="cv-list">
                <h3 className="cv-section__title">Skills</h3>    
                <ul className="post-list--custom">
                    <li>JavaScript</li>
                    <li>React.js/Bootstrap/Material UI/Fluent UI/styled-component</li>
                    <li>Web Accessibility (W3C/ARIA/WCAG)</li>
                    <li>Package management npm/yarn </li>
                    <li>CMS Itegration (Wordpress/ Wordpress theme development/ e-commerce)</li>
                    <li>Webpack/Gulp</li>
                    <li>Web Design Tools Sketch/Figma/Adobe XD</li>
                    <li>Photoshop/Illustrator</li>
                </ul>
            </div>
            
            <div className="cv-list pt-3">
                <h3 className="cv-section__title">Speaking Languages</h3>    
                <ul className="post-list--custom">
                    <li>Arabic (Native)</li>
                    <li>English (Professional working proficiency)</li>
                    <li>Dutch (Elementary )</li>
                </ul>
            </div>  

            <div className="cv-list pt-3 hide-print">
                <h3 className="cv-section__title">View my work</h3>    
                <ul className="post-list--custom flex-row">
                    <li> <a href="https://dania-abdul.github.io/portfolio/">Projects</a></li>
                    <li className='ml-3'><a href="https://www.behance.net/DaniaAb">Behance</a> </li>
                </ul>
            </div>
            </>
    }
}
