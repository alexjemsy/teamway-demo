import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomePageHeader from './components/HomePageHeader';
import HomePageBody from './components/HomePageBody';

function App () {
  return (
    <Fragment>
      <HomePageHeader/>
      <HomePageBody/>
    </Fragment>
  );
}

export default App;
