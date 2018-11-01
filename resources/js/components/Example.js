// resources/js/components/Example.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RoutePath.js';

export default class Example extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                                Khanhpoly.com
                                <br/>
                                <span>software engineer, development</span>
                                </a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/about'}>About</Link>
                                        </li>
                                    
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/topic'}>Topic</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/admin'}>Admin</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div style={{ margin: '100px' }}><RouterPath/></div>
                </div>
            </HashRouter >
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Example/>,
        document.getElementById('example'));
}