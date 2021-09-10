import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Create  ()  {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email,setEmail]=useState('');
    const [post,setPost]=useState('');
    function postData(){
        axios.post('http://localhost:4000/api/person',
        {fName,lName,email,post})
    }
    return(
    <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e)=>{setFName(e.target.value)}} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input type="text"  placeholder='Last Name' onChange={(e)=>{setLName(e.target.value)}} />
        </Form.Field>
        <Form.Field>
        <label>Email</label>
            <input  placeholder='Address Email'  onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Field>
        <Form.Field>
        <label>Position</label>
            <input placeholder='Post' onChange={(e)=>{setPost(e.target.value)}} />
        </Form.Field>

        <Link to="/read" ><Button type='submit' onClick={postData}>Submit</Button></Link>
    </Form>
)}

export default Create;