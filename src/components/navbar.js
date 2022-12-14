import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Produtos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li key={0} className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li key={1} className="nav-item">
                            <Link className="nav-link" to="/cadastro-produtos">Cadastro</Link>
                        </li>
                        <li key={2} className="nav-item">
                            <Link className="nav-link" to="/consulta-produtos">Consulta</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}