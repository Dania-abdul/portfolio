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

import Image2 from '../assets/images/img-2.jpg';



export type DemoPostState = {
  myData : cardData 
}

export type DemoPostProps = {
}

initializeIcons();


export class post_template extends React.Component <any, DemoPostState> {
  constructor(props : any) {
    
    super(props);
    let { id } = props.match.params
    this.state = { myData:data.find(d => d.id == id) as any } 
  }
  
  itemsWithHeading = () : IBreadcrumbItem[] => [
    { text: 'Projects', key: 'home', onClick: () => { window.location.href = "/portfolio/projects" } },
    // { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
    // Generally, only the last item should ever be a heading.
    // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
    { text: i18next.t(this.state.myData.post_title) , key: 'demo_page', isCurrentItem: true, as: 'h4' }
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

  project_post_2 = () => {
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
           <div className=" post-header--img">
             <div className="post-header--img__content">
                <div className="post-header__top">
                 <div className="post-header__label post-text--s"><span className="post-label">{i18next.t(this.state.myData.category)}</span></div>
                 <div className="post-header__date post-text--s"> <span className="post-date">16/2/2020</span></div>
               </div>
                <h1 className="post-header__title title--l">{i18next.t(this.state.myData.post_title)}</h1>
                <p className="post-header__text post-text--m">{i18next.t(this.state.myData.post_short_description)} </p>
                <ul className="tag__list">
                    <li className="tag__item">{i18next.t(this.state.myData.post_card_tag_1)}</li>
                    <li className="tag__item">{i18next.t(this.state.myData.post_card_tag_2)}</li>
                    <li className="tag__item">{i18next.t(this.state.myData.post_card_tag_3)}</li>
                    <li className="tag__item">{i18next.t(this.state.myData.post_card_tag_4)}</li>
                </ul>
             </div>
             <div className="post-header--img__visual">
               <img src={i18next.t(this.state.myData.image_url)} alt="" className="post-header--img__img"/>
             </div>
           </div>
           <div className="post-containerm--m">
             <blockquote className="post-block post-quote ">
               <p className="post-quote__text">“ {i18next.t(this.state.myData.post_quote)}”</p>
               <p className="post-quote__author post-text--s">{i18next.t(this.state.myData.author)}</p>
            </blockquote>
           </div>
           <div className="post-container--s">
              <h3 className="post-title--s">{i18next.t(this.state.myData.post_text_1_title)}</h3>
             <p className="post-block post-text post-text--m ">{i18next.t(this.state.myData.post_text_1)}</p>
           </div>
           <div className="post-container--m">
             <div className="post-photo">
                <div className="post-photo__inner">
                  <div className="post-photo__visual photo--l">
                    <img  className="photo--l__img object-fit" src={i18next.t(this.state.myData.post_img_1)} alt=""/>
                  </div>
                  <p className="post-photo__caption post-text--s"><a href={i18next.t(this.state.myData.link)}>this is a link</a> text</p>
                </div>
              </div>
              <h2 className="post-block post-center-title post-title--m">{i18next.t(this.state.myData.post_text_big)}</h2>

           </div>
           <div className="post-container--s">
             <div className="post-block post-text">
              <h4 className="post-title--xs">Ma quande</h4>
              <p>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li. <a className="post-link" href="">Ma quande lingues</a> coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. </p>
              
              <ul className="post-list post-list--bullet">
                <li className="post-list__item">Consectetuer</li>
                <li className="post-list__item">Adipiscing elit</li>
                <li className="post-list__item">Diam</li>
                <li className="post-list__item">Tincidunt</li>
              </ul>              
              <ul className="post-list post-list--custom">
                <li className="post-list__item">Consectetuer</li>
                <li className="post-list__item">Adipiscing elit</li>
                <li className="post-list__item">Diam</li>
                <li className="post-list__item">Tincidunt</li>
              </ul>
             </div>
           </div>
           <div className="post-block post-photo-grid">
              <div className="post-photo-grid__item post-photo--m">
                <div className="post-photo--m__inner">
                  <div className="photo--m__visual">
                    <img  className="photo--m__img" src={Image2} alt=""/>
                  </div>
                  <p className="photo--m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="post-photo-grid__item post-photo--m">
                <div className="post-photo--m__inner">
                  <div className="photo--m__visual">
                    <img  className="photo--m__img" src={Image2} alt=""/>
                  </div>
                  <p className="photo--m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="post-photo-grid__item post-photo--m">
               <div className="post-photo--m__inner">
                 <div className="photo--m__visual">
                   <img  className="photo--m__img" src={Image2} alt=""/>
                 </div>
                 <p className="photo--m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               </div>
             </div>
            </div>
           </div>
        </div>
      </div>
    )
  }

    render(){
        if(this.state.myData == undefined) return <div>Not found</div>
        return <>
            <div className="projects-post">
                 { this.project_post_2() }
            </div>
        </>
    }
}


