import React from 'react';
import FormComponent from './Components/FillableForm';
import DoubleFormComponent from './Components/FillableForm2';
import InputField from './Components/InputField';
import './App.css';

const Styles = () => {
  return (
    <div className="my-style">
      <h2>MyStyle</h2>
      <button className="button">Submit</button>
    </div>
  );
};
function App() {
  return (
    <div className="app">
      <h1>My React App</h1>
      <FormComponent />
    </div>
      
  );
}

export default App;








      
    



