import React from 'react';
import { Provider } from 'react-redux';

import SearchContainer from './search/search_container';
import ResultsContainer from './results/results_container';

const App = ({ store }) => (
  <Provider store={ store }>
    <div className="app">
      <main className="main">
        <h1 className="pageTitle">TuneDB</h1>
        <SearchContainer />
        <ResultsContainer />
      </main>
    </div>
  </Provider>
);

export default App;
