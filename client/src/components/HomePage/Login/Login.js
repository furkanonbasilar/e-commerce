import React, { Component } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.scss";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required("Please Enter your Email"),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character"
    )
});

class Login extends Component {
  state = {
    isPasswordShown: false,
    isEmailFocused: false,
    isPasswordFocused: false
  };

  togglePasswordVisiblity = () => {
    this.setState(prevState => ({
      isPasswordShown: !prevState.isPasswordShown
    }));
  };

  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard
      >
        <Modal.Body>
          <Row style={{ flex: 1 }}>
            <Col className="sign-in">Sign In</Col>
          </Row>
          <Row className="details">
            <Col>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  email: "",
                  password: ""
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors
                }) => {
                  return (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="d-flex">
                          <p className="pl-1 form-header">Email</p>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          className={
                            ((errors.email && this.state.isEmailFocused) ||
                              (errors.email && touched.email)) &&
                            "invalid-control"
                          }
                          onFocus={() =>
                            this.setState(prevState => ({
                              isEmailFocused: !prevState.isEmailFocused
                            }))
                          }
                          onChange={handleChange}
                          value={values.email}
                          onBlur={e => {
                            this.setState(prevState => ({
                              isEmailFocused: !prevState.isEmailFocused
                            }));
                            handleBlur(e);
                          }}
                          placeholder="Enter email"
                        />
                        <span className="validation-message">
                          {(errors.email && this.state.isEmailFocused) ||
                          (errors.email && touched.email)
                            ? errors.email
                            : null}
                        </span>
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label className="d-flex justify-content-between">
                          <p className="pl-1 form-header">Password</p>
                          <p className="forget-pass">Forgot password</p>
                        </Form.Label>
                        <div style={{ position: "relative" }}>
                          <Form.Control
                            type={
                              this.state.isPasswordShown ? "text" : "password"
                            }
                            name="password"
                            className={
                              ((errors.password &&
                                this.state.isPasswordFocused) ||
                                (errors.password && touched.password)) &&
                              "invalid-control"
                            }
                            onChange={handleChange}
                            onFocus={() =>
                              this.setState(prevState => ({
                                isPasswordFocused: !prevState.isPasswordFocused
                              }))
                            }
                            onBlur={e => {
                              this.setState(prevState => ({
                                isPasswordFocused: !prevState.isPasswordFocused
                              }));
                              handleBlur(e);
                            }}
                            placeholder="Password"
                            value={values.password}
                          />
                          <i
                            className="fa fa-eye password-icon"
                            onClick={this.togglePasswordVisiblity}
                          />
                        </div>
                        <span className="validation-message">
                          {(errors.password && this.state.isPasswordFocused) ||
                          (errors.password && touched.password)
                            ? errors.password
                            : null}
                        </span>
                      </Form.Group>
                      <div className="d-flex justify-content-center">
                        <Button
                          id="login"
                          style={{ alignSelf: "center" }}
                          className="mt-2"
                        >
                          LOGIN
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
            <Col className="no-account">
              <p>I don't have an account</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Login;
