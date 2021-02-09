import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { IFontStyles, PrimaryButton, Stack, DefaultButton, Text, Image, ITextStyles, FontWeights, IIconStyles, Icon, Modal, IconButton, getTheme, mergeStyleSets, FontSizes} from 'office-ui-fabric-react'
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Nav, INavLinkGroup, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from 'office-ui-fabric-react/lib/Breadcrumb';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import {cardData , data} from '../projects-data';
import { useParams } from 'react-router-dom';


import goLogo from  '../assets/images/posts-imgs/grandeomega/go-logo.png' ;
import GOCoursesList from  '../assets/images/posts-imgs/grandeomega/courses-list--switch.gif' ;
import GOCourseIntro from  '../assets/images/posts-imgs/grandeomega/course-intro--light.png' ;
import GObaActivity from '../assets/images/posts-imgs/grandeomega/BA-activity--light.gif';
import GOmcqActivity from '../assets/images/posts-imgs/grandeomega/MCQ--LIGHT.gif';
import GOdragdropActivity from '../assets/images/posts-imgs/grandeomega/drag-drop--light.gif';
import GOflipActivity from '../assets/images/posts-imgs/grandeomega/flip-card--light.gif';


export type DemoPostProps = {
}

initializeIcons();






export class GrandeOmega extends React.Component <any, any> {
    constructor(props : any) {
      
      super(props);
      this.state = { } 
    }
    
    itemsWithHeading = () : IBreadcrumbItem[] => [
      { text: 'Projects', key: 'home', onClick: () => { window.location.href = "/portfolio/projects" } },
      { text: i18next.t("_post_go_title") , key: 'demo_page', isCurrentItem: true, as: 'h4' }
    ];
  
    _getCustomDivider(dividerProps: IDividerAsProps): JSX.Element {
      const tooltipText = dividerProps.item ? dividerProps.item.text : '';
      return (
        <TooltipHost content={`Show ${tooltipText} contents`} calloutProps={{ gapSpace: 0 }}>
          <span aria-hidden="true" style={{ cursor: 'pointer', padding: 5 }}>
            /
          </span>
        </TooltipHost>
      );
    }
  
    project_post_grandeomega = () => {
      return (
        <div className="projects-post__inner">
          <div className="projects-post__breadcrumb">           
            <Breadcrumb
              items={this.itemsWithHeading()}
              maxDisplayedItems={3}
              ariaLabel="bread crumb links "
              dividerAs={this._getCustomDivider}
              overflowAriaLabel="More links"
            />
          </div>
          <div className="post">
            <div className="post__content">
                  <div className="post-header">
                    <div className="post-header__content">
                      <div className="post-header__top">
                        <div className="post-header__label post-text--s"><span className="post-label">{i18next.t("_category_development")}</span></div>
                        <div className="post-header__date post-text--s"> <span className="post-date">Feb/2021</span></div>
                      </div>
                      <h1 className="post-header__title title--l">{i18next.t("_post_go_title")}</h1>
                      <p className="post-header__text post-text--m">{i18next.t("_post_go_short_desc")}</p>
                      <ul className="home-projects__tags tag__list">
                          <li className="tag__item">{i18next.t("_post_card_tag_css")}</li>
                          <li className="tag__item">{i18next.t("_post_card_tag_html")}</li>
                          <li className="tag__item">{i18next.t("_post_card_tag_js")}</li>
                      </ul>
                    </div>
                  </div>
                <div className="post-divider div-transparent"></div>
                <div className="post-container--m">
                    <div className="post-text--img">
                      <div className="text-img__content">
                        <h3 className="title--m">{i18next.t("_post_go_text_1_title")}</h3>
                        <p className="text--s">{i18next.t("_post_go_long_desc")}</p>
                      </div>
                      <div className="text-img__visual">
                        <img  className="" src={goLogo} alt=""/>
                      </div>
                    </div>
                </div>
                <div className="post-container--s">
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GOCoursesList} alt=""/>
                      </div>
                      <p className="post-photo__caption text--s"><a href="http://www.grandeomega.com/">www.grandeomega.com</a> Courses List (light/dark mode)</p>
                    </div>
                  </div>
                </div>
                <div className="post-container--m">
                  <p className="text--s">GrandeOmega aims at harmonizing the theory and practice of programming.</p>
                  <p className=" pb-4 text--s">The <strong>theory </strong>focuses on understanding exactly how things work formally, and acts as the strong foundation upon which the programming language is based.</p>
                </div>
                <div className="post-container--m">
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GOCourseIntro} alt=""/>
                      </div>
                      <p className="post-photo__caption post-text--s">Course Slides - contains the course theory and practice of programming</p>
                    </div>
                  </div>
                </div>
                <div className="post-container--m">
                  <p className=" pb-4 text--s">The <strong>practice </strong>focuses on completing partially written programs in order to fulfill a given semantic behavior. Students are required to understand the code they are given, and add the missing blocks in order to match a precisely given definition. </p>
                </div>
                <div className="post-container--m">
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GObaActivity} alt=""/>
                      </div>
                      <p className="post-photo__caption text--s">Code Activity</p>
                    </div>
                  </div>
                </div>
                <div className="post-container--m">
                  <p className=" pb-4 text--s">GrandeOmega improves the quality of the learning process, by automating feedback, automating corrections, saving time to teachers, and monitoring students progress </p>
                </div>
                <div className="post-container--s">
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GOmcqActivity} alt=""/>
                      </div>
                      <p className="post-photo__caption text--s">Multible Choice Question  </p>
                    </div>
                  </div>
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GOdragdropActivity} alt=""/>
                      </div>
                      <p className="post-photo__caption text--s">Drag and drop Question  </p>
                    </div>
                  </div>
                  <div className="post-photo">
                    <div className="post-photo__inner">
                      <div className="post-photo__visual">
                        <img  className="" src={GOflipActivity} alt=""/>
                      </div>
                      <p className="post-photo__caption text--s">Flipping cards Question  </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      )
    }
  
      render(){
          return <>
              <div className="projects-post">
                   { this.project_post_grandeomega() }
              </div>
          </>
      }
  }
  
  
  