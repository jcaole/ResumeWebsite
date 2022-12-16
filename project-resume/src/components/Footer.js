import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Footer() {
    return (
        <>
            <footer className="py-1 my-1">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">GitHub</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">LinkedIn</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact Me</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                {/* <p class="text-center text-muted">last edit: 12.15.22</p> */}
                <p class="text-center text-muted">© 2023 Company, Inc</p>
            </footer>
        </>
    );
}