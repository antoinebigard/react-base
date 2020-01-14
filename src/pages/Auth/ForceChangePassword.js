import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";

import { changePassword } from "../../redux/Auth/actions";

const ForceChangePassword = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      newpassword: "",
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: ({ email, newpassword }, { setSubmitting }) => {
      dispatch(changePassword({ user, email, newpassword }));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <div>Change Password</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" onChange={handleChange} value={values.email} />
          {errors.email && touched.email && errors.email}
        </FormGroup>
        <FormGroup>
          <Label for="newpassword">Password</Label>
          <Input
            type="password"
            name="newpassword"
            id="newpassword"
            onChange={handleChange}
            value={values.newpassword}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ForceChangePassword;
