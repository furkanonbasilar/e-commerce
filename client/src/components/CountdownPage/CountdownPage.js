import React, { Component, Fragment } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { EmailEntry } from "assets/icons/CountdownSvg";
import "./CountdownPage.scss";
import { Row, Col, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email()
});

export default class CountdownPage extends Component {
  state = {
    countdown: null,
    isEmailFocused: false
  };

  componentDidMount() {
    axios.get("/api/countdown").then(response => {
      this.setState({ countdown: response.data[0].countdown });
    });
    this.interval = setInterval(
      () => this.setState({ countdown: this.state.countdown - 1000 }),
      1000
    );
  }

  render() {
    const { countdown } = this.state;
    const months = Math.floor(countdown / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (countdown % (1000 * 60 * 60 * 24 * 12)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    if (countdown === 0) {
      clearInterval(this.interval);
    }

    return (
      <Fragment>
        {countdown !== 0 ? (
          <div className="countdown-container">
            <Row className="circle_row">
              <Col className="release_header">
                <h1>We Will Release The Site!</h1>
                <h3>
                  We are working hard and estimated release time products below.
                </h3>
                <h3>
                  Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat
                  non lectus imperdiet.
                </h3>
              </Col>
              <Col className="circle_col">
                <div className="countdown_div">
                  <CircularProgressbar
                    value={months}
                    text={months.toString()}
                    strokeWidth={3}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                      pathColor: "#84bc22",
                      trailColor: "#b6bcc1",
                      textSize: 48,
                      textColor: "#45413e"
                    })}
                  />
                  <span className="countdown_div">Months</span>
                </div>
                <div>
                  <CircularProgressbar
                    value={days}
                    text={days.toString()}
                    strokeWidth={3}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                      pathColor: "#84bc22",
                      trailColor: "#b6bcc1",
                      textSize: 48,
                      textColor: "#45413e"
                    })}
                  />
                  <span className="countdown_div">Days</span>
                </div>
                <div>
                  <CircularProgressbar
                    value={hours}
                    text={hours.toString()}
                    strokeWidth={3}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                      pathColor: "#84bc22",
                      trailColor: "#b6bcc1",
                      textSize: 48,
                      textColor: "#45413e"
                    })}
                  />
                  <span className="countdown_div">Hours</span>
                </div>
                <div>
                  <CircularProgressbar
                    value={minutes}
                    text={minutes.toString()}
                    strokeWidth={3}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                      pathColor: "#84bc22",
                      trailColor: "#b6bcc1",
                      textSize: 48,
                      textColor: "#45413e"
                    })}
                  />
                  <span className="countdown_div">Minutes</span>
                </div>
                <div>
                  <CircularProgressbar
                    value={seconds}
                    text={seconds.toString()}
                    strokeWidth={3}
                    minValue={0}
                    maxValue={60}
                    styles={buildStyles({
                      pathColor: "#84bc22",
                      trailColor: "#b6bcc1",
                      textSize: 48,
                      textColor: "#45413e"
                    })}
                  />
                  <span className="countdown_div">Seconds</span>
                </div>
              </Col>
              <Col>
                <Formik
                  validationSchema={schema}
                  onSubmit={mail => {
                    axios
                      .post("/api/countdown", mail)
                      .then(response => console.log(response));
                  }}
                  initialValues={{
                    email: ""
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
                      <Form
                        noValidate
                        onSubmit={event => {
                          handleSubmit(event.target.value);
                          event.preventDefault();
                        }}
                      >
                        <Form.Group
                          className="form_group"
                          style={{ display: "flex" }}
                          controlId="formEmail"
                        >
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
                            placeholder="Enter your email to receive the latest announcements"
                          />
                          <span className="validation-message">
                            {(errors.email && this.state.isEmailFocused) ||
                            (errors.email && touched.email)
                              ? errors.email
                              : null}
                          </span>
                          <button
                            className="enter-email"
                            type={!errors ? "submit" : null}
                          >
                            <EmailEntry />
                          </button>
                        </Form.Group>
                      </Form>
                    );
                  }}
                </Formik>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="countdown-container">
            <h1 style={{ textAlign: "center" }}>WE ARE READY!!</h1>
          </div>
        )}
      </Fragment>
    );
  }
}
