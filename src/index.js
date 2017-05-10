// create a new react component that produces some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBda-yY6Pz_3P2WlkNpwWgwXiK2oW07OBE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
