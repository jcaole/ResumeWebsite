import React from 'react';

export default function MainView() {
    return (
        <>
            <div className="container mt-2 pb-5">
                <div className="row justify-content-md-center text-center fluid">
                    <div className="col-sm-4">
                        <h3 className='fw-bold'>Hobbies</h3>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <div className="row justify-content-md-center text-center">
                    <div className="col-sm-6">
                        <p>stuff goes here</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 bg-transparent">
                <div className="d-flex justify-content-md-around">
                    <div className="col mt-5 text-center">
                        {/* <img src="./img/marketwatch.png" className="rounded mx-auto d-block img-fluid" alt="market watch logo" stylename="width: 30%"/> */}
                    </div>
                    <div className="col mt-5 text-center fst-italic">
                        <p>more stuff goes here</p>
                    </div>
                    <div className="col mt-5 text-center">
                        {/* <img src="./img/Polygon.svg" className="rounded mx-auto d-block img-fluid" alt="Polygon.io logo" stylename="width: 20%"/> */}
                    </div>
                </div>
            </div>
        </>
    );
}