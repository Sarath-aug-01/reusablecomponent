import React from 'react';
import { Form } from 'react-bootstrap';
import InputControl from './components/InputControl';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
    <div className="main">
      <h1>EXERCISE 8</h1>
      <h1>Reusable components</h1>
      <div className="search-form">
        <Form>
          <InputControl
            name="Fruit"
            label="Enter Fruit"
            placeholder="Type a Fruit name"
          />
        </Form>
      </div>
    </div>
    </header>
    </div>
  );
};

export default App;