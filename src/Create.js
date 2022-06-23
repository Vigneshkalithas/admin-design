import React from 'react';
import { useNavigate } from 'react-router-dom';


function Create() {
    const navigate = useNavigate();

  return (
    <>
    <div className="container">
  <form>
    <h2>Generate User</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder id="name" />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input type="text" className="form-control" placeholder id="position" />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <input type="text" className="form-control" placeholder id="office" />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="tel" className="form-control" id="phone" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    {/*  row   */}
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Start Date</label>
          <input type="date" className="form-control" id="date" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input type="tel" className="form-control" id="salary" placeholder="" />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    <button  onClick={()=>navigate("/tables")} type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
    </>
  )
}

export default Create