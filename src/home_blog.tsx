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
import {List} from "immutable"

type Data = {
  category : string
  blog_title : string
  is_pinned : boolean
}

export type HomeBlogState = {
  overlay : "show_modal_main_page" | "main_page",
  data : Data[],
  selected_category : string
}

export type HomeBlogProps = {}

initializeIcons();

const cardTokens: ICardTokens = { childrenMargin: 12 };
const labelTextStyles: ITextStyles = {
    root: {
      color: '#025F52',
      fontWeight: FontWeights.semibold
    }
  };
const descriptionTextStyles: ITextStyles = {
    root: {
      color: '#333333',
      fontWeight: FontWeights.semibold
    }
  };
const helpfulTextStyles: ITextStyles = {
    root: {
      color: '#333333',
      fontWeight: FontWeights.regular
    }
  };
const iconStyles: IIconStyles = {
    root: {
      color: '#0078D4',
      fontSize: 16,
      fontWeight: FontWeights.regular
    }
  };
const horizontalFooterCardSectionStyles: ICardSectionStyles = {
    root: {
      alignSelf: 'stretch',
      borderLeft: '1px solid #F3F2F1'
	}
  };
  const verticalFooterCardSectionStyles: ICardSectionStyles = {
	  root: {
		alignSelf: 'stretch',
		borderTop: '1px solid #F3F2F1'
	  }
	};
const footerCardSectionTokens: ICardSectionTokens = { padding: '0px 0px 0px 12px' };

const itemsWithHeading: IBreadcrumbItem[] = [
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/blog" } },
  // { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
  // Generally, only the last item should ever be a heading.
  // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
  { text: 'CV', key: 'cv', isCurrentItem: true, as: 'h4' }
];


function _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
  return <h5 className="nav__header">{group.name}</h5>;
}

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



export class HomeBlogComponent extends React.Component <HomeBlogProps, HomeBlogState> {
  constructor(props : HomeBlogProps) {
      super(props);
      this.state = { 
        overlay: 'main_page',  
        selected_category : "",
        data : [
          { category : "contoso", blog_title : "some title  1", is_pinned : false },
          { category : "contoso", blog_title : "some title 2", is_pinned : true },
          { category : "contoso", blog_title : "some title 3", is_pinned : false },
          { category : "dania", blog_title : "some title 4", is_pinned : false },
          { category : "dania", blog_title : "some title  5", is_pinned : true }
        ]
      }
  }

  
  blog_main_modal = () => {
    const theme = getTheme();
    const iconButtonStyles = mergeStyleSets({
      root: {
        color: theme.palette.themeDark,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px'
      },
      rootHovered: {
        color: theme.palette.themeDark
      }
    });
    
    return (
      <Modal
          titleAriaId={"Some title (use i18 for multilangauge)"}
          subtitleAriaId={"Some subtitle (use i18 for multilangauge)"}
          isOpen={true}
          isBlocking={false}
          onDismiss={() => {this.setState({...this.state, overlay : "main_page"})}}
          containerClassName={"container modal__container"}>
          <div className={"modal__header"}>
            <h4 className="modal__title">Lorem Ipsum</h4>
            <IconButton
              styles={iconButtonStyles}
              iconProps={{ iconName: 'Cancel' }}
              ariaLabel="Close popup modal"
              onClick={() => {this.setState({...this.state, overlay : "main_page"})}}
            />
          </div>
          <div className={"modal__content"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in
              leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum
              vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a
              odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus,
              maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat
              eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
              efficitur.{' '}
            </p>
          </div>
          <div className="modal__footer">
            <DefaultButton className="modal__btn-more" text="Standard" onClick={() => window.location.href='/blog/blogpage'} allowDisabledFocus  />
          </div> 
        </Modal>
    )
  }
	blog_main = () => {
		return (
			<div> 
        <Stack horizontal>
          <Text className="blog-page__text" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam</Text>   
        </Stack>

        <div className="blog-contnt">
          <div className="blog-contnt--left">
            <Stack  gap={20}>
              {this.state.overlay == "show_modal_main_page" ? this.blog_main_modal() : null}
              <Separator alignContent="start">Pinned</Separator>
              <Card horizontal className="blog-content__pinned">
                <Stack.Item className="pinned__list">
                  {
                    this.state.data
                      .filter(c => c.is_pinned)
                      .filter(c => this.state.selected_category == "" ? true : this.state.selected_category == c.category)
                      .map(c => {
                        return <Card aria-label="Clickable horizontal card with image " horizontal 
                          className="card-horizontal"
                          onClick={() => window.location.href='/blog/blogpage'} 
                          tokens={cardTokens}
                          style={{width:"100%"}}>
                          <Card.Item fill className="card-horizontal__visual">
                            <Image className="card-horizontal__image" src="https://placehold.it/180x135" alt="Placeholder image." />
                          </Card.Item>
                          <Card.Section className="card-horizontal__content">
                            <Text variant="small" styles={labelTextStyles}> {c.category} </Text>
                            <Text styles={descriptionTextStyles}> {c.blog_title} </Text>
                            <Text variant="small" styles={helpfulTextStyles}> Is this recommendation helpful? </Text>
                          </Card.Section>
                          <Card.Section className="card-horizontal__tools" styles={horizontalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
                            <Icon iconName="RedEye"
                                onClick={e => {
                                  this.setState({...this.state, overlay:"show_modal_main_page"})
                                  e.stopPropagation()
                                }}
                              styles={iconStyles} />
                            <Stack.Item grow={1}>
                              <span />
                            </Stack.Item>
                            <Icon iconName="MoreVertical" styles={iconStyles} />
                          </Card.Section>
                        </Card>
                      
                        })
                  }
                  </Stack.Item>
                
              </Card>
              <Separator alignContent="start">Posts</Separator>
              <div className="blog-content__cards">
                <Stack.Item className="cards__list">
                  {
                    this.state.data
                    .filter(c => this.state.selected_category == "" ? true : this.state.selected_category == c.category)
                    .map(c => {
                      return <Card aria-label="Clickable vertical card with image " tokens={cardTokens} className="card-vertical"> 
                      <div className="card-vertical__inner">
                        <Card.Item fill>
                          <Image src="https://placehold.it/256x144" width="100%" alt="Placeholder image." />
                        </Card.Item>
                        <Card.Section>
                          <Text variant="small" styles={labelTextStyles}>
                            {c.category}
                          </Text>
                          <Text styles={descriptionTextStyles}>{c.blog_title}</Text>
                          <Text variant="small" styles={helpfulTextStyles}>
                          Is this recommendation helpful?
                          </Text>
                        </Card.Section>
                        <Card.Section horizontal styles={verticalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
                          <Icon iconName="RedEye" styles={iconStyles} />
                          <Stack.Item grow={1}>
                            <span />
                          </Stack.Item>
                          <Icon iconName="MoreVertical" styles={iconStyles} />
                        </Card.Section>
                      </div>
                    </Card>                         
                  
                    })
                  }
                
                  </Stack.Item>
              </div>
            </Stack>
          </div>
          <div className="blog-contnt--right">
            <Nav
              onRenderGroupHeader={_onRenderGroupHeader as any}
              ariaLabel="Nav with group headers"
              onLinkClick={(_,e) => {
                this.setState({...this.state, selected_category: e == undefined || e.name == "All" ? "" : e.name})
              }}
              groups={[{
                name: 'read about ',
                links:
                  [{ name: "All", url: '', key: "All", target: '_blank' }].concat(
                  List(this.state.data).map(c => c.category).toSet().map(c => ({ name: c, url: '', key: c, target: '_blank' })).toArray())
              }
              ]}
            />
          </div>
        </div>
		  </div>)
    }
    
    onlyUnique = (value:any, index:any, self:any) => { 
      return self.indexOf(value) === index
    }
    
    render(){
        return <>
            <div className="blog-page">
             {
               this.state.overlay == "main_page" || this.state.overlay == "show_modal_main_page" ? this.blog_main()
               : null
             }
                
                    
            </div>
        </>
    }
}


