import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import { Route, Switch } from 'react-router-dom';
import { CvComponent } from './cv_page';
import { HomeProjectsComponent } from './home_blog';
import { Footer } from './footer';
import { Header } from './header'
import { post1Component } from './blog_posts/post_1';
import { HomeComponent } from './home';

export type LayoutState = {
    language : string
    mode : 'dark' | 'light'
}

export type LayoutProps = {
}
type PageName = string
export class LayoutComponent extends React.Component <LayoutProps, LayoutState> {
    constructor(props : LayoutProps) {
        super(props);
        let theme : any = localStorage.getItem("theme") 
        if(theme == null || theme == undefined)
            theme = "light"
        this.state = {
            language : "en",
            mode :  theme
        }
    }
    getPathToPage = () : PageName => {
        let tmp = window.location.pathname.split("/").filter(e => e != "")
        let path = tmp[tmp.length - 1]
        return path
    }
    changeLanguage = (lng:string) : void => {
        i18next.changeLanguage(lng)
        this.setState({...this.state, language:lng})
    }    
    
    toggleMode = () : void => {
        this.setState({...this.state, mode:this.state.mode == "dark" ? "light" : "dark"}, () => {
            localStorage.setItem("theme", this.state.mode)
            document.documentElement.setAttribute('data-theme', this.state.mode);
        })
    }    
    componentDidMount(){
        document.documentElement.setAttribute('data-theme', this.state.mode);
    }

    render(){
        return <div className={`page-layout ${this.getPathToPage()}`} id="__layout">
            {Header(this.state.language, this.state.mode == "light",this.changeLanguage, this.toggleMode)}
            <main className="content container">
                <Switch>
                    <Route exact path='/' component={HomeComponent}/> 
                    <Route path='/cv' component={CvComponent}/> 
                    <Route exact path='/projects' component={HomeProjectsComponent}/>
                    <Route path='/projects/blog_post_1' component={post1Component}/>
                    <Route component={() => <h1>Not found.</h1>}/>
                </Switch>
            </main>
            {Footer()}
        </div>
    }
}
