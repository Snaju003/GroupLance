import React from 'react'

const LiveGroup = (props) => {
    let { title, description } = props;
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" target='__blank' className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default LiveGroup