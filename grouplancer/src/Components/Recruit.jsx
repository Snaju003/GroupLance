import React from 'react'

const Recruit = (props) => {
    let { title, description, color } = props;
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" target='__blank' className="btn btn-primary">Recruit</a>
                </div>
            </div>
        </>
    )
}

export default Recruit