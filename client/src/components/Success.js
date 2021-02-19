import React, { Component } from "react";

export default class Success extends Component {
  render() {
    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
          <i className="fas fa-check-circle fa-7x text-success"></i>
          <h2>Hang Tight while your Resume Downloads!</h2>
          <a class="btn btn-info mt-4" href="" role="button">
            Regenerate CV
          </a>
          <br />
        </div>
      </div>
    );
  }
}
