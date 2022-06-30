import React, { useState ,useEffect } from 'react';
import { Link} from 'react-router-dom'

function Table(){
  // const tableData = [
  //   {
  //     id:1,
  //     name: 'Tiger Nixon',
  //     position: 'System Architect',
  //     office: 'Edinburgh',
  //     age: '61',
  //     date: '2011/04/25',
  //     salary: '$320'
  //   },
  //   {
  //     id:2,
  //     name: 'Garrett Winters',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: '63',
  //     date: '2011/07/25',
  //     salary: '$170'
  //   },
  //   {
  //     id:3,
  //     name: 'Ashton Cox',
  //     position: 'Junior Technical Author',
  //     office: 'San Francisco',
  //     age: '66',
  //     date: '2009/01/12',
  //     salary: '$86'
  //   },  {
  //     id:1,
  //     name: 'Tiger Nixon',
  //     position: 'System Architect',
  //     office: 'Edinburgh',
  //     age: '61',
  //     date: '2011/04/25',
  //     salary: '$320'
  //   },
  //   {
  //     id:2,
  //     name: 'Garrett Winters',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: '63',
  //     date: '2011/07/25',
  //     salary: '$170'
  //   },
  //   {
  //     id:3,
  //     name: 'Ashton Cox',
  //     position: 'Junior Technical Author',
  //     office: 'San Francisco',
  //     age: '66',
  //     date: '2009/01/12',
  //     salary: '$86'
  //   },
  //   {
  //     id:4,
  //     name: 'Cedric Kelly',
  //     position: 'Senior Javascript Developer',
  //     office: 'Edinburgh',
  //     age: '22',
  //     date: '2012/03/29',
  //     salary: '$433'
  //   },
  //   {
  //     id:5,
  //     name: 'Airi Satou',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: '33',
  //     date: '2008/11/28',
  //     salary: '$162'
  //   },


  // ]
  const [tableData , setTableData] = useState([])

  useEffect(() => {
    async function getData(){
      try{
        let fetchDatas = await fetch ("https://61f1b9df072f86001749f34c.mockapi.io/users");
        let userData = await fetchDatas.json();
        // console.log(userData)
        setTableData(userData)
      }
      catch(error){
        console.log(error)
      }
    }
    getData()
  
  }, [])
  
  
 
  
  return (
    <>
      <div>
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <Link  to="/createusers" >
            Generate Users
          </Link>
        </p>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  tableData.map((data)=>{
                    return  <tr>
                    <td>{data.name}</td>
                    <td>{data.position}</td>
                    <td>{data.office}</td>
                    <td>{data.age}</td>
                    <td>{data.startdate}</td>
                    <td>{data.salary}</td>
                    <td>
<Link to={`/tables/users/${data.id}`} className="btn btn-sm mr-2 btn-warning">View</Link>
<Link to={`/tables/users/editusers/${data.id}`} className="btn btn-sm mr-2 btn-primary">Edit</Link>
<button className="btn btn-sm mr-2 btn-danger">Delete</button>
                    </td>
                  </tr>
                  })
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
