import React, { Component } from 'react';
import './index.scss';
import FormsCreate from './components/FormsCreate/index';
import CardForm from './components/CardForm';

class Forms extends Component {
  render() {
    return (
      <div>
        <FormsCreate />
        <CardForm />
      </div>
    );
  }
}

export default Forms;
