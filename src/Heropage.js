import React from "react";
import "./Heropage.css";
import { FaArrowRight } from "react-icons/fa";


const Heropage = ({jobs ,open}) => {

  

  return (
      
      <div className="container">
        <div className="card mb-3 my-3">
          <div className="row g-0 no-gutters">
            {/* <div className="col-lg-3">
              <img
                src={jobs.pic}
                className="card-img h-100"
                alt="emptypaller"
              />
            </div> */}
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">
                  <h3>Instagram_handle</h3>
                </h5>
                <h5 className="card-text">Required duration: 30sec</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <h4 className="card-text">Format: portrait</h4>
                <p className="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <div className="row">
                  <div className="col-6 px-1">
                    <button
                      type="button"
                      className="btn btn-primary col-12"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                      onClick={()=>open()}
                    >
                      View Script
                    </button>
                  </div>
                  <div className="col-6  px-1">
                    <button type="button" className="btn btn-primary col-12">
                      Book Slot
                    </button>
                  </div>
                </div>

        
              </div>
            </div>
            <div className="col-lg-3">
              <img
                src={jobs.pic}
                className="card-img h-100"
                alt="emptypaller"
              />
            </div>
          </div>
        </div>
        
      </div>
  );
};

export default Heropage;
