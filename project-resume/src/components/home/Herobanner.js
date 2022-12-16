import React from 'react';

export default function Herobanner() {
    
    return (
        <>
            <section className="hero-banner main-nav py-3 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <div className={`nav-image`}>
                                <img src="img/moon.jpg" className="img-fluid" alt="blue graph banner" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 text-white fw-bold">Hello, my name is Jeremy</h1>
                            <p className="lead text-secondary my-5 text-white"> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}