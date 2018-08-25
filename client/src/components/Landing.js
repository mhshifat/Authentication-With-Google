import React from "react";

const Landing = () => (
  <div className="row" style={{ marginTop: "50px" }}>
    <div className="col s12 m15">
      <div className="card-panel red lighten-2">
        <span className="white-text" style={{ textAlign: "center" }}>
          <h1>Emaily</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            enim perspiciatis saepe, nulla neque ad, vero animi consequuntur
            molestiae, quod facere necessitatibus ratione? Impedit, similique
            libero debitis exercitationem minima earum.
          </p>
          <center style={{ marginTop: "25px" }}>
            <a className="waves-effect waves-light btn" href="/auth/google">
              Login With Google
            </a>
          </center>
        </span>
      </div>
    </div>
  </div>
);

export default Landing;
