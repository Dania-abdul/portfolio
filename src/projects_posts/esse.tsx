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
import PostImg1 from  '../assets/images/esse_img_1.jpg' ;
import Post1Img2 from  '../assets/images/post-1-image-2.jpg' ;
import Post1Img3 from  '../assets/images/single-product-gif.gif' ;
import { cardData, data } from '../projects_home';
import { useParams } from 'react-router-dom';



export type DemoPostProps = {
}

initializeIcons();





export class esse extends React.Component <any, any> {
  constructor(props : any) {
    
    super(props);
    this.state = { } 
  }
  
  itemsWithHeading = () : IBreadcrumbItem[] => [
    { text: 'Projects', key: 'home', onClick: () => { window.location.href = "/portfolio/projects" } },
    { text: i18next.t("_post_esse_title") , key: 'demo_page', isCurrentItem: true, as: 'h4' }
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

  project_post_esse = () => {
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
                <div className="post__header">
                  <div className="post-header__top">
                    <div className="post-header__label post-text--s"><span className="post-label">{i18next.t("_category_development")}</span></div>
                    <div className="post-header__date post-text--s"> <span className="post-date">Sep/2020</span></div>
                  </div>
                  <h1 className="post-title--l">{i18next.t("_post_esse_title")}</h1>
                    <p className="post-text--m">{i18next.t("_post_esse_short_desc")}</p>
                    <ul className="home-projects__tags tag__list">
                        <li className="tag__item">{i18next.t("_post_card_tag_php")}</li>
                        <li className="tag__item">{i18next.t("_post_card_tag_html")}</li>
                        <li className="tag__item">{i18next.t("_post_card_tag_wp")}</li>
                    </ul>
                </div>
              <div className="post-divider div-transparent"></div>
              <div className="post-container--s">
                <h3 className="post-title--s">{i18next.t("_post_esse_text_1_title")}</h3>
                <div className="post-block">
                  <p className=" post-text--m ">{i18next.t("_post_esse_text_1")}</p>
                </div>
              </div>
              <div className="post-container">
                <div className="post-photo">
                  <div className="post-photo__inner">
                    <div className="post-photo__visual photo--l">
                      <img  className="photo--l__img object-fit" src={PostImg1} alt=""/>
                    </div>
                    <p className="post-photo__caption post-text--s"><a href="https://essefloralstudio.com/">essefloralstudio.com</a> homepage</p>
                  </div>
                </div>
              </div>
              <div className="post-container--s">

              </div>
           </div>
        </div>
      </div>
    )
  }

    render(){
        return <>
            <div className="projects-post">
                 { this.project_post_esse() }
            </div>
        </>
    }
}


