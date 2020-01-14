import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";

import { push } from "connected-react-router";

import { signIn } from "../../redux/Auth/actions";

const SignIn = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(push("/"));
  // }, [dispatch]);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ username, password }, { setSubmitting }) => {
      dispatch(signIn({ username, password }));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <div>Sign In</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" onChange={handleChange} value={values.username} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" onChange={handleChange} value={values.password} />
        </FormGroup>
        <Button type="submit">Sign in</Button>
        <Button type="button">Sign up</Button>
        <Button type="button">Forgot password</Button>
      </Form>
    </div>
  );
};

export default SignIn;
