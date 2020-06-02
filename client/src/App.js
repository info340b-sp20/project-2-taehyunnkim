import React from 'react';
import NavigationBar from './components/NavigationBar';
import OrganizationList from './components/OrganizationPage';
import ORGANIZATIONS from './assets/organizations.json';
import Dashboard from './components/Dashboard';
import DisasterDetails from './components/DisasterDetails';
import AboutPage from './components/AboutPage'
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

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
        <Route path='/about' component={AboutPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;