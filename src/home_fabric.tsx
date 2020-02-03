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




export type HomeFabricState = {
	overlay : "show_modal_main_page" | "main_page"
}

export type HomeFabricProps = {}

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
  { text: 'Home', key: 'home', onClick: () => { window.location.href = "/fabric" } },
  // { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
  // Generally, only the last item should ever be a heading.
  // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
  { text: 'CV', key: 'cv', isCurrentItem: true, as: 'h4' }
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



export class HomeFabricComponent extends React.Component <HomeFabricProps, HomeFabricState> {
  constructor(props : HomeFabricProps) {
      super(props);
      this.state = { overlay: 'main_page'}
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
            <DefaultButton className="modal__btn-more" text="Standard" onClick={() => window.location.href='/fabric/blogpage'} allowDisabledFocus  />
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
              <Card horizontal>
                <Stack.Item>
                  <Card aria-label="Clickable horizontal card with image " horizontal 
                    onClick={() => window.location.href='/fabric/blogpage'} 
                    tokens={cardTokens}
                    style={{width:"100%"}}>
                    <Card.Item fill>
                      <Image src="https://placehold.it/180x135" alt="Placeholder image." />
                    </Card.Item>
                    <Card.Section>
                      <Text variant="small" styles={labelTextStyles}> Contoso </Text>
                      <Text styles={descriptionTextStyles}> Contoso Denver expansion design marketing hero guidelines </Text>
                      <Text variant="small" styles={helpfulTextStyles}> Is this recommendation helpful? </Text>
                    </Card.Section>
                    <Card.Section styles={horizontalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
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
                </Stack.Item>
                
              </Card>
              <Separator alignContent="start">Posts</Separator>
              <Stack.Item>
                <Card aria-label="Clickable vertical card with image " tokens={cardTokens} > 
                  <Card.Item fill>
                    <Image src="https://placehold.it/256x144" width="100%" alt="Placeholder image." />
                  </Card.Item>
                  <Card.Section>
                    <Text variant="small" styles={labelTextStyles}>
                      Contoso
                    </Text>
                    <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
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
                </Card>                         
              </Stack.Item>
            </Stack>
          </div>
          <div className="blog-contnt--right">
            <Nav
              ariaLabel="Nav with group headers"
              groups={[
                {
                name: 'Pages',
                links: [
                  // prettier-ignore
                  { name: 'Main page', url: '', key: 'key1', target: '_blank' },
                  { name: 'secondary', url: '', key: 'key2', target: '_blank' }
                ]
                }
              ]}
            />
          </div>
        </div>
		  </div>)
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


