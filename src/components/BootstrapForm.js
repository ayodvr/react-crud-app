import React, { Component } from 'react';

class BooststrapForm extends Component {

    state = {
        form: { firstname: "", lastname: "", email: "", isEdit: false},
        btnName: "Save",
        btnClass: "btn btn-primary"
    };

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.student)){
            // console.log("hsjsf");
            this.setState({
                form: { ...this.props.student, isEdit: true},
                btnName: "Update",
                btnClass: "btn btn-info"
            })
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    onFormSubmit = event => {
        event.preventDefault();

        //form validation

        if (this.formValidation){
            //send form data to app
            this.props.onFormSubmit(this.state.form);
        }
        //change the button to save

        this.setState({
            btnName: "Save",
            btnClass: "btn btn-info"
        })

        //clear form fields
        this.clearFormFields();
    };

    formValidation = () => {
        //firstname
        if(document.getElementsByName('firstname')[0].value === ""){
            alert(" Enter your firstname");
            document.forms["reactForm"]["firstname"].focus();
            return false;
        }

        //lastname
        if(document.getElementsByName('lastname')[0].value === ""){
            alert(" Enter your lastname");
            document.forms["reactForm"]["lastname"].focus();
            return false;
        }

        //email
        if(document.getElementsByName('email')[0].value === ""){
            alert(" Enter your email");
            document.forms["reactForm"]["email"].focus();
            return false;
        }
    };

    clearFormFields = () => {
        //change form state
        this.setState({
            form: { firstname: "", lastname: "", email: "", isEdit: false}
        });
        //clear form fields
        document.querySelector("#myform").reset();
    }

    render() {
        return (
           
            <div className="jumbotron">
                 <h1 style={{textAlign:"center",marginBottom:"50px"}}>Student's Record</h1>
                <form name="reactForm" id="myform" className="form-inline" action="/action_page.php">
                    <div className="form-group">
                        <label>Firstname:</label>
                        &nbsp;
                        &nbsp;
                        <input type="text" 
                        className="form-control" 
                        name="firstname" 
                        onChange={this.handleChange} 
                        value={this.state.form.firstname}/>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div className="form-group">
                        <label>Lastname:</label>
                        &nbsp;
                        &nbsp;
                        <input type="text" 
                        className="form-control" 
                        name="lastname" 
                        onChange={this.handleChange} 
                        value={this.state.form.lastname}/>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div className="form-group">
                        <label>Email:</label>
                        &nbsp;
                        &nbsp;
                        <input type="text" 
                        className="form-control" 
                        name="email"
                        onChange={this.handleChange} 
                        value={this.state.form.email}/>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button type="submit" 
                    className={this.state.btnClass} onClick={this.onFormSubmit}>
                        {this.state.btnName}
                    </button>
                </form>
            </div>
        );
    }
}

export default BooststrapForm;