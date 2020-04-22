 import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { IFontStyles, PrimaryButton, Stack, DefaultButton, Text, Image, ITextStyles, FontWeights, IIconStyles, Icon, Modal, IconButton, getTheme, mergeStyleSets, FontSizes} from 'office-ui-fabric-react'
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Nav, INavStyles, INavLinkGroup, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from 'office-ui-fabric-react/lib/Breadcrumb';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import {List} from "immutable";
import Image1 from './assets/images/img-1.png';
import Image2 from './assets/images/img-2.jpg';

type cardData = {
  category : string
  post_title : string
  is_pinned : boolean
  modal : string
  post_description : string
  url : string
  image_url : string
}

export type HomeProjectsState = {
  overlay : {kind:"show_modal_projects_home", selected_card:cardData} | {kind:"projects_home"},
  data : cardData[],
  selected_category : string
}

export type HomeProjectsProps = {}

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
  
  // const navStyles : INavStyles = {
  //   root: {
  //     color: '#000000',
  //   }
  // };
  const styles = {
    root: [
      {
        color: 'green',
      }
    ]
  };
  const footerCardSectionTokens: ICardSectionTokens = { padding: '0px 0px 0px 12px' };

const itemsWithHeading: IBreadcrumbItem[] = [
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/portfolio/projects" } },
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



export class HomeProjectsComponent extends React.Component <HomeProjectsProps, HomeProjectsState> {

  constructor(props : HomeProjectsProps) {
      super(props);
      this.state = { 
        overlay: {kind:'projects_home'},  
        selected_category : "",
        data : [
          { category : "category", post_title : "post-title-1", 
            is_pinned : true, modal:"post_modal_1",
            post_description: "post_description_1",
            url : "/portfolio/projects/blog_post_1",
            image_url : Image1
          },
          { category : "contoso", post_title : "post-title-2", 
            is_pinned : false, modal:"post_modal_2",
            post_description: "post_description_2",
            url : "/portfolio" ,
            image_url : Image2
          },
        ]
      }
  }

  
  projects_home_modal = (selected_card:cardData) => {
    
    return (
      <Modal
          titleAriaId={"Some title (use i18 for multilangauge)"}
          subtitleAriaId={"Some subtitle (use i18 for multilangauge)"}
          isOpen={true}
          isBlocking={false}
          onDismiss={() => {this.setState({...this.state, overlay : {kind:"projects_home"}})}}
          containerClassName={"container modal__container"}>
          <div className={"modal__header"}>
            <h4 className="modal__title ">{i18next.t(selected_card.post_title)}</h4>
            <IconButton
              iconProps={{ iconName: 'Cancel' }}
              ariaLabel="Close popup modal"
              onClick={() => {this.setState({...this.state, overlay : {kind:"projects_home"}})}}
            />
          </div>
          <div className={"modal__content"}>
            <div className="post-header">
              <div className="post-header__content">
                <div className="post-header__top">
                  <div className="post-header__label post-text--s"><span className="post-label">category</span></div>
                  <div className="post-header__date post-text--s"> <span className="post-date">16/2/2020</span></div>
                </div>
                <div className="post-header__title">
                  <h1 className="post-title--l">{i18next.t(selected_card.post_title)}</h1>
                </div>
                <div className="post-header__text">
                  <p className="post-text--m">
                    {i18next.t(selected_card.modal)}
                  </p>
                </div>
              </div>
              <div className="post-header__visual">
                <img src={selected_card.image_url} alt="" className="post-header__img"/>
              </div>
            </div>
          </div>
          <div className="modal__footer">
            <DefaultButton className="modal__btn" text="Read more" onClick={() => window.location.href=selected_card.url} allowDisabledFocus  />
          </div> 
        </Modal>
    )
  }
	projects_home = () => {
		return (
			<div > 
        <Stack horizontal>
          <Text className="blog-home__text" >{i18next.t("_blog-home__text")}</Text>   
        </Stack>

        <div className="blog-home__content">
          <div className="blog-contnt--left">
            <Stack  gap={20}>
              {this.state.overlay.kind == "show_modal_projects_home" ? this.projects_home_modal(this.state.overlay.selected_card) : null}
              <Separator alignContent="start">Pinned</Separator>
              <Card horizontal className="blog-content__pinned">
                <Stack.Item className="pinned__list">
                  {
                    this.state.data
                      .filter(c => c.is_pinned)
                      .filter(c => this.state.selected_category == "" ? true : this.state.selected_category == c.category)
                      .map(c => {
                        return <div className="blog-card card-horizontal">
                          <Card aria-label="Clickable horizontal card with image " horizontal 
                            className="card-horizontal__inner"
                            onClick={() => window.location.href=c.url}
                            tokens={cardTokens}
                            style={{width:"100%"}}>
                            <Card.Item fill className="card-horizontal__visual">
                              <Image className="card-horizontal__image" src={c.image_url} alt="Placeholder image." />
                            </Card.Item>
                            <Card.Section className="card-horizontal__content">
                              <Text variant="small" styles={labelTextStyles}> {c.category} </Text>
                              <Text styles={descriptionTextStyles}> {i18next.t(c.post_title)} </Text>
                              <Text variant="small" styles={helpfulTextStyles}> {i18next.t(c.post_description)} </Text>
                            </Card.Section>
                            <Card.Section className="card-horizontal__tools card__tools" styles={horizontalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
                              <Icon className="tools__icon icon--view" iconName="RedEye"
                                  onClick={e => {
                                    this.setState({...this.state, overlay:{kind:"show_modal_projects_home", selected_card:c}})
                                    e.stopPropagation()
                                  }}
                                styles={iconStyles} />
                              <Icon className="tools__icon icon--more"  iconName="MoreVertical" styles={iconStyles} />
                            </Card.Section>
                          </Card>
                        </div>
                      
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
                      return <Card aria-label="Clickable vertical card with image " 
                      onClick={() => window.location.href=c.url}
                      tokens={cardTokens} 
                      className="blog-card card-vertical"> 
                      <div className="card-vertical__inner">
                        <Card.Item fill className="card-vertical__visual">
                          <Image className="card-vertical__image" src={c.image_url} width="100%" alt="Placeholder image." />
                        </Card.Item>
                        <Card.Section className="card-vertical__contant ">
                          <Text variant="small" styles={labelTextStyles}>
                            {c.category}
                          </Text>
                          <Text styles={descriptionTextStyles}>{i18next.t(c.post_title)}</Text>
                          <Text variant="small" styles={helpfulTextStyles}>
                            {i18next.t(c.post_description)}
                          </Text>
                        </Card.Section>
                        <Card.Section className="card-vertical__tools card__tools" horizontal styles={verticalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
                        <Icon className="tools__icon icon--view" iconName="RedEye"
                                  onClick={e => {
                                    this.setState({...this.state, overlay:{kind:"show_modal_projects_home", selected_card:c}})
                                    e.stopPropagation()
                                  }}
                                styles={iconStyles} />
                          <Icon className="tools__icon icon--more" iconName="MoreVertical" styles={iconStyles} />
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
              ariaLabel="Nav with group headers"
              className="nav-category"
              onLinkClick={(_,e) => {
                this.setState({...this.state, selected_category: e == undefined || e.name == "All" ? "" : e.name})
              }}
              groups={[{
                name: 'read about ',
                expandAriaLabel: 'Expand Extended components section',
                collapseAriaLabel: 'Collapse Extended components section',
                links:
                  [{ name: "All", url: '', key: "All", target: '_blank',}].concat(
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
            <div className="blog-home">
             {
               this.state.overlay.kind == "projects_home" || this.state.overlay.kind == "show_modal_projects_home" ? this.projects_home()
               : null
             }
                
                    
            </div>
        </>
    }
}


