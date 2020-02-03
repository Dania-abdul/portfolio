import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { Route, Switch } from 'react-router-dom';
import { HomeComponent } from './home';
import { HomeFabricComponent } from './home_fabric';
import { Footer } from './footer';
import { Header } from './header'
import { DemoPostComponent } from './blog_posts/demo_post';

export type LayoutState = {
    language : string
}

export type LayoutProps = {
}
type PageName = string
export class LayoutComponent extends React.Component <LayoutProps, LayoutState> {
    constructor(props : LayoutProps) {
        super(props);
        this.state = {
            language : "en"
        }
    }
    getPathToPage = () : PageName => {
        let path = window.location.pathname.replace("/", "")
        return path
    }
    changeLanguage = (lng:string) : void => {
        i18next.changeLanguage(lng)
        this.setState({...this.state, language:lng})
    }    
    render(){
        return <div className={`page-layout ${this.getPathToPage()}`} id="__layout">
            {Header(this.state.language, this.changeLanguage)}
            <main className="content container">
                <Switch>
                    <Route exact path='/' render={() => <h1>Coming soon!</h1>}/> 
                    <Route path='/cv' component={HomeComponent}/> 
                    <Route path='/test' render={(c) => <div>Hello dania</div>}/>
                    <Route exact path='/fabric' component={HomeFabricComponent}/>
                    <Route path='/fabric/blogpage' component={DemoPostComponent}/>
                    <Route component={() => <h1>Not found..</h1>}/>
                </Switch>
            </main>
            {Footer()}
        </div>
    }
}
