import React from 'react'
import JoinedGroup from './JoinedGroup';

const JoinedGroups = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Joined Groups</h1>
            <div className="container">
                <div className="container row">
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup title={title} description={description} color={color} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinedGroups;