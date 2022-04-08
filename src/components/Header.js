import React from 'react'

function Header() {
    return (
        <div className="header">
             <nav className="navbar navbar-expand-lg navbar-light bg-grey">
        <div className="container">
            <a href="/" className="navbar-brand header">
                <h2>James Justis</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/"><span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/portfolio"><h2>Portfolio</h2></a>
                    <a className="nav-link" href="/contact"><h2>Contact</h2></a>
                </div>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Header
