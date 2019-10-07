import React, { Component } from 'react';
import Button from '../button/button.jsx';
import Input from '../input/input.jsx';
import Joi from 'joi-browser';
// import style from './form.module.scss';
// import styled from 'styled-components';

class Form extends Component {

    state = {
        listState: false,
        // creer le contenu de from_datas de maniére dynamique
        form_datas: this.props.contentForm,
           /* assetName: '',
            assetCode: '',
            maxIssuanceAmount: '',
            typeAsset: [],
            fileUpload: [],
            initialPreIssuedAmount: '',
            preIssuanceAssetSignerId: '',
            additionnalIssuanceOrNot: '',
            */
           
        errors: {}
    };

    schema = {
        assetName: Joi.string().alphanum().min(5).max(20).required(),
        assetCode: Joi.number().min(5).max(20).required(),
        maxIssuanceAmount: Joi.number().min(1).required(),
        InitialPreIssuedAmount: Joi.number().min(1).required(),
        PreIssuanceAssetSignerId: Joi.number().min(10).max(10).required(),
        typeAsset: Joi.boolean().required(),
        AdditionnalIssuanceOrNot: Joi.number().min(1).required(),
    }

// validate field with Joi
    validate = () => {
        const result = Joi.validate(this.state.form_datas, this.schema, {abortEarly: false});
    
        if(!result.error) {
            return null;
        }
        
        const errors = {};
        for(let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }  
        return errors;
    }


// Open or close List with checkbox input 
    openList = (e) => {
        if(e) {
            this.setState({
                listState: true
            });
        }
        if(e && this.state.listState === true) {
            this.setState({
                listState: false
            })
        }
    }

// Handle datas after form submission
    handleSubmit = (e) => {
        e.preventDefault();
        this.handleDisplayData();
        const errors = this.validate();
        this.setState({
            errors: errors || {}
        });
    }

// Handle change for all input fields
    handleChange = (e) => {
        const form_datas = {...this.state.form_datas};
        form_datas[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            form_datas
        });
        if(e.currentTarget.type === "checkbox") {
            this.handleChangeCheckbox(e);
        }
        if(e.currentTarget.type === "file") {
            this.handleChangeFileUpload(e);
        }
    }

// Handle change for checkbox
    handleChangeCheckbox = (e) => {
        const form_datas = {...this.state.form_datas};
        form_datas.typeAsset = [...form_datas.typeAsset, e.currentTarget.name + ': ' + e.currentTarget.checked];
        this.setState({
            form_datas
        });
    }

// Handle change for File Upload
    handleChangeFileUpload = (e) => {
        const form_datas = {...this.state.form_datas};
        form_datas.fileUpload = e.currentTarget.value;
        this.setState({
            form_datas
        });
    }

// Display data from form in the browser console
    handleDisplayData = () => {
        if(this.props.location.pathname === '/assets-information-form') {
            this.props.history.replace('/advanced-form');
            console.log(JSON.stringify(this.state.form_datas, null, 2));
        } 
        else {
            console.log(JSON.stringify(this.state.form_datas, null, 2));
        }
    }

// Delete placeholder on focus
    handleClearPlaceholder = (e) => {
        e.currentTarget.placeholder = "";
    }

    render() {

        const { contentForm, textForButton } = this.props;
        const { errors, listState } = this.state;
        console.log(this.state.form_datas);

        return (

            <React.Fragment>

                <form onSubmit={this.handleSubmit}>

                    <Input 
                        obj={contentForm}
                        handleChange={this.handleChange} 
                        listState={listState}
                        openListOrClose={this.openList}
                        error={errors}
                        onFocus={this.handleClearPlaceholder}
                        // minLength="5"
                        // maxLength="30"
                    /> 

                    <Button 
                        widthButton= "200px"
                        heightButton= "50px"
                        textButton={textForButton}
                        // Deactivated Button while input fields are empty
                        // By default, disabled={true} -> deactivated
                        // If this.validate() === false -> there is no error -> disabled={false}
                        // disabled={this.validate()}
                    />

                </form>

            </React.Fragment>
        )
    }

};

export default Form;