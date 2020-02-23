import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './assets/stylesheets/main.scss'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppContainer } from'react-hot-loader'
import { LayoutComponent } from './layout';




const App: React.FC = () => {
  
  return (
    <AppContainer>
        <Router basename={process.env.PUBLIC_URL}>          
          <LayoutComponent/>
        </Router>
    </AppContainer>
  );
}

export default App;
