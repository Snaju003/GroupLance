import React,{useState} from 'react'
import LiveGroup from './LiveGroup';

const LiveGroups = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    const [data,setData] = useState()
    const getAllGroups = async (e) => {
        try {
            const response = await fetch("http://localhost:8080/api/group/get-all-groups", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('auth-token'),
              },
            });
            const json = await response.json();
            console.log(json)
            setData(json)
        } catch (error) {
            console.error(error);
        }
    }
    // const getGroup = async (e) => {
    //     try {
    //         const response = await fetch("http://localhost:8080/api/group/get-all-groups", {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem('auth-token'),
    //           },
    //         });
    //         const json = await response.json();
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Live Groups</h1>
            <div className="container">
                <div className="container row" onSubmit={getAllGroups}>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <LiveGroup title={title} description={description} color={color} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGroups;