import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik} from "formik";
import "./Create.css";


function Create() {
    const navigate = useNavigate();

    let formik = useFormik({

      initialValues : {
        name:"",
        position:"",
        age:"",
        office:"",
        startdate:"",
        salary:""

      },
      validate : (values) => {
        let errors = {}

        if(!values.name){
          errors.name="please enter name"
        } 
         if(!values.position){
          errors.position="please enter position"
        }
        if(!values.office){
          errors.office="please enter position"
        }
        if(!values.position){
          errors.position="please enter position"
        }
        if(!values.position){
          errors.position="please enter position"
        }
        


        return errors
 
      },

    onSubmit : (values) => {
      // console.log(values);
       fetch("http://localhost:3000/user",{
       method:"POST",
       body:JSON.stringify(values)

     })
  },
     

  })
    
  return (
    <>
    <div className="container">
    <h2>Generate User</h2>

  <form onSubmit={formik.handleSubmit}>
    
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={formik.handleChange}  value={formik.values.name} type="text" className="form-control" placeholder="" id="name" />
          {
            formik.errors.name ? <span style={{color:"red"}}>{formik.errors.name}</span> : null
          }
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input  name="position" onChange={formik.handleChange}  value={formik.values.position} type="text" className="form-control" placeholder="" id="position" />
          {
            formik.errors.position ? <span style={{color:"red"}}>{formik.errors.position}</span> : null
          }
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <input   name="office" onChange={formik.handleChange}  value={formik.values.office} type="text" className={`form-control ${formik.errors.office ? 'error-border' : ""}`} placeholde="" id="office" />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input  name="age" onChange={formik.handleChange}  value={formik.values.age} type="tel" className="form-control" id="phone" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    {/*  row   */}
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Start Date</label>
          <input  name="startdate" onChange={formik.handleChange}  value={formik.values.startdate} type="date" className="form-control" id="date" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input  name="salary" onChange={formik.handleChange}  value={formik.values.salary} type="tel" className="form-control" id="salary" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    {/* <button  onClick={()=>navigate("/tables")} type={"submit"} className="btn btn-primary">Submit</button> */}
    <input type={"submit"} value="submit" className='btn btn-primary' />
  </form>
</div>
    </>
  )
}

export default Create