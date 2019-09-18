// Goal : Put error message into an error object and display those message under the input field if an error occurs
    validate = () => {

        // With Joi, I want to validate first argument (this.state.assets_information) according second argument (this.schema)
        // abortEarly : false = If Joi mets an error, the process is stop after the first error and I can't have the error message for the rest of the form 
        const result = Joi.validate(this.state.assets_information, this.schema, {abortEarly: false} );

        // After validation of the form, Joi sends an object. In this object, there is an "error" property which contains a "details" property which contains an array with our error messages (according what we put in this.schema)
        if(!result.error) {
            return null
        }

        // To put content of "message" of result.error.details into errors object
        let errors = {};
        for(let element of result.error.details) {
            errors[element.path[0]] = element.message;
        }
        return errors;
    }


    // Handle data after submitted the form 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.assets_information, null, 2));
        const errors = this.validate();
        this.setState({
            errors: errors || {}
        })
        // To go on advanced-forn page after submition
        this.props.history.replace('/advanced-form');
        console.log(errors);
    }

    // Conditions to validate the different input fields
    schema = {
        assetName: Joi.string().alphanum().min(1).max(30).required(),
        assetCode: Joi.number().min(5).max(30).required(),
        maxIssuanceAmount: Joi.number().max(30),
        type: Joi.boolean().valid(true).required()
    }