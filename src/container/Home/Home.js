import React from "react";
import "../../App.scss";
// import Newin from "../Newin/Newin";

function Home() {
    return (
        <>
            <div className="div-3">
                <div className="container d-flex flex-column">
                    <div className="div-row row align-items-center py-12">
                        <div className="col-12 col-md-5 col-lg-4 col-xl-3 offset-md-1">
                            <h1 className="text-banner">Luxury Sale</h1>
                            <h2 className="display-1">-15%</h2>
                            <a className="btn btn-info" href="shop.html">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
