import React, { Fragment, useState } from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<string>('');

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
        <input type='text' required/>
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
}

export default App;
