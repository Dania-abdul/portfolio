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
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/blog" } },
  // { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
  // Generally, only the last item should ever be a heading.
  // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
  { text: 'demo_page', key: 'demo_page', isCurrentItem: true, as: 'h4' }
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
      this.state = { overlay : "blog_home" } 
  }

  blog_post_1 = () => {
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
            <div className="post-block block-1">
              <div className="block-1__inner">
                <div className="block__content block-1__content">
                  <h2 className="block__title block-1__title">Hello World</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. </p>
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt.</p>
                </div>
                <div className="block-1__visual">
                  <img className="block-1__img" src={Image1} alt=""/>
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. </p>
            <div className="post__block-2">
              <div className="block-2__inner">
                  <div className="block-2__visual">
                    <img src={Image2} alt="" className="block-2__img"/>
                  </div>
                  <div className="block-2__content">
                    <p>lorem ipsum</p>

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
                 { this.blog_post_1() }
            </div>
        </>
    }
}


