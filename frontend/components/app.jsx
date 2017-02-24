import React from 'react';
import SearchContainer from './search/search_container';
import ResultsContainer from './results/results_container';

const App = () => (
  <div className="app">
    <main className="main">
      <h1>TuneDB</h1>
      <SearchContainer />
      <ResultsContainer />
    </main>
  </div>
);

export default App;
