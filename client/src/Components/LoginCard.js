import React from "react";

export default function Card() {
  return (
    <section class="auth">
      <div className="dark-overlay">
        <div className="register-inner">
          {/* <h1 className="x-large">Hello.</h1> */}

          <div className="buttons">
            <a href="/register" className="btn btn-primary">Sign Up</a>
            <a href="/login" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
}
