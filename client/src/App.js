import React from 'react';
import NavigationBar from './components/NavigationBar';
import OrganizationList from './components/OrganizationPage';
import ORGANIZATIONS from './assets/organizations.json';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <OrganizationList organizations = {ORGANIZATIONS} />
    </div>
  );
}

export default App;