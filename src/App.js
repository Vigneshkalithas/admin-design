import "./App.css";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";
import Table from "./Table";
import TopBar from "./TopBar";
import { Routes , Route } from 'react-router-dom';
import Footer from "./Footer";
import Create from "./Create";
import Product from "./Product";
import ViewUser from "./ViewUser";
import ViewProduct from "./ViewProduct";
import Edituser from "./Edituser";


function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar/>
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/products" element={<Product/>}/>               
                <Route path="/tables" element={<Table/>}/>
                <Route path="/createusers" element={<Create/>} />
                <Route path="/tables/users/:userId" element={<ViewUser/>}/>
                <Route path="/tables/users/editusers/:userId" element={<Edituser/>}/>
                <Route path="/products/:productId" element={<ViewProduct/>}/>

              </Routes>
              {/* <Dashboard/> */}
              {/* <Table/> */}
            </div>

          </div>
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
