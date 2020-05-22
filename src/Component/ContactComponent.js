//this is using redux methof of form, below commented used controlled form method
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Input, Col, Row, FormFeedback, handleBlur } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content" >
                    <div className="col-12 contact">
                        <div className="contact">
                            <h3><center>Location Information</center></h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +8005 4681 43<br />
                            <i className="fa fa-fax"></i>: +7985 7942 19<br />
                            <i className="fa fa-envelope"></i>: <a href="harshitmaurya903@gmail.com">harshitmaurya903@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+8005 4681 43"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="harshitmaurya903@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <h2></h2>
                        <hr />
                    </div>
                    <div className="row row-content" >
                        <div className="col-12 contact">
                            <div className="contact">
                                <h3><center>Send Us Your Feedback</center></h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            {/* <Form onSubmit={this.handleSubmit}> */}
                            {/* <FormGroup row > */}

                            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={3}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 20 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={3}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 20 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                                    <Col md={10}>
                                        <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Tel. Number"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20), isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".telnum"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 numbers',
                                                maxLength: 'Must be 20 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                validEmail: 'Invalid Email Address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 6, offset: 0 }}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-check-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={5}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="7"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                    </Button>
                                    </Col>
                                </Row>
                            </Form>
                            {/* </center> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;

//Below code is older version in which we used feedback form as COntrolled form but the above one uses Redux method
// import React, {Component} from 'react';
// import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback, handleBlur} from 'reactstrap';
// import {Link} from 'react-router-dom';

// class Contact extends Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             firstname: '',
//             lastname: '',
//             telnum: '',
//             email: '',
//             agree: false,
//             contactType: 'Tel.',
//             message: '',
//             touched: {
//                 firstname: false,
//                 lastname: false,
//                 telnum: false,
//                 email: false
//             }
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleblur = this.handleBlur.bind(this);

//     }
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit(event) {
//         console.log('Current State is: ' + JSON.stringify(this.state));
//         alert('Current State is: ' + JSON.stringify(this.state));
//         event.preventDefault();    //to prevent the default behaviour (i.e. to goto next page after form submission )
//     }
//     handleBlur = (field) => (evt) => {
//         this.setState({
//             touched: { ...this.state.touched, [field]: true }

//         });
//     }

//     validate(firstname, lastname, telnum, email) {
//         const errors = {
//             firstname: '',
//             lastname: '',
//             telnum: '',
//             email: '',

//         };
//         if (this.state.touched.firstname && firstname.length < 3)
//             errors.firstname = 'First name should be more than 3 characters';
//         else if (this.state.touched.firstname && firstname.length > 20)
//             errors.firstname = 'First name should be less than 20 characters';

//         if (this.state.touched.lastname && lastname.length < 3)
//             errors.firstname = 'Last name should be more than 3 characters';
//         else if (this.state.touched.lastname && lastname.length > 20)
//             errors.firstname = 'Last name should be less than 20 characters';

//         const reg = /^\d+$/;
//         if (this.state.touched.telnum && !reg.test(telnum))
//             errors.telnum = 'Tel. Number should be all numbers';

//         if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
//             errors.email = 'Email should contain @';

//         return errors;
//     }

//     render() {
//         const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>Contact Us</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>Contact Us</h3>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row row-content" >
//                     <div className="col-12 contact">
//                         <div className="contact">
//                             <h3><center>Location Information</center></h3>
//                         </div>
//                     </div>
//                     <div className="col-12 col-sm-4 offset-sm-1">
//                         <h5>Our Address</h5>
//                         <address>
//                             121, Clear Water Bay Road<br />
//                         Clear Water Bay, Kowloon<br />
//                         HONG KONG<br />
//                             <i className="fa fa-phone"></i>: +8005 4681 43<br />
//                             <i className="fa fa-fax"></i>: +7985 7942 19<br />
//                             <i className="fa fa-envelope"></i>: <a href="harshitmaurya903@gmail.com">harshitmaurya903@gmail.com</a>
//                         </address>
//                     </div>
//                     <div className="col-12 col-sm-6 offset-sm-1">
//                         <h5>Map of our Location</h5>
//                     </div>
//                     <div className="col-12 col-sm-11 offset-sm-1">
//                         <div className="btn-group" role="group">
//                             <a role="button" className="btn btn-primary" href="tel:+8005 4681 43"><i className="fa fa-phone"></i> Call</a>
//                             <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
//                             <a role="button" className="btn btn-success" href="harshitmaurya903@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
//                         </div>
//                     </div>
//                     <div className="col-12">
//                         <h2></h2>
//                         <hr />
//                     </div>
//                     <div className="row row-content" >
//                         <div className="col-12 contact">
//                             <div className="contact">
//                                 <h3><center>Send Us Your Feedback</center></h3>
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-9">
//                             <Form onSubmit={this.handleSubmit}>
//                                 <FormGroup row >

//                                     <Label htmlFor="firstname" md={3}>First Name</Label>

//                                     <Col md={10}>
//                                         <Input type="text" id="firstname" name="firstname"
//                                             placeholder="First Name"
//                                             value={this.state.firstname}
//                                             valid={errors.firstname === ''}
//                                             invalid={errors.firstname !== ''}
//                                             onBlur={this.handleBlur('firstname')}
//                                             onChange={this.handleInputChange} />
//                                         <FormFeedback>{errors.firstname}</FormFeedback>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="lastname" md={3}>Last Name</Label>
//                                     <Col md={10}>
//                                         <Input type="text" id="lastname" name="lastname"
//                                             placeholder="Last Name"
//                                             value={this.state.lastname}
//                                             valid={errors.lastname === ''}
//                                             invalid={errors.lastname !== ''}
//                                             onBlur={this.handleBlur('lastname')}
//                                             onChange={this.handleInputChange} />
//                                         <FormFeedback>{errors.lastname}</FormFeedback>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
//                                     <Col md={10}>
//                                         <Input type="tel" id="telnum" name="telnum"
//                                             placeholder="Tel. Number"
//                                             value={this.state.telnum}
//                                             valid={errors.telnum === ''}
//                                             invalid={errors.telnum !== ''}
//                                             onBlur={this.handleBlur('telnum')}
//                                             onChange={this.handleInputChange} />
//                                         <FormFeedback>{errors.telnum}</FormFeedback>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="email" md={3}>Email</Label>
//                                     <Col md={10}>
//                                         <Input type="email" id="email" name="email"
//                                             placeholder="Email"
//                                             value={this.state.email}
//                                             valid={errors.email === ''}
//                                             invalid={errors.email !== ''}
//                                             onBlur={this.handleBlur('email')}
//                                             onChange={this.handleInputChange} />
//                                         <FormFeedback>{errors.email}</FormFeedback>
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup row>
//                                     <Col md={{ size: 6, offset: 0 }}>
//                                         <FormGroup check>
//                                             <Label check>
//                                                 <Input type="checkbox"
//                                                     name="agree"
//                                                     checked={this.state.agree}
//                                                     onChange={this.handleInputChange} /> {' '}
//                                                 <strong>May we contact you?</strong>
//                                             </Label>
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md={{ size: 3, offset: 1 }}>
//                                         <Input type="select" name="contactType"
//                                             value={this.state.contactType}
//                                             onChange={this.handleInputChange}>
//                                             <option>Tel.</option>
//                                             <option>Email</option>
//                                         </Input>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="message" md={5}>Your Response</Label>
//                                     <Col md={10}>
//                                         <Input type="textarea" id="message" name="message"
//                                             rows="7"
//                                             value={this.state.message}
//                                             onChange={this.handleInputChange}></Input>
//                                     </Col>
//                                 </FormGroup>
//                                 <center>
//                                     <FormGroup row>

//                                         <Col md={{ size: 10, offset: 2 }}>
//                                             <Button type="submit" color="primary">
//                                                 Send Feedback
//                                     </Button>
//                                         </Col>
//                                     </FormGroup>
//                                 </center>
//                             </Form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Contact;