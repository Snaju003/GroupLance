import React from "react";
import Invite from "./invite";

const Notification = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Notifications</h1>
            <div className="container">
                <div className="container row" style={{flexDirection:"column"}}>
                    <div class="col-md-3 mb-3">
                        <Invite title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <Invite title={title} description={description} color={color} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Notification;