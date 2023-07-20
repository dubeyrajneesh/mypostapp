import React, { useState , useEffect , useReducer , useContext , createContext} from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../Config/Constant';
import { useNavigate } from 'react-router-dom';
import { userReducer } from '../Reducer/userReducer';
import { UserContext } from '../../App';

const Login = () => {




    const navigate = useNavigate();


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {state , dispatch} = useContext(UserContext) ;

    const alertFunction = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        var alertPlaceholder = document.getElementById('alertMsg')

        alertPlaceholder.append(wrapper)
    }

    // const [ loader , setLoader] = useState(false) ;

    const login = (event) => {
        event.preventDefault();
        // setLoader(true) ;

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const reqData = {

            email: email,
            password: password
        }

        axios.post(`${API_BASE_URL}/users`, reqData, config)
            .then((response) => {
                // console.log(response) ;
                const userId = 1;
                fetch(`${API_BASE_URL}/users/${userId}`)
                    .then((response) => response.json())
                    .then((json) => {
                        localStorage.clear() ;
                        localStorage.setItem('user' , JSON.stringify(json));
                        localStorage.setItem('token' , 'eredfdgfgfg');
                        
                        const token = localStorage.getItem('token');
                        const user = JSON.parse(localStorage.getItem('user'));
                        const userState = { 'token': token, 'user': user};
                        const action = {type:'LOGIN' , payload: userState} ;
                        dispatch(action) ;
                      
                        
                        navigate('/posts')
                    });
                
                alertFunction('Login Successfull , Please proceed to forward')


            })

            .catch((err) => {
                alertFunction('Some error occured')
                console.log(err)
            })

    }

    return (

        <div className="Container" >
            <h2 className=" common2 text-center text-uppercase py-2">Login into your account</h2>
            <div id="alertMsg"></div>

            <div className=" mx-auto contact-form-container ps-4 pe-4 fs-5 shadow-sm">

                <form onSubmit={(e) => login(e)}>


                    <div className="mb-3">
                        <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" placeholder=" Enter Your Email" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="pass" class="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="pass" placeholder=" Enter Your Contact Number" />
                    </div>




                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary col-sm-12 mb-3">Login</button>

                    </div>



                </form>


            </div>


        </div>
    )
}

export default Login
