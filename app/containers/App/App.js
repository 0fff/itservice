import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import NewContract from '../NewContract';
import CreateOrg from '../CreateOrg';
import EditOrg from '../EditOrg';
import CustomSelect from '../CustomSelect';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/home" component={NewContract} />
      <Route exact path="/123" component={CreateOrg} />
      <Route exact path="/Editorg" component={CustomSelect} />
    </Switch>
  </div>
);

export default App;
