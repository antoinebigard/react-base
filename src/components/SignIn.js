import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";

import { signIn } from "../redux/Auth/actions";

const SignIn = () => {
  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ username, password }, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(signIn({ username, password }));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <div>Sign In</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">User</Label>
          <Input type="text" name="username" id="username" onChange={handleChange} value={values.username} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" onChange={handleChange} value={values.password} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignIn;
