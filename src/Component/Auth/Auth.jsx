import React from "react"
import "./Auth.css"
import image from "../../Asset/card_and_pack/back.png"

export default function Auth() {

     return (
  <div> 
    <div className="Auth-form-container">
      <img src={image} alt="back" className="back"/>
         <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
             
            </div>
            <div className="input-group">
  <input required="" type="text" name="text" autoComplete="off" className="input"/>
  <label className="user-label">First Name</label> <br/><br/>
  <input required="" type="text" name="text" autoComplete="off" className="input"/>
  <label className="user-label">Password</label>
</div>
            <div className="form-group mt-3">
              
            </div>
            <div className="d-grid gap-2 mt-3"><br/>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div><br/>
            <p className="text-center mt-2">
              <a href="/auth/signup">Sign up</a> <br />
              <a href="/auth/forgot"> Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }
