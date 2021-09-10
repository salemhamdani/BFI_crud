import { Table , Button, TableCell } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
function Read (){
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:4000/api/people").then((response)=>{
     setAPIData(response.data.data);
    })   
                    }, []);            
function setData(data){
    let { _id, fName, lName,email, post } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('First Name', fName);
        localStorage.setItem('Last Name', lName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Post',post);
}
function getData(){
    axios.get(`http://localhost:4000/api/people`).then((getData) => {
             setAPIData(getData.data.data);
         })
}
//setInterval(getData,5000);
function onDelete(id){
    axios.delete(`http://localhost:4000/api/person/${id}`).then(()=>getData());
}
    return (
        <div>
             <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Post</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

              <Table.Body>
                {APIData.map((data)=>{return(
                    <Table.Row>
                        <Table.Cell>{data.fName}</Table.Cell>
                        <Table.Cell>{data.lName}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.post}</Table.Cell>
                        <Link to='/update'><Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell></Link>
                        <TableCell> <Button onClick={() => onDelete(data._id)} >Delete</Button></TableCell>
                    </Table.Row>)
                })}
                    
                </Table.Body>
            </Table>    
        </div>

    )
}
export default Read;