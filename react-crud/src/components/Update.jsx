import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
function Update(){
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email,setEmail]=useState('');
    const [post,setPost]=useState('');
    const [id, setID] = useState(null);
    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setFName(localStorage.getItem('First Name'));
        setLName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setPost(localStorage.getItem('Post'));
    },[]);
    function updateAPIData( ){
        axios.put(`http://localhost:4000/api/person/${id}`,{fName,lName,email,post});
    }
    return(
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input type ="text" placeholder="First Nmae" value={fName} onChange={(e)=>{setFName(e.target.value)}} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input  placeholder="Last Name" value={lName} onChange={(e)=>{setLName(e.target.value)}} />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
                <input type ="text" placeholder="Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Field>
            <Form.Field>
            <label>Position</label>
                <input type ="text" placeholder="Post" value={post}  onChange={(e)=>{setPost(e.target.value)}} />
            </Form.Field>
    
          <Link to="/read">  <Button type='submit' onClick={updateAPIData} >Update</Button></Link>
        </Form>
    )
}
export default Update;