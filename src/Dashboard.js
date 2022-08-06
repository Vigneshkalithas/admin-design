import React from "react";
import Card from "./Card";

function Dashboard() {
  const CardData = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40,000",
      theme: "primary",
      icon: "fas fa-calendar",
    },
    {
      title: "Earnings (Annual)",
      price: "$215,000",
      theme: "success",
      icon: "fas fa-dollar-sign",
    },
    {
      title: "Tasks",
      price: "50%",
      theme: "info",
      icon: "fas fa-clipboard-list",
    },
    {
      title: "Pending Requests",
      price: "18",
      theme: "warning",
      icon: "fas fa-comments",
    },
  ];
  return (
    <>
      {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a>
      </div>
      <div className="row">
        {CardData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div> */}
   


    <div className="container">
     



 <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a>
      </div>
      <div className="row">
        {CardData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div> 




      

      <div className="row">
        <div className="col-lg-6">
          <div className="row m-3">
            <div className=" col-lg-6 ">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h6 className="card-title">Primary</h6>
                  <p className="text-white">#4e73df</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-secondary mb-3">
                <div className="card-body">
                  <h6 className="card-title">Secondary</h6>
                  <p className="text-white">#858796</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h6 className="card-title">Success</h6>
                  <p className="text-white">#1cc88a</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h6 className="card-title">Danger</h6>
                  <p className="text-white">#e74a3b</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-warning  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Warning </h6>
                  <p className="text-white">#f6c23e</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-info  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Info </h6>
                  <p className="text-white">#36b9cc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-dark bg-light  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Light </h6>
                  <p className="text-dark">#f8f9fc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-dark  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Dark </h6>
                  <p className="text-white">#5a5c69</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-3">
            <div className="card-header font-weight-bold text-primary">
              Development Approach
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance.{" "}
              </p>
              <p>
                Custom CSS classes are used to create custom components and
                custom utility classes. Before working with this theme, you
                should become familiar with the Bootstrap framework, especially
                the utility classes.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header font-weight-bold text-primary">
              Illustrations
            </div>
            <div className="card-body">
              <img
                className="dashboardimg img-responsive"
                src="https://squarera.com/wp-content/uploads/2020/12/undraw_posting_photo_v65l-1024x599.png"
              />
              <p>
                Add some quality, svg illustrations to your project courtesy of
                unDraw, a constantly updated collection of beautiful svg images
                that you can use completely free and without attribution!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Dashboard;
