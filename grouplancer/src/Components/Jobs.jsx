import React from 'react'


const Jobs = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      <div style={{display:"flex", flex:"1", marginLeft:"20vh"}} >
      <div><p style={{color:"white"}}>Freelancer Jobs
        </p>
        </div>
        <h1 style={{color:"white"}}>
          Browse by category
        </h1>
        <input type="search" className="category_search" placeholder="Search for a category" color="white" style={{border : "none"}}/>
     
      </div>
        
        </>
    )
}

export default Jobs