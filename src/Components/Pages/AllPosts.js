import React, { useState, useEffect, } from 'react'
import { API_BASE_URL } from '../Config/Constant';
import { json } from 'react-router-dom';
// import { JsonFunction } from 'react-router-dom';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';

const AllPosts = () => {

    const navigate = useNavigate() 

    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false)

    

    const getAllPosts = () => {
        setLoader(true)
        fetch(`${API_BASE_URL}/posts`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setPosts(json)
                setLoader(false)
            });
    }
    useEffect(() => {

        getAllPosts();
    }, []);


    return (
        <div className="mb-5">
            <section className="featured-posts mb-3"  >

                <div className="Container mb-3" >
                    <h2 className=" common text-center text-uppercase py-2 mb-2">All Posts</h2>
                </div>


                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {

                        loader ?

                            <div class="spinner-border text-primary mx-auto" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>

                            : posts.map((post, index) => {

                                return (
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8=" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.body} </p>
                                            </div>
                                            <div className="card-footer">
                                                <Link to={`/posts/${post.id}/${post.userId}`} className=" col-12 btn btn-warning">Details</Link>


                                            </div>
                                           

                                        </div>
                                    </div>
                                )
                            })
                    }



                </div>


            </section>
        </div>
    )
}

export default AllPosts
