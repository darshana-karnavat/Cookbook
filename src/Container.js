import React from "react";

const Container = () => {
  return (
    <div className="col-lg-3 padding-edit my-2">
      <a href="./pages/salad.html" className="text-decoration-none">
        <div
          className="card p-2 shadow-lg m-auto"
          style={{ width: "95%", minHeight: 300 }}
        >
          <img
            src="https://images.unsplash.com/photo-1555178897-2b91b4a9c9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="card-img-top"
            alt="salad"
          />
          <div className="card-body">
            <h5 className="card-title text-center text-dark">Salads</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Container;
