import { useEffect, useState } from "react"

const Post =()=>{
 const [nam,Setnam]= useState({name:'',mail:'',phone:''})
const [show,Setshow] = useState('')
  
const handlesubmit=(e)=>{
  e.preventDefault()
  const {name,mail,phone}= nam
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({name,mail,phone})

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3060/adduser", requestOptions)
  .then(response => response.text())
  .then(result => Setshow(result))
  .catch(error => console.log('error', error));
}
const handlechange=(e)=>{
  const {name,value}=e.target;
  Setnam({...nam,[name]:value})
}
 return(
<div style={{wordSpacing:"20px"}}>
  <form action="" onSubmit={handlesubmit}>
  <label htmlFor="">Name</label>
<input type="text" 
name="name"
value={nam.name}
onChange={handlechange}
/><br />
<label htmlFor="">Email</label>
<input type="email" 
name="mail"
value={nam.mail}
onChange={handlechange}
/><br />
<label htmlFor="">Phone</label>
<input type="number" 
name="phone"
value={nam.phone}
onChange={handlechange}

/><br />
<input type="submit"  className="sub"/>
</form>
<p>{show}</p>
</div>
 )
}
export default Post