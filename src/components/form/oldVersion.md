import React, { Component } from 'react';
import Button from '../button/button.jsx';
import Input from '../input/input.jsx';
import style from './form.module.scss'
import Joi from 'joi-browser';
// import styled from 'styled-components';

class Form extends Component {

    state = {
        listOpen: false,
        assets_information: {
            assetName: '',
            assetCode: '',
            maxIssuanceAmount: '',
            type: '',
            uploadedFile: 
        },
        advanced: {
            InitialPreIssuedAmount: '',
            PreIssuanceAssetSignerId: '',
            AdditionnalIssuanceOrNot: ''
        },
        // errors: {}
    };


// Open or close List with checkbox input 
    openList = (e) => {
        if(e) {
            this.setState({
                listOpen: true
            });
        }
        if(e && this.state.listOpen === true) {
            this.setState({
                listOpen: false
            })
        }
    }

// Handle data after submitted the form 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.assets_information, null, 2));
        // To go on advanced-forn page after submition
        this.props.history.replace('/advanced-form');
    }

// Handle change for input field
    handleChange = (e) => {
        const assets_information = {...this.state.assets_information};
        assets_information[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            assets_information: assets_information
        });
    }

// Handle change for checkbox
    handleChangeCheckbox = (e) => {
        const assets_information = {...this.state.assets_information};
        assets_information.type = e.currentTarget.name;
        this.setState({
            assets_information: assets_information
        })
    }

// 

    render() {

        return (

            <React.Fragment>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className={style.inputContainer}>

                        {this.props.contentForm.map((content, index) => 

                            <React.Fragment key={content._id}>

                                {content.type === "text" && <React.Fragment>

                                    <Input 
                                        obj={content}
                                        key={content._id} 
                                        type={content.type} 
                                        id={content.name}
                                        name={content.name}
                                        placeholder={content.placeholder} 
                                        value={this.state.assets_information[index]}
                                        onChange={this.handleChange}
                                        label={content.label}
                                        listClosedOrOpened={this.state.listOpen}
                                        minLength="1"
                                        maxLength="30"
                                        className={style.input}
                                        // errorMessage={this.state.errors}
                                    />

                                </React.Fragment> }

                                {/* If content.type === "select" is true, I want to display a field with the title "Type" */}
                                {content.type !== "text" && <div className={style.mainContainer}>

                                    <div className={style.listCheckbox} onClick={this.openList}>
                                         <p id={style.title}>{content.placeholder}</p>
                                    </div>

                                    {/* If listOpen is true, I want to display checkbox inputs + upload file input */}
                                    {this.state.listOpen && content.label.map((labelTitle, index) =>

                                        // Container for label and checkbox
                                        <div key={index} className={style.checkboxAndLabelContainer}>

                                            {/* Container for label */}
                                            <div className={style.labelContainer}>
                                                <label key={index} className={style.label}>{labelTitle}</label>
                                            </div>

                                            {/* Container for checkbox inputs */}
                                            <div className={style.checkboxContainer}>
                                                <Input
                                                    key={index} 
                                                    type="checkbox"
                                                    id={index}
                                                    name={labelTitle}
                                                    value={this.state.advanced.type} 
                                                    onChange={this.handleChangeCheckbox} 
                                                />
                                            </div>

                                        </div> )}

                                        {/* To display "upload file" input at the same as time as the checkbox list */}
                                        {this.state.listOpen && <div className={style.uploadFileContainer}>
                                            <label htmlFor="file-upload">Asset icon:</label>
                                                <Input
                                                    type="file"
                                                    id="file-upload" 
                                                    name="file-upload"
                                                    accept="image/png, image/jpeg"
                                                    value={this.state.assets_information.uploadedFile} 
                                                    onChange={this.handleChange} 
                                                />
                                        </div> }
                                
                                 </div> }

                            </React.Fragment> )}

                    </div>

                        <Button textButton="Next" />

                </form>

            </React.Fragment>
        )
    }

};

export default Form;