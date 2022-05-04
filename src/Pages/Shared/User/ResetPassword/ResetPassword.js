import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../../firebase.config";
import Loading from "../../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  // Get react firebase hook for reset password
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // Handle reset password
  const handleResetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };

  // Show spinner when sending link
  if (sending) {
    return <Loading></Loading>;
  }

  // Handle Error
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Reset Your Password</h2>
          <Form onSubmit={handleResetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                Type your forget account email
              </Form.Text>
            </Form.Group>
            {errorElement}
            <Button variant="primary" type="submit">
              Reset
            </Button>
            <ToastContainer />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
