import React from 'react'
import MyGroup from './Mygroup';

const MyGroups = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>My Groups</h1>
            <div className="container">
                <div className="container row">
                    <div class="col-md-3 mb-3">
                        <MyGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <MyGroup title={title} description={description} color={color} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MyGroups;