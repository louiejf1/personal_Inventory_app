import React from "react";

export default function Card() {
  return (
    <section class="auth">
      <div className="dark-overlay">
        <div className="register-inner">
          <div className="buttons">
            <a href="/register" className="btn btn-primary">Sign Up</a>
            <a href="/login" className="btn btn-primary">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
}
