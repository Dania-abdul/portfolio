import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { Route, Switch } from 'react-router-dom';
import { HomeComponent } from './home';
import { HomeFabricComponent } from './home_fabric';
import { Footer } from './footer';
import { Header } from './header'

export type LayoutState = {
    language : string
}

export type LayoutProps = {
}

export class LayoutComponent extends React.Component <LayoutProps, LayoutState> {
    constructor(props : LayoutProps) {
        super(props);
        this.state = {
            language : "en"
        }
    }

    changeLanguage = (lng:string) : void => {
        i18next.changeLanguage(lng)
        this.setState({...this.state, language:lng})
    }    
    render(){
        return <div className="page-layout" id="__layout">
            {Header(this.state.language, this.changeLanguage)}
            <main className="content container">
                <Switch>
                    <Route exact path='/' render={() => <h1>Coming soon!</h1>}/> 
                    <Route path='/cv' component={HomeComponent}/> 
                    <Route path='/test' render={(c) => <div>Hello dania</div>}/>
                    <Route path='/fabric' component={HomeFabricComponent}/>
                    <Route component={() => <h1>Not found..</h1>}/>
                </Switch>
            </main>
            {Footer()}
        </div>
    }
}
