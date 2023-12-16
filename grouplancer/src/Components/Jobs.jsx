import React from 'react'



const Jobs = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div class="nav-down" style={{ marginLeft: "2rem" }} >
        <div><p style={{ color: "white", marginTop: "3rem" }}>Freelancer . Jobs
        </p>
        </div>
        <h1 style={{ color: "white", marginBottom: "1rem" }}>
          Browse by Category
        </h1>
        <input type="search" className="category_search" placeholder="Search for a category" color="white" style={{ border: "none", width: "80%", height: "2.5rem", borderRadius: "4px" }} />
      </div>
      <div className="box" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "2rem", marginRight: "2rem", marginTop: "4rem", color: "white" }}>
        <div className="box1" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row" }}>
          <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline", marginLeft: "0px" }}> General</h5>
            <a href="">Create a group for genera purpose...</a>
          </div>
        </div>
        <div className="box2" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row", marginLeft: "1rem" }}>
          <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline", marginLeft: "0px" }}> Web Development</h5>
            <a href="">Let's make a website together...</a>
          </div>
        </div> <div className="box3" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row", marginLeft: "1rem" }}>
          <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline", marginLeft: "0px" }}>App Development</h5>
            <a href="">Let's develop a mobile application together...</a>
          </div>
        </div> <div className="box4" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row", marginTop: "2rem" }}>
          <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline", marginLeft: "0px" }}> CyberSecurity</h5>
            <a href=""> CyberSecurity...</a>
          </div>
        </div> <div className="box5" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row", marginLeft: "1rem", marginTop: "2rem" }}>
          <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline", marginLeft: "0px" }}> IOT</h5>
            <a href="">IOT....</a>
          </div>
        </div>
        <div className="box5" style={{ color: "white", width: "30%", height: "6.5rem", display: "flex", flexDirection: "row", marginLeft: "1rem", marginTop: "2rem" }}>
          {/* <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline" }}> IOT</h5>
            <a href="">IOT....</a>
          </div> */}
        </div>
        {/* <div className="box2" style={{ border: "2px solid black", color: "white", width: "33%", marginLeft:"1.5rem"}}>box2</div>
        <div className="box3" style={{ border: "2px solid black", color: "white", width: "33%", marginLeft:"1.5rem"}}>box3</div> */}
      </div>

    </>
  )
}

export default Jobs