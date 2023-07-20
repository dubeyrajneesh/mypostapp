import React , {useState} from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../Config/Constant';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    // const navigate = useNavigate() ;

    const [fname , setFname] = useState("")
    const [lname , setLname] = useState("")
    const [phone , setPhone] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const alertFunction = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')

        var alertPlaceholder= document.getElementById('alertMsg')
      
        alertPlaceholder.append(wrapper)
      }

    // const [ loader , setLoader] = useState(false) ;

    const signup = (event) => {
        event.preventDefault() ;
        // setLoader(true) ;

        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const reqData = {
           name: fname +' ' + lname,
           phone: phone ,
           email: email,
           password: password 
        }

        axios.post(`${API_BASE_URL}/users` , reqData , config)
        .then((response)=>{
            // console.log(response) ;
            alertFunction('Registration Successfull , Please proceed to login')
            setEmail("")
            setPhone("")
            setFname("")
            setLname("")
            setPassword("")
        
        })

        .catch((err)=>{
            alertFunction('Some error occured')
            console.log(err)
        })

    }



  return (
    
<div className="Container" >
    <h2 className=" common2 text-center text-uppercase py-2">Create an account</h2>
    <div id="alertMsg"></div>

    <div className=" mx-auto contact-form-container ps-4 pe-4 fs-5 shadow-sm">

        <form onSubmit = {(ev)=>{signup(ev)}} >

            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                <input value={fname} onChange={(e)=> setFname(e.target.value)} type="text" className="form-control" id="exampleInputName1" placeholder=" Enter Your First Name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputName2" className="form-label">Last Name</label>
                <input value={lname} onChange={(e)=> setLname(e.target.value)} type="text" className="form-control" id="exampleInputName2" placeholder=" Enter Your Last Name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPhone1" className="form-label">Contact Number</label>
                <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" className="form-control" id="exampleInputPhone1" placeholder=" Enter Your Contact Number" />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder=" Enter Your Email" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">Password</label>
                <input value={password} onChange = {(e)=> setPassword(e.target.value)} type="password" className="form-control" id="pass" placeholder=" Enter Your Contact Number" />
            </div>


           

            <div className="mb-3">
                <button type="submit" className="btn btn-primary col-sm-12 mb-3">Sign Up</button>

            </div>



        </form>


    </div>


</div>
  )
}

export default Signup
