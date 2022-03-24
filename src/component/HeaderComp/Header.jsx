import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/YouTube">YouTube</Link></li>
                <li><Link to="/Post">Post</Link></li>
                <li><Link to="/HelloComponent">HelloComponent</Link></li>
                <li><Link to="/BlogPost">BlogPost</Link></li>
                <li><Link to="/LifeCycleComp">LifeCycleComp</Link></li>
            </ul>
        </>
    )
}