import React ,{useState, useEffect} from "react";
import {Input, Menu } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { includes } from "lodash";
function Search(props){
  const [fname,setFname]=useState("");
  const [APIData, setAPIData] = useState([]);
  const [res,setRes]=useState([]);
   useEffect(() => {
   axios.get("http://localhost:4000/api/people").then((response)=>{
    setAPIData(response.data.data);
   })   
                   }, []) 
  function handelSearch(e){ 
  setFname(e.target.value);
  setRes(APIData.filter((data)=> data.fName.includes(fname)));
  }
  function setData(){
    localStorage.setItem('Res',JSON.stringify(res));
  }
if (props.item==="home")return (
<Menu.Menu position='right'>
<Menu.Item>
  <Input icon='search' placeholder='Search by firstName...' value={fname} onChange={handelSearch} />
</Menu.Item>
<Link to='/res'>
<Menu.Item
          name='find'
          active={true}
          onClick={setData}
        />
</Link>
</Menu.Menu>

)
return <div></div>;
}
 
export default Search;