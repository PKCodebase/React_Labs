import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_BASE_URL } from "./config"; // Import API URL

const validationSchema = Yup.object({
  sname: Yup.string().min(3, "Too Short!").required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  gender: Yup.string().required("Gender is required"),
  timing: Yup.string().required("Preferred timing is required"),
  courses: Yup.array().min(1, "Select at least one course"),
  remarks: Yup.string().max(200, "Too long! (Max 200 chars)"),
});

const Register = () => {
  return (
    <div className="container mt-5 p-4 border rounded bg-white shadow-lg">
      <h3 className="text-center text-primary fw-bold">Registration Form</h3>
      <Formik
        initialValues={{
          sname: "",
          email: "",
          phone: "",
          gender: "",
          timing: "",
          courses: [],
          remarks: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Sending JSON:", JSON.stringify(values, null, 2)); // Log JSON data
        
          fetch(`${API_BASE_URL}/registrations`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then(async response => {
              const responseData = await response.text();
              if (!response.ok) throw new Error(responseData || "Something went wrong!");
              alert("Registration successful!");
              resetForm();
            })
            .catch(error => {
              console.error( error);
              alert( error.message);
            });
        }}
        
      >
        {({ values, handleChange }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <Field type="text" name="sname" className="form-control" />
              <ErrorMessage name="sname" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Phone</label>
              <Field type="tel" name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Gender</label>
              <Field as="select" name="gender" className="form-select">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Preferred Timing</label>
              <Field as="select" name="timing" className="form-select">
                <option value="">Select</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </Field>
              <ErrorMessage name="timing" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Courses</label>
              {["Java", "Spring Boot", "React", "MySQL"].map((course) => (
                <div key={course} className="form-check">
                  <Field type="checkbox" name="courses" value={course} className="form-check-input" />
                  <label className="form-check-label">{course}</label>
                </div>
              ))}
              <ErrorMessage name="courses" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Remarks</label>
              <Field as="textarea" name="remarks" className="form-control" rows="3" />
              <ErrorMessage name="remarks" component="div" className="text-danger small" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
