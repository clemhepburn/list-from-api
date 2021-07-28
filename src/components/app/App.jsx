import React, { Component } from 'react';
import ArticArtworks from '../../containers/ArticArtworks';
import ArtworkDetail from '../artworks/ArtworkDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <ArticArtworks {...routerProps} />
                )}
              />

              <Route path="/:id" exact={true}
                render={routerProps => (
                  <ArtworkDetail {...routerProps} />
                )}
              />
              <Redirect to="/" />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }

}

export default App;
