import React from "react";

const LiveGroup = () => {
  return (
    <div class="container" style={{ padding: 20 }}>
      <div className="container">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button class="btn btn-outline-success me-2" type="button">
              Create a Group
            </button>
            <button class="btn btn-outline-success me-2" type="button">
              Join a Group
            </button>
          </div>
        </nav>
      </div>
      <div className="container">
        <h1>Live Groups</h1>
        <div class="row">
          <div class="column">
          <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  {/* <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */}
</div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default LiveGroup;
