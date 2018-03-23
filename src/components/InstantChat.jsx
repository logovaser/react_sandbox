import React from 'react'
import {Link} from "react-router-dom";

const InstantChat = ({name, description}) => {
    return (
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-success">&bull; 110 online</p>
                <Link to="/partner_search"
                      className="btn btn-lg btn-primary">Find a partner</Link>
            </div>
        </div>
    )
};

export default InstantChat
