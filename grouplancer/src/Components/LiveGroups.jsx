import React from 'react'
import LiveGroup from './LiveGroup';

const LiveGroups = () => {
    const title = "hello";
    const description = "world";
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Live Groups</h1>
            <div className="container">
                <div className="container row">
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGroups;