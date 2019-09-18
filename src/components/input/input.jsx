import React, { Component } from 'react';
import style from './input.module.scss';

class Input extends Component {


    render() {

        return (
    
            <div className={style.inputContainer}>

                {this.props.obj.map((input, index) => 

                    <React.Fragment key={index}>

                        {input.type === "text" && 
                            <input 
                                key={input._id} 
                                id={input.name}
                                type={input.type} 
                                name={input.name}
                                placeholder={input.placeholder} 
                                label={input.label}
                                accept={input.accept}
                                value={this.props.value}
                                onChange={this.props.handleChange}
                                onFocus={(e) => this.props.onFocus(e)}
                                minLength={this.props.minLength}
                                maxLength={this.props.maxLength}
                            /> 
                        }
                        
                        {/* 
                            > Here, select does not refer to <select>
                            > It is a keyword to refer to a list with several checkbox
                            > If input.type = select -> There are several choices and I want to display a list of checkbox
                            > If input.type = checkbox -> There is one choice and I want do display only one checkbox
                        */}
                        {input.type === "select" && <div className={style.mainContainer}>

                            <div className={style.list} onClick={this.props.openListOrClose}>
                                <p id={style.title}>{input.placeholder}</p>
                            </div>

                            {/* To display multiple checkbox in a list */}
                            {this.props.listState && input.label.map((labelTitle, index) => 

                                // Container for label container and checkbox container
                                <div key={index} className={style.checkboxAndLabelContainer}>

                                    {/* Container for label */}
                                    <div className={style.labelContainer}>
                                        <label key={index} className={style.label}>{labelTitle}</label>
                                    </div>

                                    {/* Container for checkbox inputs */}
                                    <div className={style.checkboxContainer}>
                                        <input
                                            key={index}
                                            type="checkbox"
                                            name={labelTitle}
                                            value={this.props.value}
                                            onChange={this.props.handleChange}
                                        />
                                    </div>
                                    
                                </div>
                            )}
                                
                        </div>}

                            {/* If input.type === checkbox, I want to display only one checkbox */}
                            {input.type === "checkbox" && <div key={index} className={style.checkboxAndLabelContainer2}> 

                                    <div className={style.labelContainer2}>
                                        <label key={index} className={style.label2}>{input.label}</label>
                                    </div>
                                
                                    <div className={style.checkboxContainer2}>
                                        <input
                                            id={input._id}
                                            type={input.type}
                                            name={input.label}
                                            value={this.props.value}
                                            onChange={this.props.handleChange}
                                        />
                                    </div>

                                </div>}

                                {/* If input.type === file */}
                                {input.type === "file" && <div className={style.uploadFileInputContainer}>

                                    <label htmlFor="file-upload">{input.placeholder}</label>
                                        <input
                                            type={input.type}
                                            id={input._id}
                                            name={input.name}
                                            accept="image/png, image/jpeg"
                                            onChange={this.props.handleChange} 
                                        />

                                </div>}

            </React.Fragment>)}
    
            </div>
        )
    }
}

export default Input;
