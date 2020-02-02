 import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { IFontStyles, PrimaryButton, Stack, DefaultButton, Text, Image, ITextStyles, FontWeights, IIconStyles, Icon} from 'office-ui-fabric-react'
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Nav, INavLinkGroup, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Separator } from 'office-ui-fabric-react/lib/Separator';


initializeIcons();


export type HomeFabricState = {
}

export type HomeFabricProps = {
}
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

export class HomeFabricComponent extends React.Component <HomeFabricProps, HomeFabricState> {
    constructor(props : HomeFabricProps) {
        super(props);
        this.state = { }
    }


    
    render(){
        return <>
            <div className="diary-page">
            	{/* <header className="diary-page__header">
            	    <h2 className="diary-page__title">Lorem ipsum dolor sit amet</h2>
            	</header>
             */}
                <Stack horizontal>
					<Text className="diary-page__text" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam</Text>   
				</Stack>

            	<div className="diary-contnt">
            	    <div className="diary-contnt--left">
            	        <Stack  gap={20}>
							<Separator alignContent="start">Pinned</Separator>
							<Card horizontal>
								<Stack.Item>
									<Card aria-label="Clickable horizontal card with image " horizontal 
										onClick={() => window.alert("Card clicked")} tokens={cardTokens}
										style={{width:"100%"}}
										>
										<Card.Item fill>
											<Image src="https://placehold.it/180x135" alt="Placeholder image." />
										</Card.Item>
										<Card.Section>
											<Text variant="small" styles={labelTextStyles}> Contoso </Text>
											<Text styles={descriptionTextStyles}> Contoso Denver expansion design marketing hero guidelines </Text>
											<Text variant="small" styles={helpfulTextStyles}> Is this recommendation helpful? </Text>
										</Card.Section>
										<Card.Section styles={horizontalFooterCardSectionStyles} tokens={footerCardSectionTokens}>
											<Icon iconName="RedEye" styles={iconStyles} />
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
            	    <div className="diary-contnt--right">
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
                    
            </div>
        </>
    }
}


