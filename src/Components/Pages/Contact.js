import React from 'react'
import './Contact.css'

const Contact = () => {
  return (

    <div className="Container" >
      <h2 className=" common2 text-center text-uppercase py-2">Contact Us</h2>

      <div className=" mx-auto contact-form-container ps-4 pe-4 fs-5 shadow-sm">

        <form>

          <div className="mb-3">
            <label htmlfor="exampleInputName1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputName1" placeholder=" Enter Your Full Name" required />
          </div>

          <div className="mb-3">
            <label htmlfor="exampleInputPhone1" class="form-label">Contact Number</label>
            <input type="text" class="form-control" id="exampleInputPhone1" placeholder=" Enter Your Contact Number" />
          </div>


          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder=" Enter Your Email" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>


          <div className="mb-3 col-sm-4">
            <label htmlfor="exampleInputSelect1" className="form-label">When we will reach to you</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue=" ">Best Time to reach</option>
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Eveninig</option>
            </select>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary col-sm-12 mb-3">Submit</button>

          </div>



        </form>


      </div>


    </div>

  )
}

export default Contact
