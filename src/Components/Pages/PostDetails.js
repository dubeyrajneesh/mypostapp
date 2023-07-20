import React, { useState, useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../Config/Constant';
import axios from 'axios';

const PostDetails = () => {

    const navigate = useNavigate() ;

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [website, setWebsite] = useState()

    const getPostAndUser = () => {

        axios.get(`${API_BASE_URL}/posts/${postId}`)
            .then((postRes) => {
                const { title, body } = postRes.data;
                setTitle(title);
                setBody(body);

                // setPost(response.data);

                axios.get(`${API_BASE_URL}/users/${userId}`)
                    .then((userRes) => {
                        const { name, email, phone, website } = userRes.data;
                        setName(name)
                        setEmail(email)
                        setPhone(phone)
                        setWebsite(website)

                        // setUser(response.data);
                    })
                    .catch((err) => {


                        console.log(err);
                    })
            })
            .catch((err) => {


                console.log(err);
            })
    }

    const { postId, userId } = useParams()

    useEffect(() => {
        getPostAndUser();
    }, [])
    return (
        <div className="container">

            <div className="row">
                <h2 className=" common2 text-center text-uppercase py-2">Post Details</h2>
            </div>

            <div className="row">

                <div className=" col-lg-9 col-md-9 col-sm-12">

                    <div className="card mb-3">
                        <img src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>


                </div>

                <div className=" col-lg-3 col-md-3 col-sm-12">

                    <div className="card" style={{ minWidth: "18rem" }}>
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <p className="card-text">{name}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href={`emailto: ${email}`}>{email}</a>
                            </li>
                            <li className="list-group-item">
                                < a href={`tel: ${phone}`}>{phone}</a>
                            </li>
                            <li className="list-group-item">
                                < a href={`www.${website}`}>visit our websites</a>
                            </li>
                            <li className="list-group-item">
                                <div className = "d-block" >
                                    <button onClick={()=>{navigate(-1)}} className = "btn btn-primary w-100"> Back</button>
                                </div>
                            </li>
                        </ul>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default PostDetails
