import React from 'react';
import NavigationBar from './components/NavigationBar';
import OrganizationList from './components/OrganizationPage';
import ORGANIZATIONS from './assets/organizations.json';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <OrganizationList organizations = {ORGANIZATIONS} />
      <Dashboard />
    </div>
  );
}

export default App;