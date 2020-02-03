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




export type DemoPostState = {
}

export type DemoPostProps = {
}

initializeIcons();



const itemsWithHeading: IBreadcrumbItem[] = [
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/fabric" } },
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


export class DemoPostComponent extends React.Component <DemoPostProps, DemoPostState> {
  constructor(props : DemoPostProps) {
      super(props);
      this.state = { overlay : "main_page" }
  }

  blog_page = () => {
    return (
      <div>
        <div>
          {/* <a href="/fabric">/Home</a>
           */}
          <Breadcrumb
            items={itemsWithHeading}
            maxDisplayedItems={3}
            ariaLabel="With custom rendered divider and overflow icon"
            dividerAs={_getCustomDivider}
            overflowAriaLabel="More links"
          />
        </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur</p>
        <div>
          <button onClick={() => this.setState({...this.state, overlay : "main_page"})}>Back to main</button>
        </div>
      </div>
    )
  }

    render(){
        return <>
            <div className="blog-page">
                 { this.blog_page() }
            </div>
        </>
    }
}


