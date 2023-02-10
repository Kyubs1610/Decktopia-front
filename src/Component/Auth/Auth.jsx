import React from "react"
import "./Auth.css"
import image from "../../Asset/card_and_pack/back.png"
import logo from '../../Asset/logo/logoB-removebg-preview.png'

export default function Auth() {

     return (
      <div> 
        <img src={logo} alt="logo" className="logo"/>
    <div className="Auth-form-container">
      <img src={image} alt="back" className="back"/>
         <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
             
            </div>
            <div class="input-group">
  <input required="" type="text" name="text" autocomplete="off" class="input"/>
  <label class="user-label">First Name</label> <br/><br/>
  <input required="" type="text" name="text" autocomplete="off" class="input"/>
  <label class="user-label">Password</label>
</div>
            <div className="form-group mt-3">
              
            </div>
            <div className="d-grid gap-2 mt-3"><br/>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div><br/>
            <p className="text-center mt-2">
              Forgot password? <a href="/auth/forgot">Reset</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }
