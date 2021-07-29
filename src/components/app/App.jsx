import React, { Component } from 'react';
import ArticArtworks from '../../containers/ArticArtworks';
import ArtDetail from '../../containers/ArtDetail';
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
        <h1>List of Artworks</h1>
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
                  <ArtDetail {...routerProps} />
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
