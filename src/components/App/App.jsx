import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feelings from '../Feelings/Feelings';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';



function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Route path='/comments' exact component={Comments} />
      <Route path='/' exact component={Feelings} />
      <Route path='/review' exact component={Review} />
      <Route path='/support' exact component={Support} />
      <Route path='/understanding' exact component={Understanding} />

    </div>
    </Router>
  );
}

export default App;
