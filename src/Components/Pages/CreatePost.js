import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../Config/Constant';
import { useParams } from 'react-router-dom'
import { json } from 'react-router-dom';
import { JsonFunction } from 'react-router-dom';


const CreatePost = () => {

    const { postId, userId } = useParams()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [loader, setLoader] = useState(false)
    const[isEdit , setIsEdit] = useState(false)

    const populateData = () =>
    {
        if(postId)
        {
             setIsEdit(true) ; 
        //    let  methodType= 'PUT'

            setLoader(true)
        fetch(`${API_BASE_URL}/posts/${postId}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
               setTitle(json.title)
               setBody(json.body)
                setLoader(false)
            });

        }
    }

    const createPost = (event) => {
        setLoader(true)

        event.preventDefault();
        // console.log(event) ;
        let methodType= 'POST'
        let url = 'posts' ;
        if(postId)
        {
            methodType= 'PUT'
            url = `posts/${postId}` ;
        }
        let reqBody = JSON.stringify({
            title: title, 
            body: body,
            userId: 1,
        });

        

        fetch(`${API_BASE_URL}/${url}`, {
            method: `$(methodType)`,
            body: reqBody,
           
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setLoader(false)
                console.log(json)
                if(isEdit)
                {
                    alertFunction('Post edited Succesfully')
                }

                else{
                    alertFunction('post created successfully')
                }

            }) .catch((err)=>{
                alertFunction('Post created Succesfully')
                console.log(err)
                setLoader(false) ;

            })

    }

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
      
        useEffect(()=>{
            populateData() ;
        },[])

    return (
        <div>
            <div className="Container" >

                {
                    isEdit ? <h2 className=" common2 text-center text-uppercase py-2">Edit Posts</h2>
                    : <h2 className=" common2 text-center text-uppercase py-2">Create Posts</h2>

                }
                
                <div id="alertMsg"></div>
                

                {


                    loader ?

                        <div class="spinner-border text-primary mx-auto" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :


                        <div className=" mx-auto contact-form-container ps-4 pe-4 fs-5 shadow-sm">

                            <form onSubmit={(event) => { createPost(event) }}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputNametitle" className="form-label">Post Title</label>
                                    <input value = {title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="exampleInputNametitle" placeholder=" Enter Post Title" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputNamedescription" className="form-label">Post Description</label>
                                    <input value={body} onChange={(e) => { setBody(e.target.value) }} type="text" className="form-control" id="exampleInputNamedescription" placeholder=" Enter Post Description" required />
                                </div>

                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary col-sm-12 mb-3">Create Post</button>

                                </div>



                            </form>


                        </div>
                }

            </div>

        </div>
    )
}

export default CreatePost
