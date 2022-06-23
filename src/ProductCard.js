import React from "react";

export function ProductCard({ data }) {
    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href>
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src={data.image} alt />
                            </div>
                            <div className="text-container">
                                <h6>{data.title}</h6>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
