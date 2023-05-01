import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik} from 'formik';



const Register = () => {

  const formik=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate:values => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email can't be empty!!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address!!';
      }
      if(!values.password)
      {
         errors.password="Password can't be empty!!";
      }
      if(!values.password_confirmation)
      {
         errors.password_confirmation="Confirm Password!";
      }else if(values.password!=values.password_confirmation)
      {
         errors.password_confirmation="Password & Confirm Password mismatch!!";
      }
      return errors;
    },
    onSubmit:values=>{
      console.log(values)
    }
  });

  return (
    <div className="col-md-12">
      <div className="card card-container">
      <h5 className="text-primary">Signup Here</h5>
      <Formik>
       {({ isSubmitting }) => (
         <Form onSubmit={formik.handleSubmit}>
           <Field type="email" name="email" className="form-control" placeholder="Email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}/>
           {formik.touched.email?(<span className="text-danger">{formik.errors.email}</span>):null}
           <Field type="password" name="password" className="form-control mt-2" onBlur={formik.handleBlur}  placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
           {formik.touched.password?(<span className="text-danger">{formik.errors.password}</span>):null}
           <Field type="password" name="password_confirmation" className="form-control mt-2" onBlur={formik.handleBlur}  placeholder="Confirm Password" value={formik.values.password_confirmation} onChange={formik.handleChange} />
           {formik.touched.password_confirmation?(<span className="text-danger">{formik.errors.password_confirmation}</span>):null}
           <div className="col-md-12">
              <button type="submit" className="btn btn-sm btn-info mt-2 float-right">Signup</button>
           </div>
         </Form>
       )}
     </Formik>
        
      </div>
    </div>
  );
};

export default Register;