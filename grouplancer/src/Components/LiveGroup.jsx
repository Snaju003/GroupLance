import React from "react";

const LiveGroup = () => {
  return (
    <div class="container" style={{ padding: 20, }}>
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
            <button class="btn btn-outline-success " type="button">
              Create a Group
            </button>
            <button class="btn btn-outline-success " type="button">
              Join a Group
            </button>
          </form>
          
        </div>
      </nav>
    </div>
  );
};

export default LiveGroup;
