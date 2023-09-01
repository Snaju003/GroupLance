import React from "react";
import Recruit from "./Recruit";

const Recruits = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Top Recruiters</h1>
            <div className="container">
                <div className="container row">
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Recruit title={title} description={description} color={color} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recruits;