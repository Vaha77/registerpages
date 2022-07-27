import React from "react";

const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>skarati sska</h1>
        <div className="card blue darken-1 ">
          <div className="card-content white-text">
            <span className="card-title">avtorizaysa</span>
            <div>
              <div className="input-field">
                <input
                  type="text"
                  id="email"
                  name="email "
                  placeholder="emailni kiriting"
                  className="yellow-input"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="pasword"
                  name="password "
                  placeholder="password"
                  className="yellow-input"
                />
                <label htmlFor="email">parol</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button>kirish</button>
            <button>kirish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
