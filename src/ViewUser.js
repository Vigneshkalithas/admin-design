import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ViewUser() {
  let { userId } = useParams();
  const [searchParams, setSearchparams] = useSearchParams();


  //   {
  //     id: 1,
  //     name: "Tiger Nixon",
  //     position: "System Architect",
  //     office: "Edinburgh",
  //     age: "61",
  //     date: "2011/04/25",
  //     salary: "$320",
  //   },
  //   {
  //     id: 2,
  //     name: "Garrett Winters",
  //     position: "Accountant",
  //     office: "Tokyo",
  //     age: "63",
  //     date: "2011/07/25",
  //     salary: "$170",
  //   },
  //   {
  //     id: 3,
  //     name: "Ashton Cox",
  //     position: "Junior Technical Author",
  //     office: "San Francisco",
  //     age: "66",
  //     date: "2009/01/12",
  //     salary: "$86",
  //   },
  //   {
  //     id: 4,
  //     name: "Cedric Kelly",
  //     position: "Senior Javascript Developer",
  //     office: "Edinburgh",
  //     age: "22",
  //     date: "2012/03/29",
  //     salary: "$433",
  //   },
  //   {
  //     id: 5,
  //     name: "Airi Satou",
  //     position: "Accountant",
  //     office: "Tokyo",
  //     age: "33",
  //     date: "2008/11/28",
  //     salary: "$162",
  //   },
  // ];

  let [viewdata, setViewdata] = useState([]);

  async function getData() {
    try {
      let data = await fetch(
        `https://61f1b9df072f86001749f34c.mockapi.io/users/${userId}`
      );
      let user = await data.json();
      console.log(user);
      setViewdata(user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <h3>id : {userId}</h3> */}
      <h3>Name : {viewdata.name}</h3>
      <h3>Position : {viewdata.position}</h3>
      <h3>Office: {viewdata.office}</h3>
      <h3>Age : {viewdata.age}</h3>
      <h3>Date : {viewdata.startdate}</h3>
      <h3>Salary : {viewdata.salary}</h3>
    </div>
  );
}

export default ViewUser;
