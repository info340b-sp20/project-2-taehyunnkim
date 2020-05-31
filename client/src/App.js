import React from 'react';
import NavigationBar from './components/NavigationBar';
import OrganizationList from './components/OrganizationPage';
import ORGANIZATIONS from './assets/organizations.json';
import Dashboard from './components/Dashboard';
import DisasterDetails from './components/DisasterDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/articles/:data' component={DisasterDetails} />
        <Route path='/donate'>
          <OrganizationList organizations = {ORGANIZATIONS} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;