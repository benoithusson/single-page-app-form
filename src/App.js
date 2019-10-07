import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Form from './components/form/form.jsx';
import './App.module.scss';

class App extends Component {

  state = {}; // Utiliser quand un composant va changer de manière dynamique

  form =  {
      assets_information: [
      {_id: 1, type: "text", name: "assetName", placeholder: "Asset name", label: ""},
      {_id: 2, type: "text", name: "assetCode", placeholder: "Asset code", label: ""},
      {_id: 3, type: "text", name: "maxIssuanceAmount", placeholder: "Max issuance amount", label: ""},
      {_id: 4, type: "select", name: "type", placeholder: "Type", label: ["Transferable", "Withdrawable"]},
      {_id: 5, type: "file", name: "Assets Icon", placeholder: "Asset Icon", label: "" },
    ],
    advanced: [
      {_id: 1, type: "checkbox", name: "additionnalIssuanceOrNot", placeholder: "", label: "I do not want to make additional issuance later"},
      {_id: 2, type: "text", name: "initialPreIssuedAmount", placeholder: "Initial pre-issued amount", label: ""},
      {_id: 3, type: "text", name: "preIssuanceAssetSignerId", placeholder: "Pre-issuance asset signer ID", label: ""},
      {_id: 4, type: "file", name: "Assets Terms", placeholder: "Upload Terms", label: ""},
    ],
  }

  render() {

    return (
      
      <React.Fragment>
  
          <Home />
  
          <Route 
            path="/assets-information-form" 
            exact 
            component={(props) => 
              <Form 
                contentForm={this.form.assets_information}
                textForButton="Next"
                {...props} 
              /> 
            } 
          />

        <Route 
            path="/advanced-form" 
            exact 
            component={(props) =>
              <Form 
                contentForm={this.form.advanced}
                textForButton="Create Request"
                {...props} 
              /> 
            } 
          />
  
      </React.Fragment>
    );
  }
}


export default App;
