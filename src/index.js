import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const favoriteCars = ['Honda CR-V ', 'Toyota Highlander', 'Ford F-150', 'BMW X3', 'Subaru Crosstrek']

  return (
    <div>
      <List favoriteCars={favoriteCars} />
    </div>
  );
};

const List = props => {
  const listCars = props.favoriteCars.map(
    (favoriteCars, index) => (
    <li key={index}>
      {favoriteCars}
    </li>
  ));

  return <ol>{listCars}</ol>;
};

ReactDOM.render(<App />, document.getElementById('root'));
