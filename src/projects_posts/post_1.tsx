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
import Image1 from '../assets/images/img-1.png';
import Image2 from '../assets/images/img-2.jpg';






export type DemoPostState = {
}

export type DemoPostProps = {
}

initializeIcons();



const itemsWithHeading: IBreadcrumbItem[] = [
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/portfolio/blog" } },
  // { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
  // Generally, only the last item should ever be a heading.
  // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
  { text: 'post-title-1', key: 'demo_page', isCurrentItem: true, as: 'h4' }
];



function _getCustomDivider(dividerProps: IDividerAsProps): JSX.Element {
  const tooltipText = dividerProps.item ? dividerProps.item.text : '';
  return (
    <TooltipHost content={`Show ${tooltipText} contents`} calloutProps={{ gapSpace: 0 }}>
      <span aria-hidden="true" style={{ cursor: 'pointer', padding: 5 }}>
        /
      </span>
    </TooltipHost>
  );
}


export class post1Component extends React.Component <DemoPostProps, DemoPostState> {
  constructor(props : DemoPostProps) {
      super(props);
      this.state = { overlay : "projects_home" } 
  }

  project_post_1 = () => {
    return (
      <div className="blog-post__inner">
        <div className="blog-post__breadcrumb">
          {/* <a href="/fabric">/Home</a>
           */}
          <Breadcrumb
            items={itemsWithHeading}
            maxDisplayedItems={3}
            ariaLabel="bread crumb links "
            dividerAs={_getCustomDivider}
            overflowAriaLabel="More links"
          />
        </div>
        <div className="post">
          <div className="post__content">
           <div className="post-block post-header">
             <div className="post-header__content">
               <div className="post-header__top">
                 <div className="post-header__label post-text--s"><span className="post-label">category</span></div>
                 <div className="post-header__date post-text--s"> <span className="post-date">16/2/2020</span></div>
               </div>
               <div className="post-header__title">
                 <h1 className="post-title--l">{i18next.t("_post-title-1")}</h1>
               </div>
               <div className="post-header__text">
                 <p className="post-text--m">Epsum factorial non deposit quid pro quo hic escorol. Olypian</p>
               </div>
             </div>
             <div className="post-header__visual">
               <img src={Image2} alt="" className="post-header__img"/>
             </div>
           </div>
           <div className="post-containerm--m">
             <blockquote className="post-block post-quote ">
               <p className="post-quote__text"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit  maecenas lorem nulla, malesuada ut”</p>
               <p className="post-quote__author post-text--s">Author Name</p>
            </blockquote>
           </div>
           <div className="post-container--s">
             <p className="post-block post-text post-text--m ">Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li.Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. </p>
           </div>
           <div className="post-container--m">
             <h2 className="post-block post-center-title post-title--m">Lorem ipsum dolor sit amet, consectetur adipiscing elit  maecenas lorem nulla</h2>
           </div>
           <div className="post-container--s">
             <div className="post-block post-text">
              <h3 className="post-title--s">Ma quande</h3>
              <p>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li. <a className="post-link" href="">Ma quande lingues</a> coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. </p>
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
             <div className="post-photo-grid__item post-photo-m">
               <div className="post-photo-m__inner">
                 <div className="photo-m__visual">
                   <img  className="photo-m__img" src={Image2} alt=""/>
                 </div>
                 <p className="photo-m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               </div>
             </div>
             <div className="post-photo-grid__item post-photo-m">
               <div className="post-photo-m__inner">
                 <div className="photo-m__visual">
                   <img  className="photo-m__img" src={Image2} alt=""/>
                 </div>
                 <p className="photo-m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               </div>
             </div>
             <div className="post-photo-grid__item post-photo-m">
               <div className="post-photo-m__inner">
                 <div className="photo-m__visual">
                   <img  className="photo-m__img" src={Image2} alt=""/>
                 </div>
                 <p className="photo-m__caption post-text--s">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
            <div className="blog-post">
                 { this.project_post_1() }
            </div>
        </>
    }
}


