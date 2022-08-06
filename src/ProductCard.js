import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function ProductCard({ data }) {
    const { productId } = useParams();

    let handleDelete = async (productId)=>{

        let ask = window.confirm("Do you want to delete this user?")
        if(ask){
          await axios.delete(`https://61f1b9df072f86001749f34c.mockapi.io/product/${productId}`)
        //   getData()
        }
        }

    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src={data.image} alt=""/>
                            </div>
                            <div className="text-container">
                                <h6>{data.title}</h6>
                                <p>{data.content}</p>
                                <Link to={`/products/${data.id}`} className="btn btn-sm mt-3 mx-1 btn-warning">View</Link>
                                <Link to={`/products/editdata/${data.id}`} className="btn btn-sm mt-3 mx-1 btn-primary">Edit</Link>
                                <button onClick={()=>handleDelete(data.id)} className="btn btn-sm mt-3 mx-1 btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
               
            </div>
        </>
    );
}
