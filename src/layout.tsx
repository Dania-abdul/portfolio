import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CvComponent } from './cv_page';
import { HomeBlogComponent } from './home_blog';
import { Footer } from './footer';
import { Header } from './header'
import { post1Component } from './blog_posts/post_1';
import { HomeComponent } from './home';

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
                <HashRouter basename='/'>
                    <Switch>
                        <Route exact path='/' component={HomeComponent}/> 
                        <Route path='/cv' component={CvComponent}/> 
                        <Route exact path='/blog' component={HomeBlogComponent}/>
                        <Route path='/blog/blog_post_1' component={post1Component}/>
                        <Route component={() => <h1>Not found..</h1>}/>
                    </Switch>
                </HashRouter>
            </main>
            {Footer()}
        </div>
    }
}
